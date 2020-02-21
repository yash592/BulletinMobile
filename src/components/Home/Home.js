import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  StatusBar
} from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile/";
import { ModalOverlay } from "../common/ModalOverlay/";
import {
  worldNews,
  politicsStories,
  businessStories,
  entertainmentStories,
  healthStories,
  scienceStories,
  sportsStories,
  techStories,
  countryGetter,
  loadImages
} from "../../actions";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";
//import { loadImages } from "../LoadImagesAndFonts/LoadImagesAndFonts";

import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { AppLoading } from "expo";

const categories = require("../../assets/categories");

class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { country: "", fontLoaded: false, isReady: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({
      fontLoaded: true
    });

    this.getCountry();
    // this.props.loadImages().then(res => {
    //   console.log(res);
    // });
  }

  getCountry = async () => {
    const value = await AsyncStorage.getItem("Country");
    console.log("VALUE", value);
    if (!value) {
      Actions.splash();
    }
    this.setState({ country: value });
  };

  onClick(name) {
    const countryCode = this.state.country;
    console.log("countrycode", countryCode);
    switch (name) {
      case "World":
        this.props.worldNews(countryCode);
        break;
      case "Politics":
        this.props.politicsStories(countryCode);
        break;
      case "Business":
        this.props.businessStories(countryCode);
        break;
      case "Entertainment":
        this.props.entertainmentStories(countryCode);
        break;
      case "Health":
        this.props.healthStories(countryCode);
        break;
      case "Science":
        this.props.scienceStories(countryCode);
        break;
      case "Sports":
        this.props.sportsStories(countryCode);
        break;
      case "Technology":
        this.props.techStories(countryCode);
        break;
    }
  }

  renderTiles = () => {
    return categories.map(category => {
      return (
        <CategoryTile
          key={category.id}
          img={category.icon}
          text={category.name}
          onPress={() => this.onClick(category.name)}
        />
      );
    });
  };

  render() {
    console.log(this.state.isReady, this.state.fontLoaded);
    return this.state.isReady && this.state.fontLoaded ? (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="black" />

        <Gradient colors={["#EAE0F7", "black"]} style={styles.Gradient}>
          {this.renderTiles()}
        </Gradient>
      </View>
    ) : (
      <AppLoading
        startAsync={this.props.loadImages}
        onError={console.warn}
        onFinish={() => this.setState({ isReady: true })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news
  };
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
    left: 0,
    right: 0,
    top: 1,
    paddingTop: 30,
    height: height,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});

export default connect(mapStateToProps, {
  worldNews,
  politicsStories,
  businessStories,
  entertainmentStories,
  healthStories,
  scienceStories,
  sportsStories,
  techStories,
  countryGetter,
  loadImages
})(Home);
