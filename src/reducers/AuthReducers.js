import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from "../actions/types";

const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_FAIL:
      return {
        ...state,
        error: "Login Failed! Check your username or password",
        loading: false
      };
    default:
      return state;
  }
};
