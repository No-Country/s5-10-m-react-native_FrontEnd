import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";
import Styles from "./style";
import MyButton from '../../../Generics/MyButton/index';

const SkillsList = (props) => {
    return (
        <ScrollView>
            <View style={[Styles.container, Styles.List]}>
                <View style={[Styles.ListIcon]}>
                    <View style={Styles.IconBgRound}>
                        <Icon
                            name="tools"
                            size={20}
                            color={colors.primary500}
                        />
                    </View>
                </View>
                <View style={Styles.ListText}>
                    <Text style={[fonts.titleSmall, colors.neutro700]}>Inglés</Text>
                    <Text style={[fonts.text, colors.neutro600]}>Nivel: Bajo</Text>
                </View>
                <TouchableOpacity style={[Styles.ListDots]}>
                    <Icon
                        name="dots-horizontal"
                        size={20}
                        color={colors.neutro400}
                    />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:150, marginLeft:60}}>
                <MyButton
                    color={colors.neutro100}
                    bgcolor={colors.primary400}
                    onPress={() => props.navigation.navigate("Home")}
                    text={"Finalizar Cv"}
                    width={"80%"}
                    padding={12}
                />
            </View>

        </ScrollView>
    )
}

export default SkillsList;