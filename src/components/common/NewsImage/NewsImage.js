import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const NewsImage = ({ source, style, key }) => {
  // console.log(source, style);
  return (
    <Image
      key={key}
      source={{
        uri: source
      }}
      style={{
        width: style.width,
        height: style.height,
        resizeMode: "cover"
      }}
    />
  );
};

export { NewsImage };
