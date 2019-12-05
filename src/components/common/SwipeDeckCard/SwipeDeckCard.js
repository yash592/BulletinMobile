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
  //console.log("Swipedeckcard", props);
  return (
    <View style={styles.Container}>
      <Image
        source={{
          uri: props.Image
        }}
        style={styles.Image}
      />
      <View style={styles.titleText}>
        <Text style={props.styles.titleText}>{props.title}</Text>
      </View>
      <View style={styles.authorText}>
        <Text style={props.styles.authorText}>{props.Author}</Text>
      </View>
      <View style={styles.summaryText}>
        <Text style={(props.styles.summaryText, { flexShrink: 1 })}>
          {props.Content}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  Container: {
    width: 0.96 * WIDTH,
    height: 0.8 * HEIGHT,
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
    height: "50%",
    resizeMode: "cover"
  },
  titleText: {
    paddingLeft: 8,
    paddingRight: 8
  },
  authorText: {
    fontFamily: "RobotoCondensed",
    fontSize: 20,
    color: "gray"
  },
  summaryText: {
    fontFamily: "Roboto",
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 25,
    flex: 1,
    flexWrap: "wrap"
  }
};
export { SwipeDeckCard };
