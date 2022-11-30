import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";

const { heightScreen, widthScreen } = useDimensions();

const Styles = StyleSheet.create({
  container: {
    height: heightScreen * 0.4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  },
  card: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: widthScreen * 0.9,
    height: heightScreen * 0.28,
    borderRadius: 12,
   
  },
});

export default Styles;
