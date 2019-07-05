import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { connect } from "react-redux";
import { summarizeArticle } from "../../actions";
import _ from "lodash";

class NewsDetail extends Component {
  renderData = () => {
    return this.props.SummarizePageData.map(data => {
      return <Text>{data[1]}</Text>;
    });
  };
  render() {
    console.log(this.props.SummarizePageData);
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>News detail page</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log("summarize from NewsDetail", state.summarize);
  const SummarizePageData = state.summarize;
  console.log({ SummarizePageData });
  return { SummarizePageData };
};

export default connect(
  mapStateToProps,
  { summarizeArticle }
)(NewsDetail);
