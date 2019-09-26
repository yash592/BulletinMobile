import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import firebase from "firebase";
import { saveStory, checkIfUserLoggedIn } from "../../actions";
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
    const sampleStory = {
      title: "title2",
      desc: "desc2",
      content: "content2"
    };
    console.log(this.props);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>TestPage</Text>
        <Button
          onPress={() => this.props.saveStory(sampleStory)}
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
  { saveStory, checkIfUserLoggedIn }
)(TestPage);
