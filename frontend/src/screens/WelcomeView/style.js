import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutro100,
    alignItems: "center",
    justifyContent: "center",
  },
  mx_10: {
    marginTop: 10,
    marginBottom: 10,
    width: '80%' 
  },
  text: {
    marginTop: 15, 
    color: colors.primary500
  }
});

export default Styles;
