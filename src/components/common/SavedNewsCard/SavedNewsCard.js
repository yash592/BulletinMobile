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
    </View>
  );
};

const styles = {
  container: {
    width: "96%",
    height: 700,
    borderWidth: 1,
    borderColor: "grey"
  },
  image: {
    width: "100%",
    height: "33%",
    resizeMode: "cover"
  }
};

export { SavedNewsCard };
