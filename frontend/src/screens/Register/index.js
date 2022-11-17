import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Button } from "react-native";
import Styles from "./style";
import { Formik } from 'formik';

// importing buttons and text from generics
import MyButton from "../../components/Generics/MyButton";
import MyText from '../../components/Generics/MyText';
// importing colors and fonts from utils
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const Register = () => {
  const styles = Styles;
  return (
    <View style={styles.container}>
      <View>
        <MyText 
          value={'Crear cuenta con mail'} 
          size={24} 
          color={colors.neutro700}
          style={[fonts.h1, colors.neutro700]}
        >Crear cuenta con mail</MyText>
      </View>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View>
              <Text style={styles.formLabel}>Nombre y Apellido</Text>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder={'Nombre y Apellido'}
                style={styles.formInput}
              />
            </View>
            <View>
            <Text style={styles.formLabel}>Correo electronico</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder={'Ej: juan@mail.com'}
                style={styles.formInput}
              />
            </View>
            <View>
              <Text style={styles.formLabelContrasena}>Contraseña</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.formInput}
                placeholder={'**********'}
              />
            </View>
            <View style={styles.btnView}>
              <MyButton 
                onPress={handleSubmit} 
                text={"Crear cuenta con mail"} 
                bgcolor={colors.primary500} 
                color={colors.neutro100}
                style={styles.btn}
              />
            </View>
          </View>
        )}
      </Formik>
    <StatusBar style="auto" />
  </View>
  );
};

export default Register;
