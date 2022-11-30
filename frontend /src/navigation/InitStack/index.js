import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeView from "../../screens/WelcomeView";
import Register from "../../screens/Register";
import Login from "../../screens/Login";
import  OnBoarding from '../../screens/OnBoarding';

const Stack = createNativeStackNavigator();

const InitStack = ({navigation}) => {
  console.log(navigation)
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{ headerShown: true}}
    >

      <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ title: "Perfil", headerShown: false }} />
      <Stack.Screen name="WelcomeView" component={WelcomeView} options={{ title: "Perfil", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{  headerShown: true }}  />
      <Stack.Screen name="Register" component={Register} options={{  headerShown: true}}  />
    </Stack.Navigator>
  );
};

export default InitStack;
 