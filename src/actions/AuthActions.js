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
  IF_USER_LOGGED_IN,
  GOOGLE_LOGIN_USER
} from "./types";
import { AsyncStorage } from "react-native";
import { Font } from "expo";
import { FIREBASE_CONFIG } from "../../keys";

// action to start the login process

export const signInWithGoogleAsync = () => {
  console.log("google sign in");
  // console.log(FIREBASE_CONFIG.androidClientId);

  return dispatch => {
    dispatch({
      type: GOOGLE_LOGIN_USER
    });
    const result = Expo.Google.logInAsync({
      androidClientId: FIREBASE_CONFIG.androidClientId,
      scopes: ["profile", "email"]
    }).then(res => {
      if (res.type === "success") {
        // console.log(res);
        onSignIn(res);
        return res.accessToken;
      } else {
        return { cancelled: true };
      }
    });
  };
};

// onSignIn checks if user exists already in db.catch
// if not then proceed and store it in the db

export const onSignIn = googleUser => {
  const { email, id, name, photoUrl } = googleUser.user;
  console.log(email, id, photoUrl, name);

  firebase
    .database()
    .ref("users/" + id)
    .set({
      email,
      name,
      photoUrl,
      savedGists: {}
    })
    .then(res => {
      doesUserExist(googleUser);
    });
};

const doesUserExist = googleUser => {
  const unsubsctibe = firebase.auth().onAuthStateChanged(firebaseUser => {
    unsubsctibe();
    const { currentUser } = firebase.auth();
    console.log("userid", currentUser);
    if (!userEqual(googleUser, firebaseUser)) {
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken
      );
      console.log("cred", credential);
      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    } else {
      console.log("User already signed in");
    }
  });
};

const userEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        console.log("true");
        return true;
      }
    }
  }
  console.log("false");
  return false;
};

// function onSignIn(googleUser) {
//   console.log('Google Auth Response', googleUser);
//   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
//   var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
//     unsubscribe();
//     // Check if we are already signed-in Firebase with the correct user.
//     if (!isUserEqual(googleUser, firebaseUser)) {
//       // Build Firebase credential with the Google ID token.
//       var credential = firebase.auth.GoogleAuthProvider.credential(
//           googleUser.getAuthResponse().id_token);
//       // Sign in with credential from the Google user.
//       firebase.auth().signInWithCredential(credential).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });
//     } else {
//       console.log('User already signed-in Firebase.');
//     }
//   });
// }

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
