import axios from "axios";
import { SUMMARIZE_NEWS } from "./types";
import { Actions } from "react-native-router-flux";
// const unirest = require("unirest");
// const AYLIENTextAPI = require("aylien_textapi");

// summarize: function(link) {
//     console.log(link);
//     return unirest.get("https://aylien-text.p.rapidapi.com/summarize?url="+ link + "&sentences_number=5")
//    .header("X-RapidAPI-Key", "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML")
//
//   },
export const summarizeArticle = story => {
  console.log("got to summarize", story);
  const { author, title, img, url } = story;
  console.log("URL", url);
  let reqUrl = `https://aylien-text.p.rapidapi.com/summarize?url=${url}&sentences_number=5`;
  // console.log(url);
  // console.log(fetch);
  console.log("REQURL", reqUrl);

  return dispatch => {
    return fetch(reqUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "aylien-text.p.rapidapi.com",
        "X-RapidAPI-Key": "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML"
      }
    }).then(res => {
      console.log("RES", res);
      // Actions.newsdetail();
      const response = JSON.parse(res._bodyText);
      // console.log("API response", response);
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
    });
  };
};

https://api.aylien.com/api/v1/summarize?language=en&sentences_number=5&input=https%3A%2F%2Fwww.cnn.com%2F2019%2F10%2F15%2Fhealth%2Flegionnaires-north-carolina-deaths%2Findex.html&title=%20https%3A%2F%2Faylien-text.p.rapidapi.com%2Fsummarize%3Furl%3Dhttps%253A%252F%252Fwww.cbsnews.com%252Fnews%252Fhormone-therapy-clinics-could-be-putting-patients-danger-2019-10-15%252F%26sentences_number%3D5&url=https%3A%2F%2Fwww.cnn.com%2F2019%2F10%2F15%2Fhealth%2Flegionnaires-north-carolina-deaths%2Findex.html&