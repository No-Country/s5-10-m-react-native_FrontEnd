import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import fonts from "../../utils/fonts";

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
    marginTop: 100,
    height:58,
  
  },
  btn: {
    width: '80%',
    borderRadius: 8,
    padding: 10,

  },
  form: {
    marginTop: 40
  },
  formLabel: {
    fontSize: 13,
    marginBottom: -25,
    marginLeft: 10,
    width: '35%',
    color: colors.neutro600, 
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
    color: colors.neutro600, 
    backgroundColor: colors.neutro100,
    zIndex: 1,
    paddingHorizontal: 5,
	  fontWeight: 'bold',
    borderRadius: 8,
    marginTop: 25
  },
  formInput: {
    height: 56,
    borderColor: colors.neutro600,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 10,
    padding: 8
  },
  text: {
    marginTop: 25, 
    color: colors.blue,
    textAlign: 'center',
    fontSize:17
  }
});

export default Styles;
