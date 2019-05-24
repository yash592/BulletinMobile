import React, { Component } from "react";
import { Text, View } from "react-native";

class Font extends Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      roboto: require("../../assets/fonts/SourceSansPro-Regular")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return <Text>{props.text}</Text>;
  }
}

export default Font;
