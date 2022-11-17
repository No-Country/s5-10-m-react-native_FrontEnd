import { StyleSheet } from "react-native";
import colors from "../../../../utils/colors";

const Styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.neutro400,
    borderBottomWidth: 1,
    marginVertical: 25,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Styles;
