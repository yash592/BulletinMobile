import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const NewsCardLarge = props => {
  console.log(props.author);

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <ImageBackground
        source={{ uri: props.img }}
        style={styles.imgBox}
        imageStyle={styles.imgStyle}
      >
        {props.children}
        <View style={styles.textBox}>
          <Text style={props.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.authorBox}>
          <Text style={props.textStyle}>{props.author}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 1,
    marginColor: "red",
    width: "100%",
    height: 400,
    backgroundColor: "#102135",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5
  },
  imgBox: {
    width: "97%"
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
    position: "relative",
    backgroundColor: "#102135"
  },
  textBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    padding: 5,
    justifyContent: "flex-end"
  },
  text: {
    fontSize: 12,
    color: "white",
    opacity: 1,
    shadowColor: "black",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  },
  authorBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: "90%",
    bottom: "5%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  author: {
    fontSize: 12,
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  }
};

export { NewsCardLarge };
