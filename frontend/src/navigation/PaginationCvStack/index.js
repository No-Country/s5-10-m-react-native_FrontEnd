import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaginationCv from "../../screens/PaginationCv";
import RolPage from "../../components/PaginationCV/RolPage";
import DescriptionPage from "../../components/PaginationCV/DescriptionPage";
import CareerPage from "../../components/PaginationCV/CareerPage";
import EducationPage from "../../components/PaginationCV/EducationPage";
import PersonalPage from "../../components/PaginationCV/PersonalPage";
import SkillsPage from "../../components/PaginationCV/SkillsPage";
import EducationOne from '../../components/PaginationCV/EducationPage/educationSections/EducationView1'

const Stack = createNativeStackNavigator();

const PaginationCvStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PaginationCv"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="PaginationCv"
        component={PaginationCv}
        options={{ title: "Mi Cv" }}
      />
      <Stack.Screen
        name="RolPage"
        component={RolPage}
        options={{ title: "Rol/Puesto" }}
      />
      <Stack.Screen
        name="PersonalPage"
        component={PersonalPage}
        options={{ title: "Datos Personales" }}
      />
      <Stack.Screen
        name="DescriptionPage"
        component={DescriptionPage}
        options={{ title: "Sobre Mi" }}
      />
      <Stack.Screen
        name="CareerPage"
        component={CareerPage}
        options={{ title: "Experiencias/Proyectos" }}
      />
      <Stack.Screen
        name="EducationPage"
        component={EducationPage}
        options={{ title: "Educacion" }}
      />
      {/* secciones de Educacion */}
      <Stack.Screen
        name="EducacionFormulario"
        component={EducationOne}
        options={{title: 'Educacion Formulario'}}
      />
      {/* fin de secciones de educacion */}
      <Stack.Screen
        name="SkillsPage"
        component={SkillsPage}
        options={{ title: "Aptitudes" }}
      />
    </Stack.Navigator>
  );
};

export default PaginationCvStack;
