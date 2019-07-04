import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { summarizeArticle } from "../../actions";

class NewsDetail extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the details page!</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("summarize from NewsDetail", state.summarize);
  return {};
};

export default connect(
  mapStateToProps,
  { summarizeArticle }
)(NewsDetail);
