import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CountryListCard = props => {
  const { title, children, onPress, img } = props;

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 70,
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{ uri: img }} style={styles.img} />
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
    height: "80%",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "gray"
  },
  img: {
    width: 100,
    height: "80%",
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
