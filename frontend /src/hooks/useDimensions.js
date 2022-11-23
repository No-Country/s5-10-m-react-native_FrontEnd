import { Dimensions } from "react-native";

export const useDimensions = () => {
  const heightScreen = Dimensions.get("screen").height;
  const widthScreen = Dimensions.get("screen").width;
  return { heightScreen, widthScreen };
};
