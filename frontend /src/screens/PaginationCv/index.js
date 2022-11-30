import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Styles from "./style";

const PaginationCv = () => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <Text>Pagina de PaginationCv</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default PaginationCv;
