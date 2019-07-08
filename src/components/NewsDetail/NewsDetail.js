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

const dummyData = [
  {
    author: "Natasha Frost",
    img:
      "https://cms.qz.com/wp-content/uploads/2019/01/Amazon-CEO-Jeff-Bezos-and-his-wife-MacKenzie-e1547053835572.jpg?quality=75&strip=all&w=1400",
    link:
      "https://qz.com/1659819/jeff-bezos-remains-worlds-richest-man-after-finalizing-divorce/",
    summary: [
      "The ink is barely dry on Jeff and Mackenzie Bezos’ divorce papers, filed Friday in King County, Washington.",
      "Mackenzie Bezos opted to give her ex-husband 75% of her Amazon stock and voting control over what she retains, despite having a likely legal right to much more of his empire, as Ephrat Livni reports in a Quartz membership profile.",
      "Mackenzie Bezos is nearly 50 years old: Even if she lives to 100, she may find it difficult to land upon enough avenues to direct her wealth.",
      "But Mackenzie Bezos’ comments in her letter announcing her intention to give, where she promised to be “thoughtful” and to take “time and effort and care,” suggests a desire to no longer remain on the sidelines.",
      "Jeff Bezos, whose net worth is approximately three times his ex-wife’s, has not signed the Giving Pledge."
    ],
    title:
      "Jeff Bezos remains world's richest man after finalizing divorce - Quartz"
  }
];

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
      SourceSansPro: require("../assets/fonts/SourceSansPro-Regular.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
    console.log("fontloaded");
  }

  renderSummary = data => {
    // console.log("renderSummary", data);
    return data.map(el => {
      console.log("foreach", el);
      return (
        <View style={{ margin: 10 }}>
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
    return dummyData.map((data, i) => {
      console.log("data", data);
      return (
        <ScrollView>
          <NewsImage
            source={data.img}
            style={{ width: WIDTH, height: 0.4 * HEIGHT }}
          />
          <View
            style={{
              margin: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "RobotoCondensed",
                fontSize: 32,
                textAlign: "center"
              }}
            >
              {data.title.toUpperCase()}
            </Text>
            <Text style={{ fontFamily: "RobotoCondensed", fontSize: 22 }}>
              {data.author}
            </Text>
          </View>
          {this.renderSummary(data.summary)}
        </ScrollView>
      );
    });
  };
  render() {
    console.log(
      "Summarize Props from NewsDetail",
      this.props.SummarizePageData
    );
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
