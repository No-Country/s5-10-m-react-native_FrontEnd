import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Styles from "./style";
import Header from "../../components/Home/Header";
import Body from "../../components/Home/Body";
import Footer from "../../components/Home/Footer";
// import Button from "../../components/Generics/MyButton";
// import Text from "../../components/Generics/MyText";
// import fonts from "../../utils/fonts";

const Home = () => {
  const styles = Styles;

  return (
    <View>
      <Header fullName={"Juan Perez"} />
      <Body />
      <Footer data={[]} />
    </View>
  );
};

export default Home;
