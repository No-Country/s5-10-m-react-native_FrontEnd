import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Styles from "./styles";

const Register = () => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <Text>Pagina de Educacion 2</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Register;
