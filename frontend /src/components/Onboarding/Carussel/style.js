import { StyleSheet } from "react-native";
import { useDimensions } from "../../../hooks/useDimensions";


const { heightScreen, widthScreen } = useDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10,
    marginRight:10,

  },

  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 10,
    flexDirection: 'row',

  },

  textContainer: {
    flexDirection: 'column',
    padding: 4,
    marginTop: 24,
    marginBottom: 41

  },

  track: {
    backgroundColor:'#513894' ,
    overflow: 'hidden',
    height: 12,
    borderRadius: 6,
   
  },

  bar: {
    backgroundColor:'#9B99FF' ,
    height: 10,
    position: 'absolute',
    left: 0,
    top: 0,
  },

  carrusel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthScreen * 0.97,
    height: heightScreen * 0.45,
    marginTop: 5,
  }
})

export default styles;