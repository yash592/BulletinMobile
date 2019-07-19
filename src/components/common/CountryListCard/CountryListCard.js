import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CountryListCard = props => {
  // console.log(props);
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 50
      }}
    >
      <TouchableOpacity style={styles.container}>
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1024px-Flag_of_India.png"
          }}
          style={styles.img}
        />
        {props.children}
        <View style={styles.textBox}>
          <Text style={styles.text}>{props.title}</Text>
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
