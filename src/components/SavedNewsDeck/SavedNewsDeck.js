import React, { Component } from "react";
import {
  View,
  Animated,
  Stylesheet,
  Text,
  PanResponder,
  Dimensions,
  ScrollView
} from "react-native";
import { NewsCardLarge } from "../common/NewsCardLarge";
import { SavedNewsCard } from "../common/SavedNewsCard";

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
        position.setValue({ x: gesture.dx });
      },
      onPanResponderRelease: (event, gesture) => {
        gesture.dx > SWIPE_MIN ? this.swipeRight() : this.swipeLeft();
        position.setValue({ x: 0 });
      }
    });
    this.state = { panResponder, position };
  }

  swipeRight = () => {
    console.log("Swipped right");
  };

  swipeLeft = () => {
    console.log("swipped left");
  };
  renderCards = () => {
    return DATA.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            style={[this.state.position.getLayout(), styles.animated]}
            {...this.state.panResponder.panHandlers}
            key={item.id}
          >
            <SavedNewsCard
              title={item.title}
              img={item.urlToImage}
              author={item.author}
              summary={item.summary}
            />
          </Animated.View>
        );
      }
      return (
        <View style={styles.animated} key={item.id}>
          <SavedNewsCard
            title={item.title}
            img={item.urlToImage}
            author={item.author}
            summary={item.summary}
          />
        </View>
      );

      // console.log(item);
    });
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView
        contentContainerstyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30
        }}
      >
        {this.renderCards()}
      </ScrollView>
    );
  }
}

const styles = {
  animated: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
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
  }
  // {
  //   id: 3,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // },
  // {
  //   id: 4,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // },
  // {
  //   id: 5,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // },
  // {
  //   id: 6,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // },
  // {
  //   id: 7,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // },
  // {
  //   id: 8,
  //   author: "George Dvorsky",
  //   title:
  //     "Another Study Finds Our Galaxy Is 'Warped And Twisted' - Gizmodo Australia",
  //   url:
  //     "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
  //   urlToImage:
  //     "https://i.kinja-img.com/gawker-media/image/upload/c_lfill,w_768,q_90/rn5tfjqbb0oottg7kyxx.jpg",
  //   summary: [
  //     "A team of Polish astronomers has created the most accurate three-dimensional map of the Milky Way to date, revealing surprising distortions and irregularities along the galactic disk.",
  //     "Despite these limitations, we know that the Milky Way is a spiral galaxy measuring around 120,000 light-years across, and that we’re located around 27,000 light-years from the galactic core.",
  //     "A better way to map the Milky Way would be to directly measure our distance to a large sample of stars strewn across the galactic disk.",
  //     "Using this strategy, a team of scientists from the Astronomical Observatory at the University of Warsaw has compiled the most accurate 3D map of the Milky Way to date.",
  //     "The new map will also help to further clarify the physical structure of the Milky Way, the number of spiral arms (which is still debated), and the severity of the arms’ spiral twist, among other aspects."
  //   ]
  // }
];

export default Deck;
