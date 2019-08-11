import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_USER,
  COUNTRY_GETTER,
  COUNTRY_SETTER,
  ONBOARING_SETTER,
  ONBOARING_GETTER,
  IF_USER_LOGGED_IN
} from "./types";
import { AsyncStorage } from "react-native";
import { Font } from "expo";
import { FIREBASE_CONFIG } from "../../keys";

// action to start the login process

//

export const signInWithGoogleAsync = () => {
  // this.props.loginUser(this.state.user, this.state.password);
  console.log(FIREBASE_CONFIG.androidClientId);

  const result = Expo.Google.logInAsync({
    androidClientId: FIREBASE_CONFIG.androidClientId,

    scopes: ["profile", "email"]
  });

  console.log(result);

  if (result.type === "success") {
    console.log("success!!");
    console.log(result);
    Actions.home();
    return result.accessToken;
  } else {
    return { cancelled: true };
  }
};

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

// action to sucessfully log a user in and redirect

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  // console.log(payload);
  Actions.home();
};

// action to handle a login failure attempt

export const loginUserFail = () => {};

// action to check auth state and reroute based on that

export const checkIfUserLoggedIn = () => {
  console.log("got to check user action");
  return dispatch => {
    dispatch({
      type: IF_USER_LOGGED_IN
    });
    firebase.auth().onAuthStateChanged(user => {
      console.log("try user id logged in", user.uid);
    });
  };
};

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
