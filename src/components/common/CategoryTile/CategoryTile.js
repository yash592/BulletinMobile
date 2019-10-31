import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
  ScrollView
} from "react-native";
import styled from "styled-components";

// const categories = require("../../assets/categories");

const CategoryTile = props => {
  const { img, text, onPress, children } = props;

  return (
    <Container onPress={onPress}>
      <TileImage source={{ uri: img }} imageStyle={styles.imgStyle}>
        {children}
        <TextBox>
          <Title>{text}</Title>
        </TextBox>
      </TileImage>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin: 5px;
  width: 47.5%;
  height: 23.5%;

  elevation: 5;
  background-color: white;
  border-radius: 10;
  justify-content: center;
  align-items: center;
`;

const TileImage = styled.ImageBackground`
  width: 100%;
`;

const TextBox = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  justify-content: flex-start;
`;

const Title = styled.Text`
fontSize: 22;
fontFamily:Roboto;
fontWeight: bold;
shadow-color: white;
textShadowOffset: { width: 0.1, height: 0.1 };
shadowOpacity: 0.5;
textShadowRadius: 1;
`;

const styles = {
  imgStyle: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
    position: "relative",
    borderRadius: 10
  }
};

export { CategoryTile };
