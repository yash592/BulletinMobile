import React, { Component } from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";
// import { Header } from "react-native-elements";
import { NewsCardLarge } from "../common/NewsCardLarge";
import { NewsCardSmall } from "../common/NewsCardSmall";
import axios from "axios";
import { Font } from "expo";
import { connect } from "react-redux";
import _ from "lodash";
import { Header } from "react-native-elements";

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };

    this.onClick = this.onClick.bind(this);
  }
  async componentDidMount() {
    console.log("componentDidMount");
    await Font.loadAsync({
      Roboto: require("../assets/fonts/Roboto-Medium.ttf")
    });
    this.setState({ fontLoaded: true });

    // let url =
    //   "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=513740817e1e424cb4406d9e434de94f";
    // axios.get(url).then(res => {
    //   // console.log(res.data.articles);
    //   this.setState({
    //     news: res.data.articles
    //   });
    // });
  }

  onClick = () => {
    console.log("clicked");
  };

  _renderBigTiles = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <NewsCardLarge
        img={item.urlToImage}
        title={item.title}
        // author={item.author}
        // onPress={this.onClick()}
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
        title={item.title}
        author={item.author}
        // onPress={this.onClick()}
        textStyle={styles.smallCardtext}
      />
    </View>
  );

  render() {
    // console.log("PROPSSSSS", this.props.newsList);
    return !this.state.fontLoaded ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <View>
        <Header
          leftComponent={{ icon: "menu", color: "#0A0A0A" }}
          centerComponent={{
            text: "NEWS",
            style: { color: "#0A0A0A", fontWeight: "bold" }
          }}
          rightComponent={{ icon: "home", color: "#0A0A0A" }}
          containerStyle={{
            backgroundColor: "white"
          }}
        />
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
            <FlatList
              data={this.props.newsList.slice(1, this.props.newsList.length)}
              renderItem={this._renderSmallTiles}
              keyExtractor={this._keyExtractor}
              numColumns="2"
            />
          </Gradient>
        </ScrollView>
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
  // console.log("state.ews", state.news);
  const newsList = _.map(state.news, list => {
    return { ...list };
  });
  console.log("HAHAAAAAAHAHAHAHAHAH", newsList);
  return { newsList };
};

export default connect(
  mapStateToProps,
  {}
)(NewsDetail);
