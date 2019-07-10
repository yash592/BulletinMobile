import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const NewsListCard = props => {
  console.log(props);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onCardPress}>
      <Image source={{ uri: props.img }} style={styles.img} />
      {props.children}
      <View style={styles.textBox}>
        <Text style={props.style}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
    width: "98%",
    height: 75,
    backgroundColor: "transparent",

    flexDirection: "row"
  },
  img: {
    width: "17.1%",
    height: "100%"
  },
  textBox: {
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingTop: 0
  }
};

export { NewsListCard };
