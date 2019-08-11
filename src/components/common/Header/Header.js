import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { PropTypes } from "prop-types";

// reusable header sticky component with title passed down as a prop

const Header = props => {
  const { textStyle, viewStyle } = styles;
  const { headerText, showSocialIcons } = props;

  return (
    <View style={viewStyle}>
      <Image
        source={require("../../assets/images/left-arrow.png")}
        style={{ width: 18, height: 18, marginLeft: 10 }}
      />
      <Text style={textStyle}>{headerText}</Text>

      {showSocialIcons ? (
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            right: 0
          }}
        >
          <TouchableOpacity style={{ marginRight: 35 }}>
            <Image
              source={require("../../assets/images/bookmark.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 35 }}>
            <Image
              source={require("../../assets/images/share.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 35 }}>
            <Image
              source={require("../../assets/images/comment.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
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
    elevation: 2
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
