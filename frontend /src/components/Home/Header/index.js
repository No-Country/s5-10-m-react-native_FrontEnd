import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import Text from "../../Generics/MyText/index";
import style from "./style";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import userphoto from '../../../../assets/monogram.png'


const Header = ({ fullName }) => {
  return (
 
      <View style={style.container} s>
        <Image source={userphoto} style={style.photo} />
        <Text
          align={"center"}
          value={`  ¡Hola! ${fullName}`}
          color={colors.neutro700}
          size={fonts.h2.fontSize}
          weight={fonts.h2.fontWeight}
        />
      
     
    
     </View>
  );
};

Header.propTypes = {};

export default Header;
