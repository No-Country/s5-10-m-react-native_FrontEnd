import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Styles from "./styles";
import { formacion } from './formacion';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import MyText from "../../../Generics/MyText";
import MyButton from "../../../Generics/MyButton";
import DatePicker from 'react-native-date-picker'
import { Feather } from '@expo/vector-icons';

import colors from "../../../../utils/colors";
import fonts from "../../../../utils/fonts";

import { Formik } from 'formik';


const Education = (props) => {
  const [selectFormacion, setSelectFormacion] = useState();
  const [desde, setDesde] = useState('DD/MM/YY');
  const [hasta, setHasta] = useState("DD/MM/YY");
  const [guardar, setGuardar] = useState('Guardar')
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date())
  const styles = Styles;

  const agregarEd = () => {
    setGuardar('AgregarEducacion');
    props.navigation.navigate('SkillsPage');
  }

  return (

    <View style={Styles.container}>
      <Text>Tipo de Formación</Text>
      <View>
        <Formik
          initialValues={{ fomacion: '', }}
        // onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (

            <>
              <FlatList
                numColumns={2}
                data={formacion}
                renderItem={({ item }) => {
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
              <Text>Periodo Formacion</Text>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ width: '50%' }}>
                  <Text style={styles.formLabelDate}>Desde</Text>
                  <Entypo name="calendar" size={20} color={colors.primary300}
                    style={{ position: 'absolute', marginTop: 20, marginLeft: '80%', zIndex: 10 }}
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
                    onConfirm={(date) => {
                      setOpen(false)
                      setDesde(date)
                    }}
                    onCancel={() => {
                      setOpen(false)
                    }}
                  />
                </View>
                <View style={{ width: '50%' }}>
                  <Text style={styles.formLabelDate}>Hasta</Text>
                  <Entypo name="calendar" size={20} color={colors.primary300}
                    style={{ position: 'absolute', marginTop: 20, marginLeft: '80%', zIndex: 10 }}
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
                    onConfirm={(date) => {
                      setOpen(false)
                      setHasta(date)
                    }}
                    onCancel={() => {
                      setOpen(false)
                    }}
                  />
                </View>
              </View>
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
                  multiline={true}
                  numberOfLine={10}
                  placeholder={'Ingresa Texto'}
                  style={styles.textArea}
                />
              </View>
              <View style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton
                  icon={<Feather name="plus-circle" size={24} color="white" />}
                  onPress={() => agregarEd()}
                  icons={false}
                  text={guardar}
                  bgcolor={colors.primary500}
                  color={colors.neutro100}
                  style={Styles.btn}
                  padding={12}
                  styled={{ marginTop: 70, width: '100%' }}
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

export default Education;
