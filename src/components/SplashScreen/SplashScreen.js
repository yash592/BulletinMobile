import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo";
import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "./slides";
import { Font } from "expo";
import { onBoardingDoneSet, onBoardingDoneGet } from "../../actions";
import { connect } from "react-redux";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    await Font.loadAsync({
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

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
      <View
        style={{
          flex: 0.7,
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View
          style={{
            width: 250,
            height: 500,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain"
            }}
            source={{ uri: item.img }}
          />
        </View>

        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );

  onDone = () => {
    this.props.onBoardingDoneSet("true");
  };

  render() {
    console.log(this.props);
    return !this.state.fontLoaded ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    ) : (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={this.onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center"
  },
  image: {
    width: 320,
    height: 320
  },
  text: {
    color: "black",
    textAlign: "center",
    paddingHorizontal: 16,
    fontFamily: "Roboto",
    fontSize: 18
  },
  title: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "OpenSans"
  }
});

export default connect(
  null,
  { onBoardingDoneSet }
)(SplashScreen);
