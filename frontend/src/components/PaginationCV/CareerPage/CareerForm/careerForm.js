import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Styles from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import MyText from "../../../Generics/MyText";
import MyButton from "../../../Generics/MyButton";
import DatePicker from 'react-native-date-picker'

import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

import { Formik } from 'formik';


const CareerForm = () => {
    const [selectFormacion, setSelectFormacion] = useState();
    const [desde, setDesde] = useState('DD/MM/YY');
    const [hasta, setHasta] = useState("DD/MM/YY");
    const [guardar, setGuardar] = useState('Guardar')
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date())
    const styles = Styles;

  return (
    <ScrollView>
    <View style={Styles.container}>
      <Text>Organizacion o Empresa</Text>
      <View>
      <Formik
        initialValues={{ fomacion: '',}}
        // onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            
        <>
         <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('institucion')}
                onBlur={handleBlur('institucion')}
                value={values.institucion}
                placeholder={'Ej. Globant'}
                style={styles.formInput}
              />
        </View>
        <Text>Puesto o rol</Text>
        <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('rol')}
                onBlur={handleBlur('rol')}
                value={values.rol}
                placeholder={'Ej. Front end developer'}
                style={styles.formInput}
              />
        </View>
        <Text>Periodo de Trabajo</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
                <Text style={styles.formLabelDate}>Desde</Text>
                <Entypo name="calendar" size={20} color={colors.primary300} 
                    style={{position: 'absolute', marginTop: 20, marginLeft: '80%', zIndex: 10}}
                    // onPress={() => setOpen(true)}
                />
                <TextInput
                    onChangeText={handleChange('Desde')}
                    onBlur={handleBlur('Desde')}
                    value={values.desde}
                    placeholder={desde}
                    style={styles.formDate}
                />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm= {(date) => {
                        setOpen(false)
                        setDesde(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <View style={{width: '50%'}}>
                <Text style={styles.formLabelDate}>Hasta</Text>
                <Entypo name="calendar" size={20} color={colors.primary300} 
                    style={{position: 'absolute', marginTop: 20, marginLeft: '80%', zIndex: 10}}
                    // onPress={() => setOpen(true)}
                />
                <TextInput
                    onChangeText={handleChange('hasta')}
                    onBlur={handleBlur('hasta')}
                    value={values.hasta}
                    placeholder={hasta}
                    style={styles.formDate}
                />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm= {(date) => {
                        setOpen(false)
                        setHasta(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
        </View>
       
            <Text>Describe las tareas realizadas</Text>
            <View>
              <Text style={styles.formLabel}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('descripcion')}
                onBlur={handleBlur('descripcion')}
                value={values.descripcion}
                multiline={true}
                numberOfLine={10}
                placeholder={'Ingresa Texto'}
                style={styles.textArea}
              />
            </View>
            <View style={{display: 'flex', justifyContent: 'center'}}>
            <MyButton
                onPress={() => setGuardar('Guardado')} 
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
    </ScrollView>
  );
};

export default CareerForm;
