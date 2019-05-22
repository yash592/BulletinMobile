import { LinearGradient } from "expo";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Gradient = props => {
  return (
    <LinearGradient
      style={props.style}
      colors={props.colors}
      start={props.start}
      end={props.end}
    >
      {props.children}
    </LinearGradient>
  );
};

export { Gradient };
