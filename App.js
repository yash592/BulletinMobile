import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Routes from "./src/Routes";
import { Provider } from "react-redux";
import firebase from "firebase";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import { Dimensions, TouchableOpacity } from "react-native";
import { Gradient } from "./src/components/common/Gradient";
import { Input } from "./src/components/common/TextInput";
import { Button } from "./src/components/common/Button";

import Icon from "react-native-vector-icons/FontAwesome";

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
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    // console.log("global store", store);
    // console.log("thunk", thunk);

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
