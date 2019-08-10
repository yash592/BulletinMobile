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
  onChange,
  onSubmitEditing,
  value
}) => {
  // console.log("val", value);
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      onChange={onChange}
      onSubmitEditing={onSubmitEditing}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: "80%",
    padding: 10,
    margin: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5

    // shadowColor: "black",
    // shadowRadius: 2,
    // shadowOffset: { height: 10 },
    // shadowOpacity: 1,
    // elevation: 1.5
  }
});

export { Input };
