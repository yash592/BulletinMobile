import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { summarizeArticle } from "../../actions";
import _ from "lodash";
import { Font } from "expo";
import { NewsImage } from "../common/NewsImage";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    console.log("componentDidMount");
    await Font.loadAsync({
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
    console.log("fontloaded");
  }

  renderSummary = data => {
    // console.log("renderSummary", data);
    return data.map((el, i) => {
      console.log("foreach", el);
      return (
        <View style={{ margin: 10 }} key={i}>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              letterSpacing: 0.1,
              lineHeight: 25
            }}
          >
            • {el}
          </Text>
        </View>
      );
    });
  };

  renderData = () => {
    return this.props.SummarizePageData.map((data, i) => {
      console.log("data", data);
      return (
        <ScrollView key={i}>
          <View
            style={{
              margin: 10,
              justifyContent: "flex-start"
            }}
          >
            <Text
              style={{
                fontFamily: "OpenSans",
                fontSize: 32
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                fontFamily: "RobotoCondensed",
                fontSize: 20,
                color: "gray"
              }}
            >
              {data.author}
            </Text>
          </View>
          <NewsImage
            source={data.img}
            style={{ width: WIDTH, height: 0.4 * HEIGHT }}
          />

          {this.renderSummary(data.summary)}
        </ScrollView>
      );
    });
  };

  render() {
    // console.log(
    //   "Summarize Props from NewsDetail",
    //   this.props.SummarizePageData
    // );
    return !this.state.fontLoaded ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          backgroundColor: "white"
        }}
      >
        <Header headerText={"Gist"} />

        {this.renderData()}
        <BottomNav />
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log("summarize from NewsDetail", state.summarize);
  const SummarizePageData = state.summarize;
  // console.log({ SummarizePageData });
  return { SummarizePageData };
};

export default connect(
  mapStateToProps,
  { summarizeArticle }
)(NewsDetail);
