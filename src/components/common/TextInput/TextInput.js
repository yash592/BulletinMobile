import React, { Component } from "react";
import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Gradient } from "../Gradient";

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
    height: 45,
    width: "98%",
    padding: 10,
    margin: 10,
    borderColor: "#8337F1",
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
