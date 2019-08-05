import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const SavedNewsCard = props => {
  // console.log(props);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.img
        }}
        style={styles.image}
      />
      <Text>{props.title}</Text>
      <Text>{props.author}</Text>
      <Text>{props.summary}</Text>
      <Text>{props.id}</Text>
    </View>
  );
};

const styles = {
  container: {
    width: "96%",
    height: 700,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 0.25,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowColor: "black",
    borderRadius: 10,
    backgroundColor: "white"
  },
  image: {
    width: "100%",
    height: "33%",
    resizeMode: "cover"
  }
};

export { SavedNewsCard };
