import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
import colors from "../../../utils/colors";

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
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 2,
    backgroundColor: colors.neutro100,
    borderBottomColor: colors.neutro400,
    elevation: 8

  },
  photo: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50
  },
  linktext: {
   borderTopColor: colors.neutro400,
   borderTopWidth:2,
   width:368,
   paddingTop:10
  }
});

export default Styles;
