import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import Router from "./Router";
import { Provider } from "react-redux";
import firebase from "firebase";
import { createStore, applyMiddleWare } from "redux";
// import reducers from "./reducers";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "./src/components/common/Gradient";
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
    var { height, width } = Dimensions.get("window");
    console.log(height, width);

    const styles = StyleSheet.create({
      container: {
        flex: 0.5,
        backgroundColor: "orange"
      },
      Gradient: {
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        alignItems: "center",
        justifyContent: "center",
        height: height
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

    return (
      <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
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
              borderWidth: 0.5,

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
              borderWidth: 0.5,
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
      </Gradient>
    );
  }
}

export default App;
