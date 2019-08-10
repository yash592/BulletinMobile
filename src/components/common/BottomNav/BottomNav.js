import React, { Compponent } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { PropTypes } from "prop-types";

// BottomNav reusable component

const BottomNav = props => {
  // define tabs with title, image and an onPress handler
  const tabs = [
    {
      title: "Home",
      tabImg: require("../../assets/images/homepage.png"),
      action: () => Actions.home()
    },
    {
      title: "Search",
      tabImg: require("../../assets/images/magnifying-glass.png"),
      action: () => Actions.search()
    },
    {
      title: "Profile",
      tabImg: require("../../assets/images/user.png"),
      action: () => Actions.listings()
    }
  ];

  // renderTabs function to map tabs and return tiles

  renderTabs = () => {
    return tabs.map((tiles, index) => {
      // console.log(tiles, index);
      return (
        <TouchableOpacity
          style={styles.tileStyle}
          onPress={tiles.action}
          key={index}
        >
          <Image source={tiles.tabImg} style={styles.imageStyle} />
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{this.renderTabs()}</View>;
};

const styles = {
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: -90 },
    shadowColor: "#000000",
    elevation: 24,
    shadowRadius: 56,
    shadowOpacity: 1
  },
  tileStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  },
  text: {
    color: "black",
    fontFamily: "sans-serif-condensed"
  }
};

export { BottomNav };
