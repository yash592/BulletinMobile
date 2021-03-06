import axios from "axios";
import { NEWS } from "./types";
import { Actions } from "react-native-router-flux";

export const worldNews = countryCode => {
  Actions.newsresults();
  // console.log("got to world news", countryCode);
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      // console.log("respose", res.data.articles);
      res.data.articles.forEach(element => {
        // console.log("FOREACH", element.publishedAt);
      });
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
    });
  };
};

export const politicsStories = countryCode => {
  console.log("got to politics");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=politics&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    Actions.newsresults();
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
    });
  };
};

export const businessStories = countryCode => {
  console.log("got to biz");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    Actions.newsresults();
    return axios.get(url).then(res => {
      console.log(res.data.articles.length);
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
    });
  };
};

export const entertainmentStories = countryCode => {
  console.log("got to Entertainment");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=entertainment&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
      Actions.newsresults();
    });
  };
};

export const healthStories = countryCode => {
  console.log("got to health");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=health&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
      Actions.newsresults();
    });
  };
};

export const scienceStories = countryCode => {
  console.log("got to Science");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=science&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
      Actions.newsresults();
    });
  };
};

export const sportsStories = countryCode => {
  console.log("got to sports");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
      Actions.newsresults();
    });
  };
};

export const techStories = countryCode => {
  console.log("got to tech");
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=technology&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
      Actions.newsresults();
    });
  };
};
