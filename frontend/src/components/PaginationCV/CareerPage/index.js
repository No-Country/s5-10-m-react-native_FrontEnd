import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Styles from "./style";
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

// importing buttons and text from generics
import MyButton from "../../Generics/MyButton";

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Educations = () => {
  return (
    <View style={Styles.exp}>
      <View style={Styles.icon}>
        <Icon
          name="briefcase-outline"
          size={20}
          color={colors.primary300}
        />
      </View>
      <View>
        <Text style={fonts.title}>Platzi</Text>
        <Text>Fullstack React Developer</Text>
      </View>
      <Entypo
        name="dots-three-horizontal"
        size={20}
        />
    </View>
  )
}

const EducationPage = ({props, navigation}) => {
  const [status, setStatus ] = useState(0);


  return (
    <View style={Styles.container}>
      {/* change image and the status  */}
      {status != 0 ? 
      <Educations /> :
      <Image source={require('../../../../assets/onboarding01.png')}/>
      }
      <MyButton
        onPress={() => navigation.navigate("CareerForm")} 
        icons = {true}
        text={"Agregar experiencia y proyectos"} 
        bgcolor={colors.primary500} 
        color={colors.neutro100}
        style={Styles.btn}
        padding={12}
        styled={{marginTop: 70}}
      />
    </View>
  );
};

EducationPage.propTypes = {};

export default EducationPage;
