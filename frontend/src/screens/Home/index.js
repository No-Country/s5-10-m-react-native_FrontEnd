import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Styles from "./style";
// import Button from "../../components/Generics/MyButton";
// import Text from "../../components/Generics/MyText";
// import fonts from "../../utils/fonts";

const Home = () => {
  const styles = Styles;

  return (
    <View style={styles.container}>
      <Text>Pagina de Home</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
