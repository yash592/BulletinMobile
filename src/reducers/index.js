import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import NewsReducers from "./NewsReducers";

export default combineReducers({
  auth: AuthReducers,
  news: NewsReducers
});
