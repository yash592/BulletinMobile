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
      "https://sportshub.cbsistatic.com/i/r/2019/07/07/83d37d6a-6b6d-4f52-b1b4-30cf9aa07dba/thumbnail/1200x675/bff1c4f2a56d27ea5e583a8f9017c3ad/rapinoe-1.jpg",
    link:
      "https://www.cbssports.com/soccer/world-cup/news/megan-rapinoe-wins-golden-boot-golden-ball-at-2019-womens-world-cup-edges-alex-morgan-on-tiebreaker/",
    summary: [
      "Rapinoe scored six times in the tournament to lead her team to a second consecutive World Cup title, and she found the back of the net every time she was on the field in the knockout stage.",
      "Rapinoe's teammate, Alex Morgan, and England's Ellen White also scored six goals in the tournament.",
      "Rapinoe netted a penalty kick to give the United States the lead and, at 34, became the oldest player to ever score in a Women's World Cup final.",
      "The goal on her 30th birthday gave the U.S. the lead and also tied her for the Golden Boot lead minutes after Ellen White scored her sixth goal of the cup.",
      "White became England's top World Cup goal scorer earlier in this year's tournament, and she came up big for the Lionesses in the semifinals."
    ],
    title:
      "Megan Rapinoe wins Golden Boot, Golden Ball at 2019 Women's World Cup, edges Alex Morgan on tiebreaker"
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
    return this.props.SummarizePageData.map((data, i) => {
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
