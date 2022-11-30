import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
const { heightScreen, widthScreen } = useDimensions();

const Styles = StyleSheet.create({
  container: {
    height: heightScreen * 0.13,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    height: heightScreen * 0.13,
  },
});

export default Styles;
