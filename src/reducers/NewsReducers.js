import { WORLD_NEWS, POLITICS_NEWS } from "../actions/types";

const initialState = {
  news: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WORLD_NEWS:
      console.log("from reducer", action.payload);
      return action.payload;
    case POLITICS_NEWS:
      return action.payload;
    default:
      return state;
  }
};
