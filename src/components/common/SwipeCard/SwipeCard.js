import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  PanResponder,
  Dimensions,
  Animated
} from "react-native";
import * as Font from "expo-font";
import { Platform } from "@unimodules/core";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SWIPE_MIN = 0.5 * WIDTH;

class SwipeCard extends Component {
  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log("Gesture", gesture);
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        // gesture.dx > SWIPE_MIN ? this.beginSwipe(title) : this.resetPosition();
      }
    });
    this.state = { panResponder, position, index: 0 };
  }
  async componentDidMount() {
    await Font.loadAsync({
      OpenSans: require("../../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
    console.log("fontloaded");
  }

  getCardStyle = () => {
    const { position } = this.state;
    // console.log(position);

    const rotate = position.x.interpolate({
      inputRange: [0, WIDTH / 8, WIDTH / 6, WIDTH / 4, WIDTH / 2, WIDTH],
      outputRange: [1, 0.8, 0.6, 0.4, 0.2, 0]
    });
  };

  renderCards() {
    const deck = this.props.data.map((item, i) => {
      // if (i === this.state.index) return null;

      if (i === 0) {
        return (
          <Animated.View
            style={[
              this.state.position.getLayout(),
              { zIndex: 99 },
              {
                width: WIDTH,
                position: "absolute"
              }
            ]}
            {...this.state.panResponder.panHandlers}
            key={item.keyProp}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          style={{ ...this.state.panResponder.panHandlers }}
          key={item.keyProp}
          style={{
            top: 20 * (i - this.state.index),
            zIndex: -i,
            width: WIDTH,
            position: "absolute"
          }}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    });
    return Platform.OS === "android" ? deck : deck.reverse();
  }

  render() {
    console.log("SWIPECARD", this.props, this.state.panResponder);
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "96%",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 0.25,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowColor: "black",
    borderRadius: 8,
    backgroundColor: "white"
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
};

export default SwipeCard;
