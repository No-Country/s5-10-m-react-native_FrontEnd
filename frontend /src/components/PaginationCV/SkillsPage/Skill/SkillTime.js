import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import Styles from "./style";
import { nivel, tiempo} from './herramientas';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import MyText from "../../../Generics/MyText";
import MyButton from "../../../Generics/MyButton";
import { Feather } from '@expo/vector-icons';

import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

import { Formik } from 'formik';


const SkillTime = (props) => {
    const [selectNivel,setSelectNivel] = useState();
    const [selectTiempo, setSelectTiempo] = useState();
    const [guardar, setGuardar] = useState('Guardar');
    const [time, setTime] = useState(false)
    const styles = Styles;

// HIce esto “setTimeout” para agregar una animación de loading al botón y después navegar a la sgte sección
    const handleNivelTime = () => {
        setTimeout(() => {
            setTime(true)
        }, 3000)
        if (!time) {
            setGuardar('Habilidad Guardada.')
            setTimeout(() => {
                props.navigation.navigate('SkillList');
            }, 1700)
        }
    }

  return (
    
    <View style={Styles.container}>
      <View>
      <Formik
        initialValues={{ nivel: '', tiempo: ''}}
        // onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            
            <>
        <Text style={[ fonts.titleSmall, styles.h2 ]}>Agragar herramienta o habilidad</Text>
        <View>
              <Text style={styles.formLabel}>Herramienta o habilidad</Text>
              <TextInput
                onChangeText={handleChange('habilidad')}
                onBlur={handleBlur('habilidad')}
                value={values.nivel}
                placeholder={'Ej. GitHub'}
                style={styles.formInput}
              />
        </View>
        <View>
        <Text style={[ fonts.titleSmall, styles.h2 ]}>Nivel de manejo de herramienta habilidad</Text>
        <FlatList
            numColumns={3}
            data={nivel}
            renderItem={( {item} ) => {
            // console.log(item)
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  item.nivel == selectNivel ? Styles.herramientasViewSelected : Styles.herramientasView,
                  Styles.btn
                ]}
                onPress={() => setSelectNivel(item.nivel)}
              >
                {item.nivel == selectNivel && (
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
                    value={item.nivel}
                    color={
                      item.nivel == selectNivel
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
        </View>
        <View>
        <Text style={[ fonts.titleSmall, styles.h2 ]}>Nivel de manejo de herramienta habilidad</Text>
        <FlatList
            numColumns={3}
            data={tiempo}
            renderItem={( {item} ) => {
            // console.log(item)
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  item.tiempo == selectTiempo ? Styles.herramientasViewSelected : Styles.herramientasView,
                  Styles.btn
                ]}
                onPress={() => setSelectTiempo(item.tiempo)}
              >
                {item.tiempo == selectTiempo && (
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
                    value={item.tiempo}
                    color={
                      item.tiempo == selectTiempo
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
        </View>

            <View style={{display: 'flex', justifyContent: 'flex-end', height: '55%'}}>
            <MyButton
             icon={<Feather name="plus-circle" size={24} color="white" />}
                onPress={() => handleNivelTime()} 
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

export default SkillTime;
