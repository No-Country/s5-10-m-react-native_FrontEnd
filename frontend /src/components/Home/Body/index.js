import React from "react";
import PropTypes from "prop-types";
import Text from "../../Generics/MyText";
import Button from "../../Generics/MyButton";
import style from "./style";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { View, Image, TouchableOpacity } from "react-native";
import start from '../../../../assets/starting.png'


const Body = (props) => {
  return (
    <View style={style.container}>
      <View style={style.card}>
        <View>
          <Image source={start} style={style.photo} />
          <Text
            align={"center"}
            value={`Crea tu CV desde cero`}
            color={colors.neutro700}
            size={fonts.h2.fontSize}
            weight={fonts.h2.fontWeight}
          />
          <Text
            align={"center"}
            value={`Comencemos a crear tu cv`}
            color={colors.neutro700}
            size={fonts.labelRegular.fontSize}
            weight={fonts.labelRegular.fontWeight}
          />
   </View>
          <TouchableOpacity onPress={() => props.navigation.navigate("PaginationCvStack")} style={style.linktext}>
            <Text
              align={"center"}
              value={`Comenzar con mi CV`}
              color={colors.blue}
              size={fonts.labelRegular.fontSize}
              weight={fonts.labelRegular.fontWeight}
              style={style.linktext}
            />
          </TouchableOpacity>
     


      </View>
    </View>
  );
};

Body.propTypes = {};

export default Body;
