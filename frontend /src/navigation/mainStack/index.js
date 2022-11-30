import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import InitStack from "../InitStack";
import PaginationCvStack from "../PaginationCvStack";
import Profile from "../../screens/Profile/Profile";


const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="InitStack"
      screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="InitStack" component={InitStack} />
      <Stack.Screen name="UserProfile" component={Profile} options={{ title: "Perfil", headerShown: true }} />

      <Stack.Screen
        name="PaginationCvStack"
        component={PaginationCvStack}
        options={{ title: "Mi Cv", headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default MainStack;
