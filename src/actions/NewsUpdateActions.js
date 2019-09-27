import Axios from "axios";
import { Actions } from "react-native-router-flux";
import { NEWS } from "./types";
import firebase from "firebase";
// import { Actions } from "react-native-router-flux";

import { SAVE_STORY } from "./types";

export const saveStory = story => {
  // console.log("got to save story", title);
  console.log("story from savestory fn", story);
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
        console.log(uid);
        firebase
          .database()
          .ref(`/users/${user.uid}/`)
          .push(story)
          .then(console.log("done"));
        dispatch({
          type: SAVE_STORY,
          payload: "Saved story!"
        });
      } else {
        console.log("no user fpund");
      }
    });
  };
};

export const fetchStories = () => {
  const { user } = firebase.auth();
  console.log(user.uid);

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${user.uid}/stories`)
      .on("value", snapshot => {
        dispatch({
          type: FETCH_SAVED_STORIES,
          payload: snapshot.val()
        });
      });
  };
};

export const deleteStory = () => {};
