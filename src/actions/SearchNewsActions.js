import axios from "axios";
import { SEARCH_NEWS } from "./types";
import { Actions } from "react-native-router-flux";

export const searchNews = () => {
  console.log("got to search news");
  let searchTerm = "Boeing";
  let url = `https://newsapi.org/v2/everything?q=${searchTerm}&pageSize=40&apiKey=513740817e1e424cb4406d9e434de94f`;
  return dispatch => {
    return axios.get(url).then(res => {
      console.log("API length response", res.data.articles.length);
      dispatch({
        type: SEARCH_NEWS,
        payload: res.data.articles
      });
    });
  };
};
