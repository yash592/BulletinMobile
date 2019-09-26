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
import { FIREBASE_CONFIG } from "./keys";
// import * as GoogleSignIn from "expo-google-sign-in";

import Icon from "react-native-vector-icons/FontAwesome";

class App extends React.Component {
  componentWillMount() {
    // console.log(FIREBASE_CONFIG.apiKey);
    const config = {
      apiKey: FIREBASE_CONFIG.apiKey,
      appId: FIREBASE_CONFIG.appId,
      authDomain: FIREBASE_CONFIG.authDomain,
      databaseURL: FIREBASE_CONFIG.databaseURL,
      projectId: FIREBASE_CONFIG.projectId,
      storageBucket: FIREBASE_CONFIG.storageBucket,
      messagingSenderId: FIREBASE_CONFIG.messagingSenderId
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
