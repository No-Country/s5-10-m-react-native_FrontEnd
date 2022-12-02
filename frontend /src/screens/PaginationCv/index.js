import React from "react";
import { View } from "react-native";
import Styles from "./style";
import ModelSections from "../../components/PaginationCV/Sections/ModeSections/ModelSections";
import colors from "../../utils/colors";
import MyButton from "../../components/Generics/MyButton";
import { MaterialCommunityIcons } from '@expo/vector-icons'


const PaginationCv = ({ navigation }) => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <ModelSections navigation={navigation} />
      <View style={styles.elegird}>
        <MyButton
        icon={<MaterialCommunityIcons name="brush" size={24} color="blue" />}
          text="Elegir diseño"
          bgcolor={colors.neutro100}
          color={colors.blue}
          width={"85%"}
          padding={12}
          onPress={() =>console.log("cambiar desing")}
        />
      </View>
    </View>
  );
};

export default PaginationCv;
