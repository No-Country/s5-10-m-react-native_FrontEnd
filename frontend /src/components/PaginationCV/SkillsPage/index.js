import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import style from "./style";
import MyText from "../../Generics/MyText";
import MyButton from "../../Generics/MyButton";
import { Feather } from '@expo/vector-icons';
import tool from '../../../../assets/tool.png';
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";


const SkillsPage = (props) => {
  return (
    <View style={style.container}>
    <Image source={tool } style={style.img} />
    <View style={style.tex}>
      <MyText
        value={'Si no contas con experiencia formal, podes agregar proyectos personales o académicos. Todo suma'}
        align={'center'}
        color={colors.neutro600}
        size={fonts.labelRegular.fontSize}
          weight={"Regular"}
      />
    </View>
    <View style={style.but}>
      <MyButton
        icon={<Feather name="plus-circle" size={24} color="white" />}
        color={colors.neutro100}
        bgcolor={colors.primary400}
        onPress={() => props.navigation.navigate("CareerForm")}
        text={"Agregar herramienta o habilidad"}
        height={50}
        width={"80%"}
        padding={12} />
    </View>
  </View>
  );
};

SkillsPage.propTypes = {};

export default SkillsPage;
