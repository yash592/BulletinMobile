import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import firebase from "firebase";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class LoginForm extends Component {
  constructor() {
    super(props);
    this.state = {};
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
      },
      image: {
        width: 300,
        height: 150,
        resizeMode: "contain"
      },
      imageCtr: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }
    });

    var { height, width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["white", "#EAE0F7"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: height
          }}
        >
          <View style={styles.imageCtr}>
            <Image
              source={{ uri: "https://i.imgur.com/SB0VyTQ.png" }}
              style={styles.image}
            />
          </View>

          <View
            opacity={1}
            style={{
              flex: 0.4,
              width: "100%",
              backgroundColor: "transparent",
              borderColor: "black",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.9,
              shadowRadius: 2,
              elevation: 1,

              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <TextInput
              style={{
                height: 40,
                width: "70%",
                padding: 10,
                margin: 20,
                borderColor: "black",
                borderWidth: 1,

                shadowColor: "black",
                shadowRadius: 2,
                shadowOffset: { width: 10, height: 12 },
                borderRadius: 8
              }}
              placeholder={"user@gmail.com"}
            />
            <TextInput
              style={{
                height: 40,
                width: "70%",
                padding: 10,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8
              }}
              secureTextEntry
              placeholder={"password"}
            />

            <TouchableOpacity
              style={{
                width: "70%",
                backgroundColor: "#EAE0F7",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                margin: 10,
                borderRadius: 4,
                shadowColor: "rgba(0,0,0, .4)"
              }}
            >
              <Text>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "70%",
                backgroundColor: "#EAE0F7",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                margin: 10,
                borderRadius: 4,
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 1
              }}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
