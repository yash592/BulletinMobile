import axios from "axios";
import { NEWS } from "./types";
import { Actions } from "react-native-router-flux";

export const worldNews = countryCode => {
  console.log("got to world news", countryCode);
  let url = `https://newsapi.org/v2/top-headlines?country=${countryCode}&pageSize=100&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    Actions.newsresults();
    return axios.get(url).then(res => {
      console.log("respose", res.data.articles.length);
      dispatch({
        type: NEWS,
        payload: res.data.articles
      });
    });
  };
};

export const politicsStories = () => {
  console.log("got to politics");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=politics&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const businessStories = () => {
  console.log("got to biz");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const entertainmentStories = () => {
  console.log("got to Entertainment");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const healthStories = () => {
  console.log("got to health");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const scienceStories = () => {
  console.log("got to Science");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const sportsStories = () => {
  console.log("got to sports");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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

export const techStories = () => {
  console.log("got to tech");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f";
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
