import React from 'react';
import { View, ScrollView } from 'react-native';

import colors from "../../utils/colors";

import Carrusel from './Carussel/Carrusel';
import styles from "./style";


const OnBoarding = () => {

  return (
    <View style={styles.onBoardConatiner}>
      <View>
        <Carrusel />
      </View>
    </View>
  )

}

export default OnBoarding;


