import Axios from "axios";
import { Actions } from "react-native-router-flux";
import { NEWS } from "./types";
import firebase from "firebase";
// import { Actions } from "react-native-router-flux";

import { SAVE_STORY } from "./types";

export const saveStory = () => {
  console.log("got to save story");
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged in is", user);
        dispatch({
          type: SAVE_STORY,
          payload: user
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
