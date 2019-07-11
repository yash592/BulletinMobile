import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import { Input } from "../common/TextInput";
import { KeyboardAvoidingView } from "react-native";
import { Gradient } from "../common/Gradient";
import { Header } from "../common/Header";
import { BottomNav } from "../common/BottomNav";
import { searchNews } from "../../actions";
import { connect } from "react-redux";
import NewsListCard from "../common/NewsListCard/NewsListCard";
import _ from "lodash";
import { Font } from "expo";
import { summarizeArticle } from "../../actions";

const { height, width } = Dimensions.get("window");

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
    // this.onPress = this.onPress.bind(this);
  }

  async componentDidMount() {
    console.log("componentDidMount");
    await Font.loadAsync({
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf")
    });
    this.setState({ fontLoaded: true });
    console.log("fontloaded");
  }

  onKeyPress = () => {
    this.props.searchNews();
  };

  onPress = (url, img, title, author) => {
    console.log("summarizebitch");
    this.props.summarizeArticle(url, img, title, author);
  };

  renderFlatList = () => {
    // console.log(this.props.newsList.length);
    return this.props.newsList.length === 1 ? (
      <View style={{ flex: 0.9 }} />
    ) : (
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={this.props.newsList}
          renderItem={this._renderSmallTiles}
          keyExtractor={this._keyExtractor}
          initialNumToRender={10}
          removeClippedSubviews
        />
      </View>
    );
  };

  _keyExtractor = (item, index) => item.url;

  _renderSmallTiles = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <NewsListCard
        img={item.urlToImage}
        title={item.title}
        style={styles.textStyle}
        url={item.url}
        author={item.author}
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
    // console.log("NewsCardList this.props", this.props);

    return !this.state.fontLoaded ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    ) : (
      <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
        <View
          style={{
            flex: 0.1,
            marginTop: 30,
            width: "100%",
            borderColor: "black",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Input
            placeholder={"Search for people topics etc."}
            onSubmitEditing={this.onKeyPress}
            placeholderTextColor={"gray"}
          />
        </View>
        {this.renderFlatList()}
        <BottomNav />
      </Gradient>
    );
  }
}

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
    justifyContent: "flex-start"
  },
  textStyle: {
    fontFamily: "OpenSans",
    fontSize: 16
  }
});

const mapStateToProps = state => {
  // console.log("state.news", state);
  const newsList = _.map(state.searchNews, list => {
    return { ...list };
  });
  // console.log("HAHAAAAAAHAHAHAHAHAH", { newsList });
  return { newsList };
};

export default connect(
  mapStateToProps,
  { searchNews, summarizeArticle }
)(Search);
