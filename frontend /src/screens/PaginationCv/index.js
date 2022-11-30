import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import Styles from "./style";
import { dataSections } from "../../components/PaginationCV/Sections/dataSections";
import ModelSections from "../../components/PaginationCV/Sections/ModeSections/ModelSections";

const PaginationCv = ({ navigation }) => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <ModelSections navigation={navigation} />
    </View>
  );
};

export default PaginationCv;
