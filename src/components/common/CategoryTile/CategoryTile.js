import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// const categories = require("../../assets/categories");

const CategoryTile = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.img }} style={styles.image}>
        {props.children}
      </Image>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",

    backgroundColor: "red"
  },
  image: {
    width: 140,
    height: 140,
    margin: 20
  }
};

export { CategoryTile };
