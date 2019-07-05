import { SUMMARIZE_NEWS } from "../actions/types";

export default (state = [], action) => {
  console.log("action from reducers", action);
  switch (action.type) {
    case SUMMARIZE_NEWS:
      return action.payload;
    default:
      return state;
  }
};
