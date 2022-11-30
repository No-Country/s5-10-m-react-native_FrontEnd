import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, ScrollView } from "react-native";
import Text from "../../Generics/MyText";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Button from "../../Generics/MyButton";
import AnimatedInput from "react-native-animated-input";
import style from "./style";
import colors from "../../../utils/colors";
import fonts from "../../../utils/fonts";
import { useNavigation } from "@react-navigation/native";

const PersonalPage = (props) => {
  const [form, setform] = useState({
    pais: "",
    ciudad: "",
    telefono: "",
    correo: "",
    linkedIn: "",
    github: "",
    portfolio: "",
  });
  const [selectInput, setSelectInput] = useState();
  const { navigate } = useNavigation();
  const handleChange = (event) => {
    switch (selectInput) {
      case "pais":
        setform({ ...form, pais: event });
        break;
      case "ciudad":
        setform({ ...form, ciudad: event });
        break;
      case "telefono":
        setform({ ...form, telefono: event });
        break;
      case "correo":
        setform({ ...form, correo: event });
        break;
      case "linkedIn":
        setform({ ...form, linkedIn: event });
        break;
      case "github":
        setform({ ...form, github: event });
        break;
      case "portfolio":
        setform({ ...form, portfolio: event });
        break;

      default:
        break;
    }
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#fff" }}>
      <View>
        <View style={style.container}>
          <Text
            value={"Lugar de residencia"}
            size={fonts.labelSemiBold.fontSize}
            color={colors.primary500}
            weight={fonts.labelSemiBold.fontWeight}
          />
          <View
            style={
              selectInput == "pais"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Pais"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.pais}
              onFocus={() => {
                setSelectInput("pais");
              }}
            />
          </View>
          <View
            style={
              selectInput == "ciudad"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Ciudad"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.ciudad}
              onFocus={() => {
                setSelectInput("ciudad");
              }}
            />
          </View>
        </View>
        <View style={style.container}>
          <Text
            value={"Datos de contacto"}
            size={fonts.labelSemiBold.fontSize}
            color={colors.primary500}
            weight={fonts.labelSemiBold.fontWeight}
          />
          <View
            style={
              selectInput == "telefono"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Telefono"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.telefono}
              onFocus={() => {
                setSelectInput("telefono");
              }}
            />
          </View>
          <View
            style={
              selectInput == "correo"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Correo"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.correo}
              onFocus={() => {
                setSelectInput("correo");
              }}
            />
          </View>
          <View
            style={
              selectInput == "linkedIn"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="LinkedIn"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.linkedIn}
              onFocus={() => {
                setSelectInput("linkedIn");
              }}
            />
          </View>
          <View
            style={
              selectInput == "github"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Github"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.github}
              onFocus={() => {
                setSelectInput("github");
              }}
            />
          </View>
          <View
            style={
              selectInput == "portfolio"
                ? style.inputcontainerFocus
                : style.inputcontainer
            }
          >
            <AnimatedInput
              placeholder="Portfolio"
              errorText="Error"
              styleLabel={style.label}
              styleBodyContent={{ borderBottomColor: "#fff" }}
              onChangeText={handleChange}
              value={form.portfolio}
              onFocus={() => {
                setSelectInput("portfolio");
              }}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <Button
            color={colors.neutro100}
            bgcolor={colors.primary400}
            onPress={() => navigate("DescriptionPage")}
            text={"Siguiente"}
            width={"80%"}
            padding={12}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

PersonalPage.propTypes = {};

export default PersonalPage;