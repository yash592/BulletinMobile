import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

// const categories = require("../../assets/categories");

const CategoryTile = props => {
  console.log("props", props);
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: props.img }}
        style={styles.imgBox}
        imageStyle={styles.imgStyle}
      >
        {props.children}
        <View style={styles.textBox}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    margin: 5,
    width: "45%",
    height: "23.5%",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  imgBox: {
    width: "100%"
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    opacity: 0.2,

    position: "relative",
    borderRadius: 10
  },
  textBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 15,
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    shadowColor: "white",
    textShadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  }
};

export { CategoryTile };
