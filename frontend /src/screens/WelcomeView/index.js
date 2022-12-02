import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Styles from "./style";

// importing buttons and text from generics
import MyButton from "../../components/Generics/MyButton";
import MyText from '../../components/Generics/MyText';
// importing colors and fonts from utils
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';


const WelcomeView = () => {
  const styles = Styles;
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <MyText
        value={'Bienvenid@ a MyCV'}
        size={24}
        color={colors.neutro700}
        style={[fonts.h1, colors.neutro700]}

      />

      <Image source={require('../../../assets/Welcome.png')} />

      <View style={styles.btnContainer}>
        <MyButton
          text={'Crear cuenta con mail'}
          bgcolor={colors.primary500}
          color={colors.neutro100}
          width={"85%"}
          padding={12}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      {/* <View style={styles.mx_10}>
        <MyButton
          text={'Ingresar con Google'}
          borderColor={colors.google}
          color={colors.google}
        />
      </View>
      <View style={styles.mx_10}>
        <MyButton
          text={'Ingresar con Linkedin'}
          border={colors.linkedin}
          color={colors.linkedin}
        />
      </View> */}

      <TouchableOpacity onPress={() => navigation.navigate('Login')} >
        <MyText
          value={'Tenes cuenta? Ingresar'}
          color={colors.blue}
          size={fonts.labelRegular.fontSize}
          weight={fonts.labelRegular.fontWeight}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default WelcomeView;
