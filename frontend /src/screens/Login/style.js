import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutro100,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 15,
    paddingTop: 25
  },
  btnView: {
    marginTop: 100
  },
  btn: {
    width: '80%',
    borderRadius: 8,
    padding: 10
  },
  form: {
    marginTop: 40
  },
  formLabel: {
    fontSize: 13,
    marginBottom: -25,
    marginLeft: 10,
    width: '35%',
    color: colors.primary300, 
    backgroundColor: colors.neutro100,
    zIndex: 1,
    paddingHorizontal: 5,
	  fontWeight: 'bold',
    borderRadius: 8
  },
  formLabelContrasena: {
    fontSize: 13,
    marginBottom: -25,
    marginLeft: 10,
    width: '23%',
    color: colors.primary300, 
    backgroundColor: colors.neutro100,
    zIndex: 1,
    paddingHorizontal: 5,
	  fontWeight: 'bold',
    borderRadius: 8
  },
  formInput: {
    height: 50,
    borderColor: colors.primary300,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 10,
    padding: 8
  },
  text: {
    marginTop: 15, 
    color: colors.primary500,
    textAlign: 'center'
  }
});

export default Styles;
