import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    flex: 0.6,
    width: "80%",
    height: "40%",
    resizeMode: "contain"
  }
});

const splashScreenSlides = [
  {
    key: "slideOne",
    title: "Search Recipes",
    text:
      "Bulletin is a tl;dr news app built when you want a gist of an article without falling for clickbait",
    image: require("../../assets/images/SplashScreen1.jpg"),

    colors: ["#E3EBFF", "#C6DD4E"]
  },
  {
    key: "slideTwo",
    title: "Search by term, categories etc",
    text: "Search for your favorite topics, categories",
    image: require("../../assets/images/SplashScreen1.jpg"),
    colors: ["#E3EBFF", "#FDE53D"]
  },
  {
    key: "slideThree",
    title: "Summarize",
    text: "Click any story to get a concise and precise gist of a story",
    image: require("../../assets/images/SplashScreen1.jpg"),
    colors: ["#E3EBFF", "#FEB834"]
  }
];

export { splashScreenSlides };
