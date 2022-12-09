import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaginationCv from "../../screens/PaginationCv/index";
import RolPage from "../../components/PaginationCV/RolPage/index";
import DescriptionPage from "../../components/PaginationCV/DescriptionPage/index";
import CareerPage from "../../components/PaginationCV/CareerPage/index";
import EducationPage from "../../components/PaginationCV/EducationPage/index";
import PersonalPage from "../../components/PaginationCV/PersonalPage/index";
import SkillsPage from "../../components/PaginationCV/SkillsPage/index";
import Education from "../../components/PaginationCV/EducationPage/educationSections/EducationView1";
import CareerForm from "../../components/PaginationCV/CareerPage/CareerForm/careerForm";
import AddSkill from "../../components/PaginationCV/SkillsPage/Skill/AddSkill";
import SkillTime from "../../components/PaginationCV/SkillsPage/Skill/SkillTime";
import SkillsList from "../../components/PaginationCV/SkillsPage/Skill/SkillList";
import StackTech from "../../components/PaginationCV/RolPage/StackTech";

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
        name="StackPage"
        component={StackTech}
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
        name="CareerForm"
        component={CareerForm}
        options={{ title: "Experiencias/Proyectos" }}
      />
      <Stack.Screen
        name="EducationPage"
        component={EducationPage}
        options={{ title: "Educacion" }}
      />
        <Stack.Screen
        name="Education"
        component={Education}
        options={{ title: "Educacion" }}
      />
      <Stack.Screen
        name="SkillsPage"
        component={SkillsPage}
        options={{ title: "Herramientas y habilidades" }}
      />
         <Stack.Screen
        name="AddSkill"
        component={AddSkill}
        options={{ title: "Herramientas y habilidades" }}
      />
        <Stack.Screen
        name="SkillTime"
        component={SkillTime}
        options={{ title: "Herramientas y habilidades" }}
      />
        <Stack.Screen
        name="SkillList"
        component={SkillsList}
        options={{ title: "Herramientas y habilidades" }}
      />
    </Stack.Navigator>
  );
};

export default PaginationCvStack;