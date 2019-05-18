import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Gradient } from "../common/Gradient";
import { CategoryTile } from "../common/CategoryTile";
import { NewsCardLarge } from "../common/NewsCardLarge";
import { NewsCardSmall } from "../common/NewsCardSmall";
import axios from "axios";
import { Font } from "expo";
import { connect } from "react-redux";
import _ from "lodash";

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
      SourceSansPro: require("../assets/fonts/SourceSansPro-SemiBold.ttf")
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

  onClick = () => {};

  renderBigTile = () => {
    // console.log("rendering big tile");
    return this.state.news.slice(0, 1).map(tile => {
      return (
        <NewsCardLarge
          style={styles.bigTile}
          img={tile.urlToImage}
          title={tile.title}
          onPress={this.onClick()}
          textStyle={styles.largeCardtext}
        />
      );
    });
  };

  _renderSmallTiles = ({ item }) => (
    // console.log("ITEMSSSSSSSSSSSSSSSSSSS", { item });
    <View style={{ flex: 1, flexDirection: "column" }}>
      <NewsCardSmall
        style={styles.smallTiles}
        img={item.urlToImage}
        title={item.title}
        author={item.author}
        onPress={this.onClick()}
        textStyle={styles.smallCardtext}
      />
    </View>
  );

  render() {
    // console.log("PROPSSSSS", this.props.newsList);
    return (
      <FlatList
        data={this.props.newsList}
        renderItem={this._renderSmallTiles}
        keyExtractor={this._keyExtractor}
        horizontal
      />
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
    width: "45%",
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
    // fontFamily: "SourceSansPro",
    fontSize: 14,
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  },
  largeCardtext: {
    // fontFamily: "SourceSansPro",
    fontSize: 22,
    shadowColor: "white",
    textShadowOffset: { width: 0.1, height: 0.1 },
    shadowOpacity: 0.5,
    textShadowRadius: 1
  }
};

const mapStateToProps = state => {
  // console.log(state);
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
