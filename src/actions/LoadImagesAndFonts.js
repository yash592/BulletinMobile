import { LOAD_IMAGES_AND_FONTS } from "./types";
import { Asset } from "expo-asset";

export const loadImages = () => {
  console.log("LOAD IMAGES ACTIONS");
  return dispatch => {
    console.log("Got to load images actions");
    const images = [
      require("../assets/categoryImages/business.jpg"),
      require("../assets/categoryImages/entertainment.jpg"),
      require("../assets/categoryImages/science.jpg"),
      require("../assets/categoryImages/health.jpg"),
      require("../assets/categoryImages/politics.png"),
      require("../assets/categoryImages/science.jpg"),
      require("../assets/categoryImages/sports.jpg"),
      require("../assets/categoryImages/tech.jpg")
    ];
    // console.log(images);
    const cacheImages = images.map(image => {
      console.log(image);
      return Asset.fromModule(image).downloadAsync();
    });
    // console.log(cacheImages);
    const fonts = Promise.all(cacheImages);
    console.log("FONTS", fonts);

    fonts.then(res => {
      console.log("RES", res);
      dispatch({
        type: LOAD_IMAGES_AND_FONTS,
        payload: res
      });
    });
  };
};
