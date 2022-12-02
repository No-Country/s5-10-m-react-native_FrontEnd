import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, TouchableOpacity } from "react-native";
import Text from "../../../Generics/MyText/index";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { dataSections } from "../dataSections";
import style from "./style";
import fonts from "../../../../utils/fonts";
import colors from "../../../../utils/colors";



const ModelSections = ({ navigation }) => {
  return (
    <FlatList
      data={dataSections}
      renderItem={({ item }) => {
        return (
          <View style={style.section}>
            <Text
              value={item.title}
              size={fonts.h1.fontSize}
              weight={fonts.h1.fontWeight}
              color={colors.neutro600}
            />
            <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
              <Icon name="chevron-right" size={28} color={colors.neutro600} />
            </TouchableOpacity>
          
          </View>
        );
      }}
    />
  );
};

ModelSections.propTypes = {};

export default ModelSections;
