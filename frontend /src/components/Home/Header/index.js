import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import Text from "../../Generics/MyText";
import style from "./style";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { LinearGradient } from "expo-linear-gradient";
const Header = ({ fullName }) => {
  return (
    <LinearGradient 
      colors={["#DCD1FA", "#F5F1FD", "#F5F1FD"]}
      style={style.container}
    >
      <View>
        <Text
          align={"center"}
          value={`  ¡Hola! ${fullName}`}
          color={colors.primary500}
          size={fonts.h2.fontSize}
          weight={fonts.h2.fontWeight}
        />
        <Text
          align={"center"}
          value={`   ¿Qué te gustaría hacer?`}
          color={colors.primary500}
          size={fonts.labelRegular.fontSize}
          weight={fonts.labelRegular.fontWeight}
        />
      </View>
      <Image
        source={require("../../../../assets/Vector.png")}
        style={style.image}
      />
    </LinearGradient>
  );
};

Header.propTypes = {};

export default Header;
