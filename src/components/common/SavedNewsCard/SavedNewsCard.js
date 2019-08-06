import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const SavedNewsCard = props => {
  console.log(props.style);
  return (
    <View style={[styles.container, props.style.opacity || 1]}>
      <Image
        source={{
          uri: props.img
        }}
        style={styles.image}
      />
      <Text style={props.style.titleText}>{props.title}</Text>
      <Text style={props.style.authorText}>{props.author}</Text>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexWrap: "wrap", padding: 10 }}>
          <Text style={props.style.summaryText}>{props.summary}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    width: "96%",
    height: 600,
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
