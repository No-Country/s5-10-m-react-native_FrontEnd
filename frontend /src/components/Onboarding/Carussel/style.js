import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";


const { heightScreen, widthScreen } = useDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,

  },

  barContainer: {
    bottom: 10,
    flexDirection: 'row',
    marginBottom:69

  },

  textContainer: {
    marginBottom: 21,
    marginHorizontal:40,

  },

  track: {
    backgroundColor:'#513894' ,
    overflow: 'hidden',
    height: 12,
    borderRadius: 6,
   
  },

  bar: {
    backgroundColor:'#9B99FF' ,
    height: 12,
    
    left: 0,
    top: 0,
  },

  carrusel: {
    alignItems: 'center',
    justifyContent: 'center',
    Width: 291,
    Height: 291,
    marginTop: 5,
    marginHorizontal:40
  },
  buttonContainer:{
    marginBottom:25,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:'18%'
   
  },

  
})

export default styles;