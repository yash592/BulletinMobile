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
import * as Font from "expo-font";
import { NewsImage } from "../common/NewsImage";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const MockData = [
  {
    author: "Yash Rajgor",
    img: "https://www.eurasiareview.com/wp-content/uploads/2019/08/b-90.jpg",
    link:
      "https://www.eurasiareview.com/10082019-why-humans-in-africa-fled-to-the-mountains-during-last-ice-age/",
    summary: [
      "“Because of these adverse living conditions, it was previously assumed that humans settled in the Afro-Alpine region only very lately and for short periods of time,” says Professor Bruno Glaser, an expert in soil biogeochemistry at MLU.",
      "People had already begun living for long periods of time on the ice-free plateaus of the Bale Mountains about 45,000 years ago during the Middle Pleistocene Epoch.",
      "For several years, the research team investigated a rocky outcrop near the settlement of Fincha Habera in the Bale Mountains in southern Ethiopia.",
      "Based on the sediment deposits in the soil, the researchers from Halle were able to carry out extensive biomarker and nutrient analyses as well as radiocarbon dating and thus draw conclusions as to how many people lived in the region and when they lived there.",
      "The inhospitable conditions of the Bale Mountains present ideal conditions for such research since the soil has only changed on the surface during the last millennia."
    ],
    title:
      "Why Humans In Africa Fled To The Mountains During Last Ice Age - Eurasia Review"
  }
];

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
    console.log(this.props.SummarizePageData);
    return MockData.map((data, i) => {
      // this.props.SummarizePageData
      // console.log("data", data);
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
        <Header headerText={"Gist"} showSocialIcons={true} />

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
