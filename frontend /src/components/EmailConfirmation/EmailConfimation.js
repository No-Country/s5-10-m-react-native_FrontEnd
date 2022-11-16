import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import MyButton from '../Generics/MyButton';
import style from "./style";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import MyText from '../Generics/MyText';

function EmailConfimation() {
    return (
        <View style={style.emailContainer}>
            <ScrollView>
                <Image source={require("../../../assets/envioMail.png")} style={style.emailImage} />
                <View style={style.textContainer}>
                    <MyText
                        align={"center"}
                        value={`Te envíamos un correo`}
                        color={colors.primary500}
                        size={fonts.h2.fontSize}
                        weight={fonts.h2.fontWeight}
                    />
                    <MyText
                        align={"center"}
                        value={`Ingresa a tu casilla para verificar tu cuenta`}
                        color={colors.primary500}
                        size={fonts.labelRegular.fontSize}
                        weight={fonts.labelRegular.fontWeight}
                    />
                </View>
                <View style={style.but}>
                <MyButton
                    text="Abrir correo electrónico"
                    bgcolor={colors.primary300}
                    color={colors.neutro100}
                    width={"75%"}
                    padding={12}
                    onPress={() => console.log("create")}
                /></View>
            </ScrollView>
        </View>
    )
}

export default EmailConfimation;
