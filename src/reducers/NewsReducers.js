import { NEWS, SEARCH_NEWS } from "../actions/types";

const initialState = {
  news: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS:
      return action.payload;
    case SEARCH_NEWS:
      return action.payload;
    default:
      return state;
  }
};
