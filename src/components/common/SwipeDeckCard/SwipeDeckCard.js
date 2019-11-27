import React, { Component } from "react";
import {
  View,
  Style,
  Image,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SwipeDeckCard = props => {
  console.log("SWIPEDECKCARD", props);
  return (
    <View
      style={{
        width: 0.9 * WIDTH,
        height: 0.7 * HEIGHT,
        backgroundColor: "white"
      }}
    >
      <ImageBackground
        source={{
          uri: props.Image
        }}
        style={{ width: "100%", height: "70%" }}
      />
      <Text>{props.title}</Text>
      <Text>{props.author}</Text>
      <Text>{props.content}</Text>
    </View>
  );
};

export { SwipeDeckCard };
