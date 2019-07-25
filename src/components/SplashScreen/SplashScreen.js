import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "white",

    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginBottom: 16
  }
});

class SplashScreen extends Component {
  slides = [
    {
      key: "somethun",
      title: "Quick setup, good defaults",
      text:
        "React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!",
      icon: "ios-images-outline",
      color: ["#63E2FF", "#B066FE"]
    },
    {
      key: "somethun1",
      title: "Super customizable",
      text:
        "The component is also super customizable, so you can adapt it to cover your needs and wants.",
      icon: "ios-options-outline",
      color: ["#A3A1FF", "#3A3897"]
    },
    {
      key: "somethun2",
      title: "No need to buy me beer",
      text: "Usage is all free",
      icon: "ios-beer-outline",
      color: ["#29ABE2", "#4F00BC"]
    }
  ];
  _renderItem = props => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          width: props.width,
          height: props.height
        }
      ]}
      colors={["#A3A1FF", "#3A3897"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1 }}
    >
      <Ionicons
        style={{ backgroundColor: "transparent" }}
        name={props.icon}
        size={200}
        color="white"
      />

      <Text style={styles.title}>{props.title}!</Text>
      <Text style={styles.text}>{props.text}</Text>
    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={this.slides}
        renderItem={this._renderItem}
        bottomButton
      />
    );
  }
}

export default SplashScreen;
