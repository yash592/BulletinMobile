import React, { Component } from "react";
import { View, Animated, Stylesheet, Text, PanResponder } from "react-native";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        position.setValue({ x: 0, y: 0 });
      }
    });
    this.state = { panResponder, position };
  }
  renderCards = () => {
    return DATA.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            style={[this.state.position.getLayout(), styles.animated]}
            {...this.state.panResponder.panHandlers}
          >
            <Text> {item.text}</Text>
          </Animated.View>
        );
      }
      return (
        <View style={styles.animated} {...this.state.panResponder.panHandlers}>
          <Text> {item.text}</Text>
        </View>
      );

      // console.log(item);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          marginTop: 30,
          alignItems: "center",
          backgroundColor: "white",
          flexDirection: "column"
        }}
      >
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  animated: {
    width: "40%",
    height: 40,
    backgroundColor: "#FF8C84",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
};

export default Deck;
