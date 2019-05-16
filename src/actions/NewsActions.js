import axios from "axios";
import { WORLD_NEWS } from "./types";
import { Actions } from "react-native-router-flux";

export const worldNews = () => {
  console.log("got to world news");
  let url =
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=513740817e1e424cb4406d9e434de94f";
  return dispatch => {
    return axios.get(url).then(res => {
      // console.log("respose", res.data);
      dispatch({
        type: WORLD_NEWS,
        payload: res.data.articles
      });
    });
  };
};
