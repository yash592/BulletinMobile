import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";

import { Dimensions, TextInput, TouchableOpacity } from "react-native";

const categories = require("../../assets/categories");

class Home extends Component {
  renderTiles = () => {
    return categories.map(category => {
      return <CategoryTile img={category.icon} />;
    });
  };

  render() {
    // console.log(categories);
    var { height, width } = Dimensions.get("window");
    console.log(width);
    const styles = {
      Gradient: {
        flex: 1,

        left: 0,
        right: 0,

        top: 0,
        height: height
      }
    };
    return (
      <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
        {this.renderTiles()}
      </Gradient>
    );
  }
}

export default Home;
