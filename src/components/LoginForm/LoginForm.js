import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";

import firebase from "firebase";
import { Dimensions, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import { Gradient } from "../common/Gradient";
import { Input } from "../common/TextInput";
import { Button } from "../common/Button";
import { loginUser } from "../../actions";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  onButtonPress = () => {
    this.props.loginUser(this.state.user, this.state.password);
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <Image
          source={{ uri: "https://i.imgur.com/fgeZcwX.gif" }}
          style={{ width: 64, height: 64 }}
        />
      );
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { height, width } = Dimensions.get("window");
    // console.log(height, width);
    // console.log(this.state);
    console.log(this.props);

    const styles = StyleSheet.create({
      container: {
        flex: 0.5,
        backgroundColor: "orange"
      },
      Gradient: {
        flex: 1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        alignItems: "center",
        justifyContent: "center",
        height: height
      },
      image: {
        width: 250,
        height: 100,
        resizeMode: "contain"
      },
      imageCtr: {
        flex: 0.4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      boxContainer: {
        flex: 0.5,
        width: "100%",
        backgroundColor: "transparent",
        borderColor: "black",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start"
      }
    });

    return (
      <Gradient colors={["white", "#EAE0F7"]} style={styles.Gradient}>
        <View style={styles.imageCtr}>
          <Image
            source={{ uri: "https://i.imgur.com/SB0VyTQ.png" }}
            style={styles.image}
          />
        </View>
        <View style={styles.boxContainer}>
          <Input
            placeholder={"user@gmail.com"}
            placeholderTextColor={"black"}
            onChangeText={user => this.setState({ user })}
            value={this.state.user}
          />
          <Input
            secureTextEntry
            placeholder={"password"}
            placeholderTextColor={"black"}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          {this.renderButton()}
        </View>
      </Gradient>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
