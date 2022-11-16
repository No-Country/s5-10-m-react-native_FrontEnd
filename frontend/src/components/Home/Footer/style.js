import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
import colors from "../../../utils/colors";
const { heightScreen, widthScreen } = useDimensions();
const Styles = StyleSheet.create({
  container: {},
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal:widthScreen * 0.05,
    borderBottomWidth:1,
    borderBottomColor:colors.neutro300
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: widthScreen * 0.4,
    height: heightScreen * 0.2,
    marginVertical: heightScreen * 0.02,
  },
});

export default Styles;
