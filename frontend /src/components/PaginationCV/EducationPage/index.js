import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import style from "./style";
import Education from "./educationSections/EducationView1";
import student from '../../../../assets/Studen.png'
import MyText from "../../Generics/MyText";
import MyButton from "../../Generics/MyButton";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { Feather } from '@expo/vector-icons';

const EducationPage = (props) => {
  return (
    <View style={style.container}>
      <Image source={student} style={style.img} />
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
          onPress={() => props.navigation.navigate("Education")}
          text={"Agregar Educacion"}
        
          width={"80%"}
          padding={12} />
      </View>
    </View>
  );
};

EducationPage.propTypes = {};

export default EducationPage;
