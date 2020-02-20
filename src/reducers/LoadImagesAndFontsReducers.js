import { LOAD_IMAGES_AND_FONTS } from "../actions/types";

const initialState = {
  loadImagesAndFonts: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_AND_FONTS:
      return action.payload;
    default:
      return state;
  }
};
