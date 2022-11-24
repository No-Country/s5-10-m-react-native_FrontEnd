import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, TouchableOpacity } from "react-native";
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
      <TouchableOpacity onPress={()=> props.navigation.navigate('UserProfile')}><Text>Perfil</Text></TouchableOpacity>
      <Footer data={[]} />
    </View>
  );
};

export default Home;
