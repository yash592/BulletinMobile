import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Button,
  AsyncStorage,
  StyleSheet,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import { countrySetter, countryGetter } from "../../actions";
import { CountryListCard } from "../common/CountryListCard/";
import { Gradient } from "../common/Gradient";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";
import { Input } from "../common/TextInput";

const Countries = require("../../assets/Countries");

class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: ""
    };
    this.onChangeText = this.onChangeText.bind(this);
  }
  setCountry = () => {
    let country = "us";
    this.props.countrySetter(country);
  };

  getCountry = () => {
    this.props.countryGetter();
  };

  getData = async () => {
    const value = await AsyncStorage.getItem("Country");
    if (value != null) {
      console.log(value);
    }
  };

  renderCountryTiles = () => {
    return Countries.map(country => {
      // console.log(country);
      return (
        <CountryListCard
          key={country.name}
          img={country.flagImg}
          title={country.name}
          onPress={() => console.log("pressed!")}
        />
      );
    });
  };

  onChangeText = text => {
    this.setState({
      countryCode: text
    });
  };

  filterOnType = () => {
    console.log(this.state);
  };

  render() {
    // console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Choose your Country!"} />

        <ScrollView>
          <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
            <Input
              placeholder={"Search for your country"}
              onSubmitEditing={this.onKeyPress}
              placeholderTextColor={"gray"}
              onChangeText={text => this.onChangeText(text)}
              onChange={this.filterOnType}
              value={this.state.countryCode}
            />
            {this.renderCountryTiles()}
          </Gradient>
        </ScrollView>
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(
  mapStateToProps,
  { countryGetter, countrySetter }
)(CountryPicker);
