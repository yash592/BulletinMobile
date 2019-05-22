import { WORLD_NEWS } from "../actions/types";

const initialState = {
  news: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WORLD_NEWS:
      // console.log("from reducer", action.payload[0]);
      return action.payload;
    default:
      return state;
  }
};
