import React, { Component } from "react";
import { View, Text, Image, Button, AsyncStorage } from "react-native";

class CountryPicker extends Component {
  setData = async () => {
    console.log("setdata");
    try {
      await AsyncStorage.setItem("Country", "in");
    } catch (error) {
      console.log(error);
    }
  };

  getData = async () => {
    const value = await AsyncStorage.getItem("Country");
    if (value != null) {
      console.log(value);
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pick your country!</Text>
        <Button onPress={this.setData} title={"Set Data"} />
        <Button onPress={this.getData} title={"Get data"} />
      </View>
    );
  }
}

export default CountryPicker;
