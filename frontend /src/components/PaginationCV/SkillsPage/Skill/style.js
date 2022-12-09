import { StyleSheet } from "react-native";
import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

const Styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "flex-start"
  },  
  h2: {
    marginBottom: 15,
    color: colors.neutro700
  },
  herramientasViewSelected: {
    backgroundColor: colors.primary500,
    elevation: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  herramientasView: {
    backgroundColor: "#ffff",
    elevation: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  input: {
    textAlign: "center",
    width: "70%",
    padding:'1%',
    fontSize:fonts.labelRegular.fontSize,
    borderRadius: 10,
    backgroundColor: "#ffff",
    elevation: 2,
    color: colors.primary500,
  },
  btn: {
    padding: (15, 10), 
    display: 'flex',
    flexDirection: 'row',
    marginTop:10
  },
  formLabel: {
    fontSize: 13,
    marginBottom: -25,
    marginLeft: 10,
    width: '45%',
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
  formLabelDate: {
    fontSize: 13,
    marginBottom: -25,
    marginLeft: 10,
    width: '30%',
    color: colors.primary300, 
    backgroundColor: colors.neutro100,
    zIndex: 1,
    paddingHorizontal: 5,
	  fontWeight: 'bold',
    borderRadius: 8
  },
  formDate: {
    height: 50,
    borderColor: colors.primary300,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 10,
    margin: 5,
    padding: 3,
    paddingHorizontal: 10
  },
  textArea: {
    height: 150,
    borderColor: colors.primary300,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 10,
    padding: 8,
    justifyContent: 'flex-start'
  },
  List: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    borderRadius: 5
  },
  ListIcon: {
    margin: 5,
    flexGrow: 1,
    justifyContent: 'center'
  },
  ListDots: {
    marginVertical: 15,
    justifyContent: 'flex-end'
  },
  ListText: {
    flexGrow: 2,
    justifyContent: 'center',
    marginLeft: -60
  },
  IconBgRound: {
    backgroundColor: colors.neutro200,
    borderRadius: 50,
    padding: 10,
    width: 40
  }
});

export default Styles;
