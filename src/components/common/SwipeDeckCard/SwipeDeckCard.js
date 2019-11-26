import React, { Component } from "react";
import { View, Style, Image, Text, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SwipeDeckCard = props => {
  console.log("SWIPEDECKCARD", props);
  return (
    <View
      style={{
        width: 0.9 * WIDTH,
        height: 0.7 * HEIGHT
      }}
    >
      <Image
        source={{
          uri:
            "https://www.insidehighered.com/sites/default/server_files/media/politics_0.png"
        }}
        style={{ width: "100%", height: "90%" }}
      />
      <Text>Title</Text>
      <Text>Author</Text>
      <Text>Content</Text>
    </View>
  );
};

export { SwipeDeckCard };
