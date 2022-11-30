import { StyleSheet } from "react-native";
import { useDimensions } from "../../hooks/useDimensions";
const { heightScreen, widthScreen } = useDimensions();
import colors from "../../utils/colors";

const Styles = StyleSheet.create({

  listConatiner: {
    display: "flex",
    flexDirection: "column",

  },

  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightScreen * 0.09,
    width: widthScreen * 0.95,
    borderBottomWidth: 1,
    marginVertical: 15,
    marginHorizontal: 15,
    borderBottomColor: colors.neutro400,
  },

  title: {
    marginLeft: -180

  },
  title2: {
    marginLeft: -220

  },
title3:{
  marginLeft: -260
},
title4:{
 marginRight:300
}
});

export default Styles;
