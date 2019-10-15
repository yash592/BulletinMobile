import axios from "axios";
import { SUMMARIZE_NEWS } from "./types";
import { Actions } from "react-native-router-flux";
// const unirest = require("unirest");
const AYLIENTextAPI = require("aylien_textapi");

// summarize: function(link) {
//     console.log(link);
//     return unirest.get("https://aylien-text.p.rapidapi.com/summarize?url="+ link + "&sentences_number=5")
//    .header("X-RapidAPI-Key", "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML")
//
//   },
var textapi = new AYLIENTextAPI({
  application_id: "93bf2c79",
  application_key: "2483722242baec84a6ab44965d4c96a7"
});

export const summarizeArticle = (link, img, title, author) => {
  // console.log("got to summarize", link, img, title, author);
  let url = `https://api.aylien.com/api/v1/summarize`;
  // console.log(url);
  // console.log(fetch);

  return dispatch => {
    textapi.summarize(
      {
        url: link
      },
      function(err, res) {
        if (err) {
          console.log(err);
        } else {
          console.log("RES", res);
        }
      }
    );
  };
};
