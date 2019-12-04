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
  console.log("Swipedeckcard", props);

  return (
    <View style={styles.Container}>
      <Image
        source={{
          uri: props.Image
        }}
        style={styles.Image}
      />
      <Text style={props.styles.titleText}>{props.title}</Text>
      <Text>{props.author}</Text>
      <Text>{props.content}</Text>
    </View>
  );
};

const styles = {
  Container: {
    width: 0.96 * WIDTH,
    height: 0.7 * HEIGHT,
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    backgroundColor: "white",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 0.25,
    elevation: 5,
    shadowOpacity: 0.5,
    borderRadius: 8
  },
  Image: {
    width: "100%",
    height: "60%"
  }
};
export { SwipeDeckCard };
