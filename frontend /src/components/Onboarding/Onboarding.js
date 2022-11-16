import React from 'react';
import { View, ScrollView } from 'react-native';
import MyButton from '../Generics/MyButton/index'
import colors from "../../utils/colors";

import Carrusel from './Carussel/Carrusel';
import styles from "./style";


const OnBoarding = () => {

  return (
    <View style={styles.onBoardConatiner}>
      <ScrollView>
        <Carrusel />

        <View style={styles.but1}>
          <MyButton
            text="Registrarme"
            bgcolor={colors.primary300}
            color={colors.neutro100}
            width={"75%"}
            padding={12}
            onPress={() => console.log("create")}
          />
        </View>
        <View style={styles.but2}>
          <MyButton
            text="Ingresar"
            bgcolor={colors.neutro100}
            color={colors.primary300}
            width={"75%"}
            padding={12}
            onPress={() => console.log("home")}
          />
        </View>
      </ScrollView>
    </View>
  )

}

export default OnBoarding;


