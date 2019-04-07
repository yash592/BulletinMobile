import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import Router from "./Router";
import { Provider } from "react-redux";
import firebase from "firebase";
import { createStore, applyMiddleWare } from "redux";
// import reducers from "./reducers";
import { Dimensions, TextInput } from "react-native";
import { LinearGradient } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBTMt0ID819x_BaMWYuN4dyIWi6FTvouiY",
      authDomain: "bulletin-8d779.firebaseapp.com",
      databaseURL: "https://bulletin-8d779.firebaseio.com",
      projectId: "bulletin",
      storageBucket: "bulletin.appspot.com",
      messagingSenderId: "67122134573"
    };

    firebase.initializeApp(config);
  }

  render() {
    // const store = createStore(reducers, {}, applyMiddleWare(ReduxThunk));

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
    console.log(height, width);
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
            style={{
              flex: 0.3,
              width: "80%",
              backgroundColor: "transparent",
              borderColor: "black",
              borderWidth: 1,
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <TextInput
              style={{
                height: 40,
                width: "70%",
                padding: 5,
                margin: 20,
                borderColor: "black",
                borderWidth: 1
              }}
              placeholder={"user@gmail.com"}
            />
            <TextInput
              style={{
                height: 40,
                width: "70%",
                padding: 5,
                borderColor: "black",
                borderWidth: 1
              }}
              secureTextEntry
              placeholder={"password"}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default App;
