import React, { Component } from "react";
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
import { NewsCardSmall } from "../common/NewsCardSmall";
import _ from "lodash";

var { height, width } = Dimensions.get("window");

class Search extends Component {
  constructor(props) {
    super(props);
    // this.onKeyPress = this.onPress.bind(this);
  }
  onKeyPress = () => {
    this.props.searchNews();
  };

  renderFlatList = () => {
    console.log(this.props.newsList.length);
    return this.props.newsList.length === 1 ? (
      <View style={{ flex: 0.9 }} />
    ) : (
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={this.props.newsList}
          renderItem={this._renderSmallTiles}
          keyExtractor={this._keyExtractor}
          numColumns="2"
          initialNumToRender={10}
          legacyImplementation={false}
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
      <NewsCardSmall
        img={item.urlToImage}
        url={item.url}
        title={item.title}
        author={item.author}
        textStyle={styles.smallCardtext}
      />
    </View>
  );

  render() {
    console.log(this.props);
    return (
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
  }
});

const mapStateToProps = state => {
  console.log("state.news", state);
  const newsList = _.map(state.news, list => {
    return { ...list };
  });
  // console.log("HAHAAAAAAHAHAHAHAHAH", { newsList });
  return { newsList };
};

export default connect(
  mapStateToProps,
  { searchNews }
)(Search);
