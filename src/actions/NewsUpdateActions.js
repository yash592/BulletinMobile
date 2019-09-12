import Axios from "axios";
import { Actions } from "react-native-router-flux";
import { NEWS } from "./types";

export const saveStory = ({ title, img, author, summary }) => {
  const { user } = firebase.auth;
  user ? null : actions.splash;

  firebase.database
    .ref(`/users/${user.uid}/stories`)
    .push({ title, img, author, summary })
    .then(() => {
      dispatch({
        type: SAVE_STORY,
        payload: null
      });
    });
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
