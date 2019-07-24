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
import Countries from "../../assets/Countries";

class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: ""
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  setCountry = code => {
    console.log(code);
    this.props.countrySetter(code);
  };

  // filter fn to match userinput to countries

  filter = (arr, code) => {
    return arr.filter(el => {
      return el.name.toLowerCase().indexOf(code.toLowerCase()) !== -1;
    });
  };

  onChangeText = async text => {
    await this.setState({
      countryCode: text
    });
    this.filterOnType();
  };

  renderCountryTiles = () => {
    return Countries.map(country => {
      return (
        <CountryListCard
          key={country.name}
          img={country.flagImg}
          title={country.name}
          onPress={this.setCountry.bind(this, country.ISOcode)}
        />
      );
    });
  };

  filterOnType = () => {
    const { countryCode } = this.state;
    const filtered = this.filter(Countries, countryCode);

    if (!filtered) {
      return <Text>No country found :(</Text>;
    }
    return filtered.map(country => {
      return (
        <CountryListCard
          key={country.name}
          code={country.ISOcode}
          img={country.flagImg}
          title={country.name}
          onPress={this.setCountry.bind(this, country.ISOcode)}
        />
      );
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Header headerText={"Choose your Country!"} />
        <ScrollView contentStyle={styles.Gradient}>
          <Input
            placeholder={"Search for your country"}
            placeholderTextColor={"gray"}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.countryCode}
          />
          {!this.state.countryCode
            ? this.renderCountryTiles()
            : this.filterOnType()}
        </ScrollView>
        <BottomNav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(
  mapStateToProps,
  { countryGetter, countrySetter }
)(CountryPicker);
