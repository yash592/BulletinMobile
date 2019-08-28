import React, { Component, PureComponent } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";
// import { Header } from "react-native-elements";
import { NewsCardLarge } from "../common/NewsCardLarge";
import { NewsCardSmall } from "../common/NewsCardSmall";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";

import axios from "axios";
import { Font } from "expo";
import { connect } from "react-redux";
import _ from "lodash";
// import { Header } from "react-native-elements";
import { summarizeArticle } from "../../actions";
import { Actions } from "react-native-router-flux";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
    this.onPress = this.onPress.bind(this);
  }
  async componentDidMount() {
    // console.log("componentDidMount");
    await Font.loadAsync({
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoBold: require("../assets/fonts/Roboto-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
    // console.log("fontloaded");
  }

  onPress = (url, img, title, author) => {
    // console.log(link);
    this.props.summarizeArticle(url, img, title, author);
  };

  _keyExtractor = (item, index) => {
    // console.log(item.title);
    return item.title;
  };

  _renderBigTiles = ({ item }) => (
    <View
      contentStyle={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <NewsCardLarge
        img={item.urlToImage}
        url={item.url}
        title={item.title}
        onPress={this.onPress.bind(
          this,
          item.urlToImage,
          item.img,
          item.title,
          item.author
        )}
        textStyle={styles.largeCardtext}
      />
    </View>
  );

  _renderSmallTiles = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <NewsCardSmall
        img={item.urlToImage}
        url={item.url}
        title={item.title}
        author={item.author}
        textStyle={styles.smallCardtext}
        onPress={this.onPress.bind(
          this,
          item.url,
          item.urlToImage,
          item.title,
          item.author
        )}
      />
    </View>
  );

  render() {
    // console.log("PROPSSSSS", this.props.newsList);
    // console.log(this.props);
    return !this.state.fontLoaded && !this.props.newsList ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    ) : (
      <View style={{ flex: 1 }}>
        <Header headerText={"News"} />
        <ScrollView>
          <Gradient
            colors={["white", "#EAE0F7"]}
            start={[0, 0.2]}
            end={[0, 1]}
            style={styles.Gradient}
          >
            <FlatList
              data={this.props.newsList.slice(0, 1)}
              renderItem={this._renderBigTiles}
              keyExtractor={this._keyExtractor}
            />
            <Text
              style={{
                padding: 10,
                fontFamily: "Roboto", //Roboto
                fontSize: 18,
                letterSpacing: 2,
                color: "#A3A3A3"
              }}
            >
              RECENT NEWS
            </Text>
            <FlatList
              data={this.props.newsList.slice(1, this.props.newsList.length)}
              renderItem={this._renderSmallTiles}
              keyExtractor={this._keyExtractor}
              numColumns="2"
              initialNumToRender={20}
            />
          </Gradient>
        </ScrollView>
        <BottomNav />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    // justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  bigTile: {
    margin: 5,
    width: "100%",
    height: "23.5%",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  smallTiles: {
    margin: 5,
    width: "100%",
    height: "23.5%",
    shadowColor: "black",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
    position: "relative",
    borderRadius: 10
  },
  smallCardtext: {
    fontFamily: "Roboto",
    color: "black",
    fontSize: 16,
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  },
  largeCardtext: {
    fontFamily: "Roboto",
    opacity: 1,
    fontSize: 20,
    color: "white",
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  },
  Gradient: {
    height: "100%"
  }
};

const mapStateToProps = state => {
  // console.log("state.news", state);
  const newsList = _.map(state.news, list => {
    return { ...list };
  });
  // console.log("HAHAAAAAAHAHAHAHAHAH", { newsList });
  return { newsList };
};

export default connect(
  mapStateToProps,
  { summarizeArticle }
)(NewsDetail);
