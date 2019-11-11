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
      onStartShouldPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
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

  renderCards() {
    <Animated.View
      style={{ position: "absolute", width: WIDTH }}
      {...this.state.panResponder.panHandlers}
    >
      <Text>Hi</Text>
    </Animated.View>;
  }

  render() {
    console.log("SWIPECARD");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.renderCards()}
      </View>
    );
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
