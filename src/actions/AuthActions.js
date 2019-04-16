import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_USER } from "./types";

export const loginUser = (email, password) => {
  // console.log(dispatch);
  return dispatch => {
    console.log("trying to log user in!", email, password);
    dispatch({
      type: LOGIN_USER
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        loginUserSuccess(dispatch, user);
      });
  };
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  // console.log(payload);
  Actions.main();
};

export const loginUserFail = () => {};
