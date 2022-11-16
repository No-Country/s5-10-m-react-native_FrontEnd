import React from "react";
import PropTypes from "prop-types";
import Text from "../../Generics/MyText";
import Button from "../../Generics/MyButton";
import style from "./style";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Body = ({ navigation }) => {
  return (
    <View style={style.container}>
      <LinearGradient
        colors={["#4E4D80", "#544389", "#6C428A"]}
        style={style.card}
      >
        <View>
          <Text
            align={"center"}
            value={`Crea tu CV desde cero`}
            color={colors.primary50}
            size={fonts.h2.fontSize}
            weight={fonts.h2.fontWeight}
          />
          <Text
            align={"center"}
            value={`Comencemos a crear tu cv`}
            color={colors.primary50}
            size={fonts.labelRegular.fontSize}
            weight={fonts.labelRegular.fontWeight}
          />
        </View>
        <Button
          text="Crear CV"
          color={colors.primary300}
          width={"75%"}
          padding={12}
          onPress={() => navigation.navigate("PaginationCvStack")}
        />
      </LinearGradient>
    </View>
  );
};

Body.propTypes = {};

export default Body;
