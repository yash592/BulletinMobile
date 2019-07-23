import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CountryListCard = props => {
  const { title, children, onPress, img } = props;
  console.log(img);
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50,
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={`require(${img})`} style={styles.img} />
        {children}
        <View style={styles.textBox}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    width: "99%",
    height: "100%",
    flexDirection: "row"
  },
  img: {
    width: 100,
    height: "100%",
    resizeMode: "contain"
  },
  textBox: {
    marginLeft: 20,
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
};

export { CountryListCard };
