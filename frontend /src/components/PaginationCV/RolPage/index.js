import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../../Generics/MyText";
import MyButton from "../../Generics/MyButton";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import style from "./style";
import { roles } from "./roles";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const RolPage = (props) => {
  const [selectRole, setSelectRole] = useState("Rol/Puesto");
  const [otherRol, setOtherRol] = useState("......");

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text
          value={selectRole != "Otro" ? selectRole : otherRol}
          color={colors.primary500}
          size={fonts.h1.fontSize}
        />
        {selectRole == "Rol/Puesto" && (
          <Text
            value={"Por favor selecciona el rol que mejor te describa."}
            color={colors.neutro600}
            size={fonts.labelRegular.fontSize}
            weight={"Regular"}
            align={"left"}
            maxWidth={"80%"}
          />
        )}
        {selectRole == "Otro" && (
          <TextInput
            style={style.input}
            keyboardType={"default"}
            onChangeText={(event) => {
              setOtherRol(event);
            }}
            placeholder={"Ingresa tu rol o puesto"}
            placeholderTextColor={colors.neutro500}
          />
        )}
      </View>

      <FlatList
        numColumns={3}
        data={roles}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                item.rol == selectRole ? style.rolViewSelected : style.rolView
              }
              onPress={() => setSelectRole(item.rol)}
            >
              {item.rol == selectRole && (
                <Icon
                  name="checkbox-marked-circle"
                  size={20}
                  color={colors.primary500}
                  style={style.icon}
                />
              )}
              <View>
                <Text
                  value={item.rol}
                  color={
                    item.rol == selectRole
                      ? colors.primary300
                      : colors.neutro600
                  }
                  size={fonts.labelRegular.fontSize}
                  weight={"Regular"}
                  align={"center"}
                  maxWidth={"80%"}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View style={style.buttonContainer}>
        <MyButton
          color={colors.neutro100}
          bgcolor={colors.primary400}
          onPress={() => props.navigation.navigate("StackPage")}
          text={'Siguiente'}
          width={"80%"}
          padding={12}
        />
      </View>
    </View>
  );
};

RolPage.propTypes = {};

export default RolPage;
