import { StyleSheet } from "react-native";
import colors from '../../../utils/colors';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        display: "flex",
        alignItems: "center",
        marginTop: 15
      },
      btn: {
        width: '80%',
        borderRadius: 8,
        padding: 10
      },
      edu: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 20, 
        padding: 20, 
        alignItems: "center",
        width: '90%',
        borderWidth: 1,
        borderColor: colors.neutro300,
        borderRadius: 5
      }, 
      icon: {
        backgroundColor: colors.lightGray,
        padding: 10,
        borderRadius: 50
      }
});

export default Styles;