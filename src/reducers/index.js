import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import NewsReducers from "./NewsReducers";
import SummarizerReducers from "./SummarizerReducers";

export default combineReducers({
  auth: AuthReducers,
  news: NewsReducers,
  summarize: SummarizerReducers
});
