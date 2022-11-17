import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import InitStack from "../InitStack";
import PaginationCvStack from "../PaginationCvStack";

//importing views to styles
import Login from '../../screens/Login';
import Welcome from '../../screens/WelcomeView';
import Register from '../../screens/Register';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="InitStack" component={InitStack} />
      <Stack.Screen
        name="PaginationCvStack"
        component={PaginationCvStack}
        options={{ title: "Mi Cv", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
