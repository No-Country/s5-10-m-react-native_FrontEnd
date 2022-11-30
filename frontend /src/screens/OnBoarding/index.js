import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Styles from "./style";
import Onboarding from "../../components/Onboarding/Onboarding";
//import EmailConfirmation from '../../components/EmailConfirmation/EmailConfimation'


const OnBoarding = () => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <Onboarding /> 
     {/*  <EmailConfirmation/>*/}
      <StatusBar style="auto" />
    </View>
  );
};

export default OnBoarding;
