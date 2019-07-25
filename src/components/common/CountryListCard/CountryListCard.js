import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CountryListCard = props => {
  const { onPress, img, title, children, cardstyle } = props;
  // console.log(props);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: "100%"
      }}
    >
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{ uri: img }} style={styles.img} />
        {children}
        <View style={styles.textBox}>
          <Text style={cardstyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    width: "99%",
    padding: 7,
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
    flexWrap: "wrap"
  },
  img: {
    width: 70,
    height: "100%",
    resizeMode: "contain"
  },
  textBox: {
    marginLeft: 20,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  text: {
    fontSize: 20
  }
};

export { CountryListCard };
