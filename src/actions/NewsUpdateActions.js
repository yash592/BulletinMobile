import Axios from "axios";
import { Actions } from "react-native-router-flux";
import { NEWS } from "./types";
import firebase from "firebase";
// import { Actions } from "react-native-router-flux";

import { SAVE_STORY, FETCH_SAVED_STORIES } from "./types";

export const saveStory = story => {
  // console.log("got to save story", title);
  console.log("story from savestory fn", story);
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
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
        console.log("No user found");
        Actions.auth();
      }
    });
  };
};

export const deleteStory = title => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
        console.log(uid);
        let adaref = firebase.database().ref(`users/${uid}`);
        console.log(adaref);
      }
    });
  };
};

export const fetchStories = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref(`/users/${user.uid}/`)
          .on("value", snapshot => {
            // console.log("snap", snapshot);
            dispatch({
              type: FETCH_SAVED_STORIES,
              payload: snapshot.val()
            });
          });
      } else {
        console.log("no user found");
      }
    });
  };
};
