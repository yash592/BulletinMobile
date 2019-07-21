import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_USER,
  COUNTRY_GETTER,
  COUNTRY_SETTER
} from "./types";
import { AsyncStorage } from "react-native";

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
  Actions.home();
};

export const loginUserFail = () => {};

export const countrySetter = country => {
  return dispatch => {
    return AsyncStorage.setItem("Country", country)
      .then(res => {
        console.log("Country code set", res);
        dispatch({
          type: COUNTRY_SETTER,
          payload: null
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const countryGetter = () => {
  // console.log("country from action");
  return dispatch => {
    return AsyncStorage.getItem("Country").then(res => {
      console.log(res);
      dispatch({
        type: COUNTRY_GETTER,
        payload: res
      });
    });
  };
};
