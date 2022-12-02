import React from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import style from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import MyButton from "../../Generics/MyButton";
import MyText from "../../Generics/MyText";

const DescriptionPage = (props) => {
  return (
    <View style={style.container}>
      <View style={style.textmain}>
        <MyText value={"En esta sección vas a describir quién sos, qué hiciste, qué estás haciendo y qué te gustaría hacer"}
          color={colors.neutro700}
          size={fonts.title.fontSize}
          weight={"Bold"}
          align={"left"}

        />
      </View>
      <TextInput style={style.input}>Ingresar texto</TextInput>
      <View style={style.tiptext}>  
          <MyText value={"Tips"}
        color={colors.neutro700}
        size={fonts.titleSmall.fontSize}
        weight={"Bold"}
        align={"left"}

      />
      </View>
      <View style={style.tips}>
        <View style={style.tipsText}>
          <MyText
            icon={<MaterialCommunityIcons name="lightbulb" size={24} color="blue" />}
            value={'Colocar las expectativas del puesto al que aspiras'}
            weight={"Regular"}
            color={colors.neutro700}
            size={fonts.labelRegular.fontSize}

          />
        </View>

        <View style={style.tipsText}>
          <MyText
            icon={<MaterialCommunityIcons name="lightbulb" size={24} color="blue" />}
            value={'Evitar las frases pre-armadas y lugares comunes'}
            color={colors.neutro700}
            size={fonts.labelRegular.fontSize}

          />
        </View>
        <View style={style.tipsText}>
          <MyText
            icon={<MaterialCommunityIcons name="lightbulb" size={24} color="blue" />}
            value={' Utilizar un lenguaje simple, no utilizar palabras difíciless'}
            color={colors.neutro700}
            size={fonts.labelRegular.fontSize}

          />
        </View>
      </View>
      <View style={style.buttonContainer}>
        <MyButton
          color={colors.neutro100}
          bgcolor={colors.primary400}
          onPress={() => props.navigation.navigate("PersonalPage")}
          text={"Guardar"}
          width={"100%"}
          padding={12}
        />
      </View>
    </View>
  );
};

DescriptionPage.propTypes = {};

export default DescriptionPage;
