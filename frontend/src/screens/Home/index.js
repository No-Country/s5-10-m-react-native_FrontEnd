import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Styles from "./style";
import Header from "../../components/Home/Header";
import Body from "../../components/Home/Body";
import Footer from "../../components/Home/Footer";


const Home = (props) => {
  const styles = Styles;

  return (
    <View>
      <Header fullName={"Juan Perez"} />
      <Body navigation={props.navigation} />
      <Footer data={[]} />
    </View>
  );
};

export default Home;
