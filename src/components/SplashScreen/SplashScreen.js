import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
// import { splashScreenSlides } from "../common/SplashScreenSlides";
import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";

const splashScreenSlides = [
  {
    key: "slideOne",
    title: "Search Recipes",
    text:
      "Bulletin is a tl;dr news app built when you want a gist of an article without falling for clickbait",
    // image: require("../../assets/images/SplashScreen1.jpg"),

    colors: ["#E3EBFF", "#C6DD4E"]
  },
  {
    key: "slideTwo",
    title: "Search by term, categories etc",
    text: "Search for your favorite topics, categories",
    // image: require("../../assets/images/SplashScreen1.jpg"),
    colors: ["#E3EBFF", "#FDE53D"]
  },
  {
    key: "slideThree",
    title: "Summarize",
    text: "Click any story to get a concise and precise gist of a story",
    // image: require("../../assets/images/SplashScreen1.jpg"),
    colors: ["#E3EBFF", "#FEB834"]
  }
];

class SplashScreen extends Component {
  _renderItem = props => {
    // console.log(props);
    return (
      <LinearGradient
        style={[
          styles.mainContent,
          {
            width: props.dimensions.width,
            height: props.dimensions.height
          }
        ]}
        colors={["#E3EBFF", "#FEB834"]}
        start={{ x: 0, y: 0.8 }}
        end={{ x: 0, y: 1 }}
      >
        <Ionicons
          style={{ backgroundColor: "transparent" }}
          name={props.icon}
          size={200}
          color="white"
        />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </LinearGradient>
    );
  };

  render() {
    console.log(splashScreenSlides);
    return (
      <AppIntroSlider
        slides={splashScreenSlides}
        renderItem={this._renderItem}
        onDone={this._onDone}
        showSkipButton
        buttonTextStyle={{ color: "#223480" }}
        onSkip={this._onDone}
        dotStyle={{ backgroundColor: "#223480" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
    // display: "flex"

    // backgroundColor: ""
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.9,
    alignItems: "center"
    // resizeMode: 'contain'
  },
  logo: {
    // flex: 1,
    height: "30%",
    width: "100%",
    // backgroundColor: '#FCEBBF',
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  text: {
    color: "black",
    fontSize: 18,
    // backgroundColor: 'transparent',
    textAlign: "center",

    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    color: "black",

    backgroundColor: "transparent",
    textAlign: "center",
    marginBottom: 16
  }
});

export default SplashScreen;
