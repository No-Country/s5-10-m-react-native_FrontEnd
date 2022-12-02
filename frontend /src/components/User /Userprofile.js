import React from 'react'
import {Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import Styles from './style';
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

function Userprofile({ props }) {
    return (
            <View style={Styles.listConatiner}>
                <TouchableOpacity style={Styles.section}>
                  <FontAwesome5 name="user-alt" size={24} color={colors.neutro700} />  
                   <Text
                        color={colors.neutro700}
                        size={fonts.h1.fontSize}
                        weight={fonts.h1.fontWeight}
                        style={Styles.title}
                    >
                        Nombre y Apellido
                        </Text> 
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.neutro700} onPress={() => navigation.navigate('')}/>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.section}>
                   <MaterialIcons name="email" size={24} color={colors.neutro700} />
                     <Text
                        color={colors.neutro700}
                        size={fonts.title.fontSize}
                        weight={fonts.title.fontWeight}
                        style={Styles.title}
                    >
                       
                        Correo electronico
                      </Text> 
                       <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.neutro700} onPress={() => navigation.navigate('')}/>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.section}>
                       <FontAwesome5 name="lock" size={24} color={colors.neutro700} />
                    <Text
                        color={colors.neutro700}
                        size={fonts.title.fontSize}
                        weight={fonts.title.fontWeight}
                        style={Styles.title2}
                    >
                     
                        Contraseña
                     </Text>   
                     <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.neutro700}  onPress={() => navigation.navigate('')}/>
                </TouchableOpacity>

                {/* <TouchableOpacity style={Styles.section}>
                   <MaterialIcons name="nightlight-round" size={24} color={colors.neutro700} />
                    <Text
                        color={colors.neutro700}
                        size={fonts.title.fontSize}
                        weight={fonts.title.fontWeight}
                        style={Styles.title4}
                    >
                          Modo Nocturno
                    </Text>
                   
                </TouchableOpacity> */}

                <TouchableOpacity style={Styles.section2}>
                    <Text
                        color={colors.google}
                        size={fonts.title.fontSize}
                        weight={fonts.title.fontWeight}
                        style={Styles.title3}
                    >     
                     Salir 
                     </Text>
            
                     <MaterialIcons name="logout" size={24} color={colors.google} onPress={() => props.navigation.navigate('OnBoarding')}/> 
                </TouchableOpacity>
            </View>

      
    )
}

export default Userprofile;
