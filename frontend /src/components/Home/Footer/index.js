import React from "react";
import PropTypes from "prop-types";
import { FlatList, Image, View } from "react-native";
import style from "./style";
import Text from "../../Generics/MyText";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
const Footer = ({ data }) => {
  return (
    <View style={style.container}>
      <View style={style.headerText}>
        <Text
          align={"left"}
          value={`Mis CVs`}
          color={colors.neutro700}
          size={fonts.h2.fontSize}
          weight={fonts.h2.fontWeight}
        />
      </View>
      {data.length > 0 ? (
        <>
          <FlatList data={data} />
        </>
      ) : (
        <View style={style.imageContainer}>
          <Image
            source={require("../../../../assets/Pagenotfound.png")}
            style={style.image}
          />
          <Text
            align={"left"}
            value={`De momento no has creado un Cv`}
            color={colors.neutro500}
            size={fonts.labelRegular.fontSize}
            weight={fonts.labelRegular.fontWeight}
          />
        </View>
      )}
    </View>
  );
};

Footer.propTypes = {};

export default Footer;
