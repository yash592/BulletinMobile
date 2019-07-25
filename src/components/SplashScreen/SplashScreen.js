import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "flex-start",
    alignItems: "center"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "black",

    textAlign: "center",
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    marginBottom: 16
  }
});

const slides = [
  {
    key: "somethun",
    title: "Quick setup, good defaults",
    text:
      "React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!",
    img: "https://i.imgur.com/R0DdoPk.png",
    color: ["white", "#EAE0F7"]
  },
  {
    key: "somethun1",
    title: "Super customizable",
    text:
      "The component is also super customizable, so you can adapt it to cover your needs and wants.",
    img: "https://i.imgur.com/CUfu2Kn.png",
    color: ["white", "#EAE0F7"]
  },
  {
    key: "somethun2",
    title: "No need to buy me beer",
    text: "Usage is all free",
    img: "https://i.imgur.com/CUfu2Kn.png",
    color: ["white", "#EAE0F7"]
  }
];

class SplashScreen extends Component {
  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          width: item.width,
          height: item.height
        }
      ]}
      colors={item.color}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0, y: 1 }}
    >
      <Image
        style={{
          width: 200,
          height: 350,
          resizeMode: "contain"
        }}
        source={{ uri: item.img }}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </LinearGradient>
  );

  render() {
    return <AppIntroSlider slides={slides} renderItem={this._renderItem} />;
  }
}

export default SplashScreen;
