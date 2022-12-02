import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";
const { heightScreen, widthScreen } = useDimensions();

const Styles = StyleSheet.create({
  container: {
    height: heightScreen * 0.11,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor:'#FFFFFF',
    paddingTop:24,
    paddingHorizontal:20,

  },
  
  photo:{
    width:32,
    height:32
  }
});

export default Styles;
