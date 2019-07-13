import React, { Component, PureComponent } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class NewsListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    // console.log("NewsListCard props", this.props);
    // console.log(this.shouldComponentUpdate());
    const { img, onPress, children, style, title } = this.props;
    let render = 0;
    // console.log("render called", (render += 1));
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{ uri: img }} style={styles.img} />
        {children}
        <View style={styles.textBox}>
          <Text style={style}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
    width: "98%",
    height: 75,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  img: {
    width: "17.1%",
    height: "100%",
    resizeMode: "cover"
  },
  textBox: {
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: 5,
    paddingTop: 0
  }
};

export default NewsListCard;
