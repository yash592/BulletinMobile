import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";

class NewsDetail extends Component {
  render() {
    return (
      <Gradient
        colors={["white", "#EAE0F7"]}
        start={[0, 0]}
        end={[0, 0.2]}
        style={styles.container}
      >
        <CategoryTile style={styles.tile} />
        <CategoryTile style={styles.tile} />
        <CategoryTile style={styles.tile} />
        <CategoryTile style={styles.tile} />
      </Gradient>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  tile: {
    margin: 5,
    width: "45%",
    height: "23.5%",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default NewsDetail;
