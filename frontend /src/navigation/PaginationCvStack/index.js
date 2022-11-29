import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PaginationCv from "../../screens/PaginationCv";

const Stack = createNativeStackNavigator();

const PaginationCvStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PaginationCv"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PaginationCv" component={PaginationCv} />
    </Stack.Navigator>
  );
};

export default PaginationCvStack;
