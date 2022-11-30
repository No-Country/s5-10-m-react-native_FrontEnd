import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
import colors from "../../../utils/colors";
const { heightScreen, widthScreen } = useDimensions();
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: heightScreen * 0.02,
  },
  label: {
    paddingStart: 6,
    backgroundColor: "#fff",
    width: "18%",
    color: colors.neutro500,
    marginBottom: 5,
  },
  inputcontainerFocus: {
    width: widthScreen * 0.8,
    height: heightScreen * 0.062,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary500,
    marginTop: 20,
    paddingStart: 10,
  },
  inputcontainer: {
    width: widthScreen * 0.8,
    height: heightScreen * 0.062,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.neutro300,
    marginTop: 20,
    paddingStart: 10,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: heightScreen * 0.05,
  },
});

export default Styles;