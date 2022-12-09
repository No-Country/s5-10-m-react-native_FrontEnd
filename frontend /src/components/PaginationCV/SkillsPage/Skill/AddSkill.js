import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Styles from "./style";
import {herramientas} from './herramientas';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import MyText from "../../../Generics/MyText/index";
import MyButton from "../../../Generics/MyButton/index";
import { Feather } from '@expo/vector-icons';

import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

import { Formik } from 'formik';

const AddSkill = (props) => {
    const [selectHerramientas, setSelectHerramientas] = useState();
    const [guardar, setGuardar] = useState('Guardar');
    const [time, setTime] = useState(false)
    const styles = Styles;
    
    const handleGuardar = () => {
        setTimeout(() => {
            setTime(true)
        }, 3000)
        if (!time) {
            setGuardar('Habilidad Guardada.')
            setTimeout(() => {
                props.navigation.navigate('skillsManejoTiempo')
            }, 1000)
        }
        props.navigation.navigate('SkillTime')
    }

  return (
    
    <View style={Styles.container}>
      <View>
      <Formik
        initialValues={{ herramientas: '',}}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            
            <>
        <Text style={[ fonts.titleSmall, styles.h2 ]}>Agragar herramienta o habilidad</Text>
        <View>
              <Text style={styles.formLabel}>Herramienta o habilidad</Text>
              <TextInput
                onChangeText={handleChange('habilidad')}
                onBlur={handleBlur('habilidad')}
                value={values.habilidad}
                placeholder={'Ej. GitHub'}
                style={styles.formInput}
              />
        </View>
        <FlatList
            numColumns={3}
            data={herramientas}
            renderItem={( {item} ) => {
            // console.log(item)
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  item.herramientas == selectHerramientas ? Styles.herramientasViewSelected : Styles.herramientasView,
                  Styles.btn
                ]}
                onPress={() => setSelectHerramientas(item.herramientas)}
              >
                {item.herramientas == selectHerramientas && (
                  <Icon
                    name="checkbox-marked-circle"
                    size={20}
                    color={colors.neutro100}
                    style={styles.icon}
                  />
                )}
                <View>
                  <MyText
                    onChangeText={handleChange('formacion')}
                    onBlur={handleBlur('formacion')}
                    value={item.herramientas}
                    color={
                      item.herramientas == selectHerramientas
                        ? colors.neutro100
                        : colors.neutro600
                    }
                    size={fonts.labelRegular.fontSize}
                    weight={"Regular"}
                    styled={{
                        maxWidth: '100%',
                        paddingHorizontal: 10
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />

            <View style={{display: 'flex', justifyContent: 'flex-end', height: '57%'}}>
            <MyButton
             icon={<Feather name="plus-circle" size={24} color="white" />}
                onPress={() => handleGuardar()} 
                icons = {false}
                text={guardar} 
                bgcolor={colors.primary500} 
                color={colors.neutro100}
                style={Styles.btn}
                padding={12}
                styled={{marginTop: 70, width: '100%'}}
            />
            </View>
            </>
        )}
      </Formik>
      </View>
      <StatusBar style="auto" />
    </View>
 
  );
};

export default AddSkill;

