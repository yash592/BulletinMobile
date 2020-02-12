const cacheImages = () => {
  return images.map(image => {
    console.log(image);
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export const loadImages = async () => {
  const imageAssets = cacheImages([
    //require("../../assets/images/business.png")
  ]);
};
