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
import { countrySetter, countryGetter, fontLoader } from "../../actions";
import { CountryListCard } from "../common/CountryListCard/";
import { Gradient } from "../common/Gradient";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";
import { Input } from "../common/TextInput";
import Countries from "../../assets/Countries";
import { Font } from "expo";

class CountryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: "",
      fontLoaded: false
    };
    this.onChangeText = this.onChangeText.bind(this);
  }

  async componentDidMount() {
    console.log("componentDidMount");
    await Font.loadAsync({
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
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
          cardstyle={styles.text}
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
          cardstyle={styles.text}
          title={country.name}
          onPress={this.setCountry.bind(this, country.ISOcode)}
        />
      );
    });
  };

  render() {
    // console.log(this.props.auth);
    if (this.state.fontLoaded) {
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
    } else {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  Gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: "OpenSans",
    fontSize: 18
  }
});

const mapStateToProps = ({ auth }) => {
  console.log({ auth });
  return auth;
};

export default connect(
  mapStateToProps,
  { countryGetter, countrySetter, fontLoader }
)(CountryPicker);
