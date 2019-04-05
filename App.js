import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// import Router from "./Router";
import { Provider } from "react-redux";
import firebase from "firebase";
import { createStore, applyMiddleWare } from "redux";
// import reducers from "./reducers";

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
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
