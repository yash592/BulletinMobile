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
      "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
      "https://www.insidehighered.com/sites/default/server_files/media/politics_0.png",
      "https://columbiabusinesstimes.com/wp-content/uploads/2019/02/agenda-analysis-business-990818.jpg",
      "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/277713_CY83YR.jpg",
      "http://greatoceanroadrunfest.com.au/wp-content/uploads/2018/12/62144.jpg",
      "https://img.newatlas.com/female-spacewalk-2.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C0%2C959%2C539&w=616&s=400df40f17dc6d8580af0f9596cea4cc",
      "https://www.unilad.co.uk/wp-content/uploads/2018/06/Ronaldo-Stands.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mFqd8JJKOyL9iy5kznE2nheBsNT_zM-31-8csVM1U64p3s4l",
      "https://i.imgur.com/R0DdoPk.png",
      "https://i.imgur.com/Ih52wzg.png",
      "https://i.imgur.com/95tovia.png"
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  };

  finished = async () => {
    console.log("finished loading");
    this.setState({
      isReady: true
    });
    const onBoarding = await AsyncStorage.getItem("Onboarding");

    !onBoarding ? Actions.splash() : this.goToScreen();
  };

  goToScreen = async () => {
    const country = await AsyncStorage.getItem("Country");
    const onBoarding = await AsyncStorage.getItem("Onboarding");
    console.log("val", country, onBoarding);
    if (!country) {
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
