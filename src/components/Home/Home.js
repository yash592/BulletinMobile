import React, { Component } from "react";
import { View, Text } from "react-native";
import { Gradient } from "../common/Gradient";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
// import Categories from "../../assets/categories";
const categories = require("../../assets/categories");

class Home extends Component {
  renderTiles = () => {
    return categories.map(category => {
      return <Text key={category.id}>{category.name}</Text>;
    });
  };

  render() {
    // console.log(categories);
    var { height, width } = Dimensions.get("window");
    const styles = {
      Gradient: {
        flex: 1,
        position: "absolute",
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
