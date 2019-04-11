import React, { Component } from "react";
import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: "70%",
    backgroundColor: "#EAE0F7",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    margin: 10,
    borderRadius: 4,
    shadowColor: "black",
    shadowRadius: 122,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    elevation: 2
  },
  text: {}
};

export { Button };
