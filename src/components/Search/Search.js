import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView
} from "react-native";
import { Input } from "../common/TextInput";
import { KeyboardAvoidingView } from "react-native";
import { Gradient } from "../common/Gradient";
import { Header } from "../common/Header";
import { BottomNav } from "../common/BottomNav";
import { searchNews } from "../../actions";
import { connect } from "react-redux";

var { height, width } = Dimensions.get("window");

class Search extends Component {
  onKeyPress = () => {
    console.log(this.props.searchNews());
  };
  render() {
    console.log(this.props);
    return (
      <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
        <Header headerText={"SEARCH"} />
        <View
          style={{
            flex: 0.1,
            width: "100%",
            borderColor: "black",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Input
            placeholder={"Search for people topics etc."}
            placeholderTextColor={"black"}
            onSubmitEditing={this.onKeyPress}
            placeholderTextColor={"gray"}
          />
        </View>

        <View style={{ flex: 0.9 }}>
          <ScrollView>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
            <Text>Results</Text>
          </ScrollView>
        </View>
      </Gradient>
    );
  }
}

const styles = StyleSheet.create({
  Gradient: {
    flex: 1
  }
});

export default connect(
  null,
  { searchNews }
)(Search);
