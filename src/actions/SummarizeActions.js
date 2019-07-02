// summarize: function(link) {
//     console.log(link);
//     return unirest.get("https://aylien-text.p.rapidapi.com/summarize?url="+ link + "&sentences_number=5")
//    .header("X-RapidAPI-Key", "ODvwbEGCc8mshFxn58WHl2tFdqkfp1eFXRXjsnlfTlgUdF0qML")
//
//   },
import { SUMMARIZE_NEWS } from "./types";

export const summarizeArticle = () => {
  console.log("got to summarize");
  return dispatch => {
    dispatch({
      type: SUMMARIZE_NEWS,
      payload: null
    });
  };
};
