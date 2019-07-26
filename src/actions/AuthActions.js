import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_USER,
  COUNTRY_GETTER,
  COUNTRY_SETTER,
  ONBOARING_SETTER,
  ONBOARING_GETTER
} from "./types";
import { AsyncStorage } from "react-native";
import { Font } from "expo";

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
        Actions.home();
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

export const onBoardingDoneSet = code => {
  return dispatch => {
    return AsyncStorage.setItem("Onboarding", code)
      .then(res => {
        console.log("Onboarding", code);
        Actions.home();
        dispatch({
          type: ONBOARING_SETTER,
          payload: null
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const onBoardingDoneGet = code => {
  return dispatch => {
    return AsyncStorage.getItem("Onboarding")
      .then(res => {
        console.log(res);

        dispatch({
          type: ONBOARING_GETTER,
          payload: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
