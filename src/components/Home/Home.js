import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
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
  techStories
} from "../../actions";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import {
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

const categories = require("../../assets/categories");

class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log("mounted");
  }

  _storeData = async () => {
    console.log("_storedata");
    try {
      await AsyncStorage.setItem("CountryCode", "US");
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("CountryCode");
      console.log("val", value);
    } catch (error) {
      console.log(error);
    }
  };

  onClick(name) {
    console.log("clicked!", name);
    switch (name) {
      case "World":
        this.props.worldNews();
        break;
      case "Politics":
        this.props.politicsStories();
        break;
      case "Business":
        this.props.businessStories();
        break;
      case "Entertainment":
        this.props.entertainmentStories();
        break;
      case "Health":
        this.props.healthStories();
        break;
      case "Science":
        this.props.scienceStories();
        break;
      case "Sports":
        this.props.sportsStories();
        break;
      case "Technology":
        this.props.techStories();
        break;
    }
  }

  renderTiles = () => {
    this._retrieveData();
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
    // console.log(categories);

    // console.log(width);'
    // console.log("props", this.props);

    return (
      <Gradient colors={["#EAE0F7", "black"]} style={styles.Gradient}>
        {this.renderTiles()}
      </Gradient>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
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

export default connect(
  mapStateToProps,
  {
    worldNews,
    politicsStories,
    businessStories,
    entertainmentStories,
    healthStories,
    scienceStories,
    sportsStories,
    techStories
  }
)(Home);
