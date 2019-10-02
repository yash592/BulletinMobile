import {
  NEWS,
  SEARCH_NEWS,
  SAVE_STORY,
  FETCH_SAVED_STORIES
} from "../actions/types";

const initialState = {
  news: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS:
      return action.payload;
    case SEARCH_NEWS:
      return action.payload;
    case SAVE_STORY:
      return action.payload;
    case FETCH_SAVED_STORIES:
      return action.payload;
    default:
      return state;
  }
};
