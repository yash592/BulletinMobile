import firebase from "firebase";
import { Actions } from "react-native-touter-flux";
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_USER } from "./types";

export const loginUser = () => {
  return dispatch => {
    console.log("trying to log user in!");
  };
};

export const loginUserSuccess = () => {};

export const loginUserFail = () => {};
