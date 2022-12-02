import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
const { heightScreen, widthScreen } = useDimensions();

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  header: {
    height: heightScreen * 0.2,
    width: widthScreen * 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    bottom: 68,
    left: 58,
    position: "absolute",
  },
  rolViewSelected: {
    width: widthScreen * 0.25,
    height: heightScreen * 0.13,
    backgroundColor: "#ffff",
    elevation: 5,
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.primary300,
  },
  rolView: {
    width: widthScreen * 0.25,
    height: heightScreen * 0.13,
    backgroundColor: "#ffff",
    elevation: 5,
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  input: {
    textAlign: "center",
    width: "70%",
    padding: "1%",
    fontSize: fonts.labelRegular.fontSize,
    borderRadius: 10,
    backgroundColor: "#ffff",
    elevation: 2,
    color: colors.primary500,
  },
  buttonContainer: {
    width: widthScreen * 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
});

export default Styles;