import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    textmain: {
        lineHeight: 20,
        paddingVertical: 20

    },
    input: {
        height: 234,
        backgroundColor: colors.neutro100,
        borderRadius: 8,
        color: colors.neutro500,
        borderColor: colors.neutro600,
        borderWidth: 1,
        marginBottom: 20,
        paddingStart:20,
        paddingBottom:160


    },
    tiptext: {
        paddingVertical: 20
    },
    tips: {
        height: 234,
        backgroundColor: colors.neutro100,
        borderRadius: 8,
        backgroundColor: colors.neutro300,
        marginBottom: 50

    },
    tipsText: {
        lineHeight: 20,
        marginVertical: 15,
        marginHorizontal: 20
    }



});

export default Styles;
