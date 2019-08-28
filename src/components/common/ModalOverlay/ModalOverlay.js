import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";

const ModalOverlay = props => {
  const { isVisible } = props;
  console.log(props);
  return (
    <Modal
      isVisible={isVisible}
      style={{ width: 400, height: 400 }}
      transparent={true}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Modal!</Text>
      </View>
    </Modal>
  );
};

export { ModalOverlay };
