import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER,
  COUNTRY_SETTER,
  COUNTRY_GETTER
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  error: "",
  country: null,
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
    case COUNTRY_GETTER:
      return { ...state, ...INITIAL_STATE, country: action.payload };
    default:
      return state;
  }
};
