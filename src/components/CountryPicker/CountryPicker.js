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

  onChangeText = async text => {
    await this.setState({
      countryCode: text
    });
    // console.log(this.state.countryCode);
    this.filterOnType();
  };

  filterOnType = () => {
    const { countryCode } = this.state;
    const filtered = this.filter(Countries, countryCode);

    if (!filtered) {
      return <Text>No country found :(</Text>;
    }
    return filtered.map(country => {
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

  filter = (arr, code) => {
    return arr.filter(el => {
      return el.name.toLowerCase().indexOf(code.toLowerCase()) !== -1;
    });
  };

  render() {
    // console.log(this.state);
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header headerText={"Choose your Country!"} />

        <ScrollView>
          <View style={styles.Gradient}>
            <Input
              placeholder={"Search for your country"}
              placeholderTextColor={"gray"}
              onChangeText={text => this.onChangeText(text)}
              onChange={() => null}
              value={this.state.countryCode}
            />
            {!this.state.countryCode
              ? this.renderCountryTiles()
              : this.filterOnType()}
          </View>
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
