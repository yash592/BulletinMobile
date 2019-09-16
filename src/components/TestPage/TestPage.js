import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import firebase from "firebase";

class TestPage extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged in is", user);
      } else {
        console.log("no user fpund");
      }
    });

    this.getUserCred();
  }

  getUserCred = async () => {
    let curruser = await firebase.auth().currentUser;
    console.log(curruser);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>TestPage</Text>
      </View>
    );
  }
}

export default TestPage;
