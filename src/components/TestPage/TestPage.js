import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import firebase from "firebase";
import { saveStory } from "../../actions";
import { connect } from "react-redux";

class TestPage extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("user logged in is", user);
  //     } else {
  //       console.log("no user fpund");
  //     }
  //   });
  // }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>TestPage</Text>
        <Button
          onPress={() => this.props.saveStory("sample title")}
          title="Click me"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("state.news", state);
  return {
    news: state.news.news
  };
};

export default connect(
  mapStateToProps,
  { saveStory }
)(TestPage);
