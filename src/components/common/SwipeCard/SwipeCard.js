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
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        gesture.dx > SWIPE_MIN ? this.beginSwipe(title) : this.resetPosition();
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
    return this.props.data.map((item, i) => {
      return (
        <Animated.View
          style={this.getCardStyle()}
          {...this.state.panResponder.panHandlers}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    });
  }

  render() {
    console.log("SWIPECARD", this.props, this.state.panResponder);
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
