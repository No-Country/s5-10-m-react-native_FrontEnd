import { StyleSheet } from "react-native";
import { useDimensions } from "../../hooks/useDimensions";

const { heightScreen, widthScreen } = useDimensions();

const Styles = StyleSheet.create({
  container: {
   display:'flex',
    alignItems: 'center',
    justifyContent: 'center', 
   
  },
  emailImage:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 240,
    marginTop: 15,
  },
  textContainer:{
    flexDirection: 'column',
    padding: 8,
    marginTop: 44,
    marginBottom: 88
  }, 
  but:{
    alignItems: 'center',
    justifyContent: 'center', 
  }

});

export default Styles;
