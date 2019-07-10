import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import NewsReducers from "./NewsReducers";
import SummarizerReducers from "./SummarizerReducers";
import SearchNewsReducers from "./SearchNewsReducers";

export default combineReducers({
  auth: AuthReducers,
  news: NewsReducers,
  searchNews: SearchNewsReducers,
  summarize: SummarizerReducers
});
