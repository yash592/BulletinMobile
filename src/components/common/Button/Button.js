import React, { Component } from "react";
import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from "react-native";

const Button = ({ onPress, buttonText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: "70%",
    backgroundColor: "#4ADA9C",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    margin: 10,
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 122,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    elevation: 2
  },
  text: {
    fontSize: 20,
    color: "white"
  }
};

export { Button };
