import { WORLD_NEWS } from "../actions/types";

const initialState = {
  news: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WORLD_NEWS:
      console.log("from reducer");
      return action.payload;
    default:
      return state;
  }
};
