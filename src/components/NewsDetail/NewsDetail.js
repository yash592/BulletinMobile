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

const data = [
  {
    author: "Andrew Hay",
    img:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20190706&t=2&i=1404982424&w=1200&r=LYNXNPEF6500H",
    link:
      "https://www.reuters.com/article/us-usa-immigration/trump-says-immigration-raids-starting-fairly-soon-idUSKCN1U1003",
    summary: [
      {
        summary:
          "U.S. Immigration and Customs Enforcement (ICE) last month said operations would target recently-arrived undocumented migrants in a bid to discourage a surge of Central American families at the southwest border."
      },
      {
        summary:
          "Government documents published this week by migrant rights groups showed some past ICE operations resulted in more so-called “collateral” arrests of undocumented migrants agents happened to find, than apprehensions of targeted people."
      },
      {
        summary:
          "“We have to be ready, not just when Trump announces it, because there are arrests every day,” said Elsa Lopez, an organizer for Somos Un Pueblo Unido, a New Mexico group which educates migrants on their civil rights and creates phone networks to send alerts if ICE enters their neighborhood."
      },
      {
        summary:
          "The threatened raids come after migrant apprehensions on the southwest border hit a 13-year high in May before easing in June as Mexico increased immigration enforcement."
      },
      {
        summary:
          "“We’re not forcing aliens to drink out of the toilet,” said Villareal, head of an area that in May apprehended nearly six times fewer people than the El Paso sector, a stretch of border that has borne the brunt of the migrant surge."
      }
    ],
    title: "Trump says immigration raids coming 'fairly soon' - Reuters"
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
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoBold: require("../assets/fonts/Roboto-Bold.ttf")
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
          <Text style={{ fontFamily: "Roboto", fontSize: 18 }}>
            • {el.summary}
          </Text>
        </View>
      );
    });
  };
  renderData = () => {
    return data.map((data, i) => {
      // console.log("data", data);
      return (
        <ScrollView>
          <Image
            source={{ uri: data.img }}
            style={{
              width: WIDTH,
              height: 0.4 * HEIGHT,
              resizeMode: "contain"
            }}
          />
          <View style={{ margin: 5 }}>
            <Text style={{ fontFamily: "Roboto", fontSize: 32 }}>
              {data.title}
            </Text>
          </View>
          <Text style={{ fontFamily: "Roboto", fontSize: 20 }}>
            {data.author}
          </Text>
          {this.renderSummary(data.summary)}
        </ScrollView>
      );
    });
  };
  render() {
    // console.log(this.props.SummarizePageData);
    return (
      <View style={{ justifyContent: "flex-start" }}>{this.renderData()}</View>
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
