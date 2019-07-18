import React, { Component } from "react";
import { View, Text, Image, Button, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { countrySetter, countryGetter } from "../../actions";

class CountryPicker extends Component {
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
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Pick your country!</Text>
        <Button onPress={this.setCountry} title={"Set Data"} />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(
  mapStateToProps,
  { countryGetter, countrySetter }
)(CountryPicker);
