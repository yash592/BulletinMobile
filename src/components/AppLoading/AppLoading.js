import React, { Component } from "react";
import { Image, Text, View, AsyncStorage } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";

class LoadApp extends Component {
  state = {
    isReady: false
  };

  loadCacheImages = async () => {
    const images = [
      require("../../assets/categoryImages/world.jpg"),
      require("../../assets/categoryImages/tech.jpg"),
      require("../../assets/categoryImages/sports.jpg"),
      require("../../assets/categoryImages/science.jpg"),
      require("../../assets/categoryImages/politics.png"),
      require("../../assets/categoryImages/health.jpg"),
      require("../../assets/categoryImages/entertainment.jpg"),
      require("../../assets/categoryImages/business.jpg"),
      require("../../../assets/splash.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  finished = () => {
    console.log("finished loading");
    this.setState({
      isReady: true
    });
    this.goToScreen();
  };

  goToScreen = async () => {
    const value = await AsyncStorage.getItem("Country");
    console.log("val", value);
    if (!value) {
      Actions.countrypick();
    } else {
      Actions.home();
    }
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadCacheImages}
          onFinish={this.finished}
          onError={() => console.log("error!")}
        />
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../../assets/splash.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
}

export default LoadApp;
