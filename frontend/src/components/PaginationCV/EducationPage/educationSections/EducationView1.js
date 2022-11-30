import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import Styles from "./styles";
import {formacion} from './formacion';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import MyText from "../../../Generics/MyText";

import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

import { Formik } from 'formik';

const Register = () => {
    const [selectFormacion, setSelectFormacion] = useState();
    const styles = Styles;

  return (
    <View style={Styles.container}>
      <Text>Tipo de Formación</Text>
      <View>
      <Formik
        initialValues={{ fomacion: '',}}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            
            <>
      <FlatList
            numColumns={2}
            data={formacion}
            renderItem={( {item} ) => {
            console.log(item)
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={[
                  item.formacion == selectFormacion ? Styles.formacionViewSelected : Styles.formacionView,
                  Styles.btn
                ]}
                onPress={() => setSelectFormacion(item.formacion)}
              >
                {item.formacion == selectFormacion && (
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
                    value={item.formacion}
                    color={
                      item.formacion == selectFormacion
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
        <Text>Lugar/Institucion/Empresa</Text>
         <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('institucion')}
                onBlur={handleBlur('institucion')}
                value={values.institucion}
                placeholder={'Ej. Platzi'}
                style={styles.formInput}
              />
            </View>
            {/* Periodo de formacion aca */}
            <Text>Titulo de la Formacion</Text>
         <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('titulo')}
                onBlur={handleBlur('titulo')}
                value={values.titulo}
                placeholder={'Ej. Fullstack developer'}
                style={styles.formInput}
              />
            </View>
            <Text>Describe lo que aprendiste en tu formacion</Text>
            <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('descripcion')}
                onBlur={handleBlur('descripcion')}
                value={values.descripcion}
                placeholder={'Ingresa Texto'}
                style={styles.formInput}
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

export default Register;
