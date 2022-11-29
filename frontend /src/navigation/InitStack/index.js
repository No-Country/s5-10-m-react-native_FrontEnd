import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeView from "../../screens/WelcomeView";
import Register from "../../screens/Register";
import Login from "../../screens/Login";

const Stack = createNativeStackNavigator();

const InitStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeView"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="WelcomeView" component={WelcomeView} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default InitStack;
