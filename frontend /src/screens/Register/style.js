import { StyleSheet } from "react-native";
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.neutro100,
  
  paddingTop:15
},
form: {
  marginTop: 18
},
  formText:{
   paddingBottom:30,
   marginHorizontal:20,

  },
 
  text: {
    marginTop: 15, 
    color: colors.primary500,
    marginHorizontal:20,
    zIndex: 1,
 
  },
  formLabel:{
    color:colors.neutro600,
    marginHorizontal:20,
    zIndex: 1,
    marginBottom:2,
    paddingLeft:15
  },
  formInput:{
    borderColor: colors.neutro600,
    borderWidth:1,
    height:56,
    borderRadius:4,
    paddingLeft:10,
    marginBottom:20,
    marginTop: -8,
    marginHorizontal:20

    
  },
  btnView:{
    marginTop:80,
    height:46,
    marginHorizontal:20
  }
});

export default Styles;
