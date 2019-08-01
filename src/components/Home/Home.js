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
  techStories,
  countryGetter
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
    this.state = { country: "" };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getCountry();
  }

  getCountry = async () => {
    const value = await AsyncStorage.getItem("Country");
    console.log(value);
    if (!value) {
      Actions.countrypick();
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
    // this._retrieveData();
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
    console.log("state", this.state);

    return (
      // if(!this.state.country)
      <Gradient colors={["#EAE0F7", "black"]} style={styles.Gradient}>
        {this.renderTiles()}
      </Gradient>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
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
    techStories,
    countryGetter
  }
)(Home);
