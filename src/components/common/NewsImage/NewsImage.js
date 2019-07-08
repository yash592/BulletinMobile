import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const NewsImage = ({ source, style }) => {
  console.log(source, style);
  return (
    <Image
      source={{
        uri: source
      }}
      style={{
        width: style.width,
        height: style.height,
        shadowColor: "black",
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
      }}
    />
  );
};

export { NewsImage };
