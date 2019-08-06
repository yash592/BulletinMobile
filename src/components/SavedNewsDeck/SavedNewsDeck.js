import React, { Component } from "react";
import {
  View,
  Animated,
  Stylesheet,
  Text,
  PanResponder,
  Dimensions,
  ScrollView,
  LayoutAnimation,
  UIManager
} from "react-native";
import { NewsCardLarge } from "../common/NewsCardLarge";
import { SavedNewsCard } from "../common/SavedNewsCard";
import { Font } from "expo";

const WIDTH = Dimensions.get("window").width;
const SWIPE_MIN = 0.75 * WIDTH;

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // console.log(gesture);
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (event, gesture) => {
        // console.log(SWIPE_MIN, -SWIPE_MIN);
        gesture.dx > SWIPE_MIN ? this.beginSwipe() : this.resetPosition();
      }
    });
    this.state = { panResponder, position, index: 0 };
  }
  //
  async componentDidMount() {
    await Font.loadAsync({
      OpenSans: require("../assets/fonts/OpenSans-SemiBold.ttf"),
      Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
      RobotoCondensed: require("../assets/fonts/RobotoCondensed-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
    console.log("fontloaded");
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log(this.props);
  //   if (nextProps.DATA !== this.props.DATA) {
  //     this.setState({ index: 0 });
  //   }
  // }

  beginSwipe = () => {
    console.log("Swiped right");
    Animated.timing(this.state.position, {
      toValue: { x: WIDTH, y: 0 },
      duration: 500
    }).start(() => this.doneSwiping());
  };

  doneSwiping = () => {
    const item = DATA[this.state.index];
    // console.log(item);

    // this.beginSwipe(item);

    this.setState({ index: this.state.index + 1 });
    this.state.position.setValue({ x: 0, y: 0 });
  };

  resetPosition = () => {
    // console.log("reset");
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };
  renderCards = () => {
    return DATA.map((item, i) => {
      // console.log(this.state.position);
      if (i < this.state.index) return null;

      if (i === this.state.index) {
        return (
          <Animated.View
            style={[
              this.state.position.getLayout(),
              styles.animated,
              { zIndex: 99, transform: [{ scale: 1 }] }
            ]}
            {...this.state.panResponder.panHandlers}
            key={item.id}
          >
            <SavedNewsCard
              title={item.title}
              img={item.urlToImage}
              author={item.author}
              summary={item.summary}
              id={item.id}
              style={{ ...styles }}
            />
          </Animated.View>
        );
      }
      return (
        <Animated.View
          style={[
            styles.animated,
            {
              top: 20 * (i - this.state.index),
              zIndex: 5,

              transform: [{ scale: 0.98 }]
            }
          ]}
          key={item.id}
        >
          <SavedNewsCard
            title={item.title}
            img={item.urlToImage}
            author={item.author}
            summary={item.summary}
            id={item.id}
            style={{ ...styles }}
          />
        </Animated.View>
      );

      // console.log(item);
    }).reverse();
  };

  render() {
    return this.state.fontLoaded ? (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
        }}
      >
        {this.renderCards()}
      </View>
    ) : null;
  }
}

const styles = {
  animated: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  cardOpacity: {
    opacity: 1
  },
  titleText: {
    fontFamily: "OpenSans",
    fontSize: 32
  },
  authorText: {
    fontFamily: "RobotoCondensed",
    fontSize: 20,
    color: "gray"
  },
  summaryText: {
    fontFamily: "Roboto",
    fontSize: 18,
    letterSpacing: 0.1,
    lineHeight: 25
  }
};

const DATA = [
  {
    id: 1,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 2,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 3,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 4,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 5,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 6,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 7,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  },
  {
    id: 8,
    author: "George Dvorsky",
    title:
      "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
    summary: [
      "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
      "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
      "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
      "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
      "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
    ]
  }
];

export default Deck;
