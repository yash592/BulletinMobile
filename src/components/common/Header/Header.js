import React from "react";
import { Text, View, Image } from "react-native";
import { PropTypes } from "prop-types";

// reusable header sticky component with title passed down as a prop

const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyle}>
      <Image
        source={require("../../assets/images/left-arrow.png")}
        style={{ width: 18, height: 18, marginLeft: 10 }}
      />
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 60,
    marginTop: 28,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 22,
    fontFamily: "sans-serif-condensed",
    color: "black",
    marginLeft: 20
  }
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired
};

export { Header };
