import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

const SavedNewsCard = props => {
  console.log(props);
  return (
    <View style={[styles.container, props.style.opacity || 1]}>
      <Image
        source={{
          uri: props.img
        }}
        style={styles.image}
      />
      <Text style={[props.style.titleText, { paddingLeft: 10 }]}>
        {props.title}
      </Text>
      <Text
        style={[props.style.authorText, { paddingLeft: 10, paddingTop: 1 }]}
      >
        {props.author}
      </Text>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexWrap: "wrap",
            padding: 10,
            marginBottom: 20,
            height: "90%"
          }}
        >
          <Text style={props.style.summaryText}>{props.summary}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "96%",

    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 0.25,
    elevation: 5,
    shadowOpacity: 0.5,
    shadowColor: "black",
    borderRadius: 8,
    backgroundColor: "white"
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
};

export { SavedNewsCard };
