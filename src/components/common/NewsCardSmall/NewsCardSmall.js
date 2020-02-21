import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Platform
} from "react-native";

const NewsCardSmall = props => {
  // console.log("NewsCardSmall props", props);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <ImageBackground
        source={{ uri: props.img }}
        style={styles.imgStyle}
        imageStyle={styles.imgStyle}
      >
        {props.children}
        <View style={styles.textBox}>
          <Text style={props.textStyle}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
    width: "98%",
    height: 250,
    shadowColor: "black",
    shadowOffset: {
      width: Platform.OS === "ios" ? 2 : 10,
      height: Platform.OS === "ios" ? 2 : 10
    },
    shadowOpacity: Platform.OS === "ios" ? 0.5 : 1,
    shadowRadius: Platform.OS === "ios" ? 0.5 : 1,
    elevation: Platform.OS === "ios" ? 0 : 5,
    backgroundColor: "white",
    borderRadius: 5
  },
  imgBox: {
    width: "100%"
  },
  imgStyle: {
    width: "100%",
    height: "80%",
    opacity: 1
    // position: "relative"
  },
  textBox: {
    position: "absolute",
    top: "80%",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 5
    // justifyContent: "flex-end"
  },
  text: {
    fontSize: 12,

    shadowColor: "white",
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
    padding: 15
    // justifyContent: "flex-end"
  },
  author: {
    fontSize: 12,
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  }
};

export { NewsCardSmall };
