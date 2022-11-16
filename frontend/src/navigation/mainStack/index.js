import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import InitStack from "../InitStack";
import PaginationCvStack from "../PaginationCvStack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="InitStack" component={InitStack} />
      <Stack.Screen name="PaginationCvStack" component={PaginationCvStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
