import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Styles from "./style";

const Register = () => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <Text>Pagina de Register</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Register;
