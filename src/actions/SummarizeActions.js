import axios from "axios";
import { SUMMARIZE_NEWS } from "./types";
import { Actions } from "react-native-router-flux";
// const unirest = require("unirest");

// summarize: function(link) {
//     console.log(link);
//     return unirest.get("https://aylien-text.p.rapidapi.com/summarize?url="+ link + "&sentences_number=5")
//    .header("X-RapidAPI-Key", "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML")
//
//   },

export const summarizeArticle = (link, img, title, author) => {
  console.log("got to summarize", link, img, title, author);
  let url = `https://aylien-text.p.rapidapi.com/summarize?url=${link}&sentences_number=5`;
  // console.log(url);
  // console.log(fetch);

  return dispatch => {
    return fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML"
      }
    }).then(res => {
      const response = JSON.parse(res._bodyText);
      console.log("API response", response);
      dispatch({
        type: SUMMARIZE_NEWS,
        payload: [
          {
            summary: response.sentences,
            link: link,
            img: img,
            title: title,
            author: author
          }
        ]
      });

      Actions.newsdetail();
    });
  };
};
