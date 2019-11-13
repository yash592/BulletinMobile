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
import SwipeCard from "../common/SwipeCard/SwipeCard";
import * as Font from "expo-font";
import { BottomNav } from "../common/BottomNav";
import { Header } from "../common/Header";
import { fetchStories, deleteStory } from "../../actions";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import _ from "lodash";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SWIPE_MIN = 0.5 * WIDTH;

class SavedNewsDeck extends Component {
  constructor(props) {
    super(props);
  }

  sampledata = [
    {
      Text: "HI",
      Sample: "Hello"
    },
    {
      Text: "HI",
      Sample: "Hi"
    },
    {
      Text: "HI",
      Sample: "Nope"
    }
  ];

  renderCard = news => {
    return (
      <Card>
        <View style={{ width: 800 }}>
          <Text>{news.Sample}</Text>
        </View>
      </Card>
    );
  };

  // load font

  // render all cards and stack them together

  render() {
    console.log("SAVEDNEWSDECK?");
    return (
      <View style={{ marginTop: 10 }}>
        <SwipeCard
          data={this.sampledata}
          renderCard={this.renderCard}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = {
  animated: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "86%"
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
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 25
  }
};

const DATA = [
  {
    id: 1,
    author: "Sandra Erwin",
    title:
      "ULA receives contract for what could be the final Delta 4 Heavy mission - SpaceNews",
    url:
      "https://spacenews.com/wp-content/uploads/2016/06/Delta-4-Heavy_NROL-37_2016-06-11.jpg",
    urlToImage:
      "https://spacenews.com/wp-content/uploads/2016/06/Delta-4-Heavy_NROL-37_2016-06-11.jpg",
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
    author: "Joe Rao",
    title:
      "See the Moon Near Jupiter (and Twinkly Red Antares, Too!) This Friday - Space.com",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://cdn.mos.cms.futurecdn.net/sqVs6v9cFwjazz8xQdbEs8-1200-80.jpg",
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
    author: "Ashley Strickland",
    title:
      "Exclusive: Google Pixel 4 and 4 XL will have 90Hz ‘Smooth Display’, 6GB of RAM, more - 9to5Google",
    url:
      "https://www.gizmodo.com.au/2019/08/another-study-finds-our-galaxy-is-warped-and-twisted/",
    urlToImage:
      "https://9to5google.com/wp-content/uploads/sites/4/2019/06/google-pixel-4-header-1.png",
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

const mapStateToProps = state => {
  // console.log("STATE", state);
  const savedStories = _.map(state.news, stories => {
    return { stories };
  });
  // console.log("SAVEDSTORIES", savedStories);
  return { savedStories };
};

export default connect(
  mapStateToProps,
  { fetchStories, deleteStory }
)(SavedNewsDeck);
