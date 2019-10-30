import axios from "axios";
import { SUMMARIZE_NEWS } from "./types";
import { Actions } from "react-native-router-flux";
// const unirest = require("unirest");

export const summarizeArticle = (link, img, title, author) => {
  console.log("got to summarize", link, img, title, author);
  let url = `https://api.aylien.com/api/v1/summarize?url=${img}&sentences_number=10`;
  console.log(url);
  // console.log(fetch);
  return dispatch => {
    fetch(url, {
      method: "GET",
      headers: {
        "X-AYLIEN-TextAPI-Application-Key": "2483722242baec84a6ab44965d4c96a7",
        "X-AYLIEN-TextAPI-Application-ID": "93bf2c79",
        "content-type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(respjson => {
        // console.log(respjson);
        Actions.newsdetail();
        dispatch({
          type: SUMMARIZE_NEWS,
          payload: [
            {
              summary: respjson.sentences,
              link: img,
              img: link,
              title: title,
              author: author
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
