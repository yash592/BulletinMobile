import React, { Component } from "react";
import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";

const Input = ({
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  onChangeText,
  value
}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "70%",
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    shadowColor: "black",
    shadowRadius: 122,
    shadowOffset: { width: 20, height: 10 },
    shadowOpacity: 1,
    elevation: 1
  }
});

export { Input };
