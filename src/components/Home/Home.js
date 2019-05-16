import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";
import { worldNews } from "../../actions";
import { connect } from "react-redux";

import { Dimensions, TextInput, TouchableOpacity } from "react-native";

const categories = require("../../assets/categories");

class Home extends Component {
  onClick() {
    console.log("clicked!");
    this.props.worldNews();
  }

  renderTiles = () => {
    return categories.map(category => {
      return (
        <CategoryTile
          key={category.id}
          img={category.icon}
          text={category.name}
          onPress={() => this.props.worldNews()}
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
  { worldNews }
)(Home);
