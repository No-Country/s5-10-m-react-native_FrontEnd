import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import style from './style';
import colors from '../../../utils/colors';
import MyButton from '../../Generics/MyButton';
import { CheckBox } from '@rneui/themed';

function StackTech(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);

    return (
        <View>
            <View >
               <Text style={{fontSize:18, marginTop:10, marginBottom:10, textAlign:'center'}}> Por favor, seleccionar tu especialidad o stack.</Text>
            </View>
            <View>
                <CheckBox
                    title="Jira"
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                  
                />
                <CheckBox

                    title="Trello"
                    checked={check2}
                    onPress={() => setCheck2(!check2)}
                />
                <CheckBox

                    title="Notion"
                    checked={check3}
                    onPress={() => setCheck3(!check3)}
                />
                <CheckBox

                    title="Otro"
                    checked={check4}
                    onPress={() => setCheck4(!check4)}
                />
                <CheckBox

                    title="Google Sheets"
                    checked={check5}
                    onPress={() => setCheck5(!check5)}
                />
                <CheckBox

                    title="Asana"
                    checked={check6}
                    onPress={() => setCheck6(!check6)}
                />
                <CheckBox

                    title="ClickOn"
                    checked={check7}
                    onPress={() => setCheck7(!check7)}
                  
                />

            </View>
            <View style={{marginLeft:25, marginBottom:46}}>
               <Text style={{fontSize:15, marginTop:20, marginBottom:10, textAlign:'left'}}> Ingresar tu especialidad o stack</Text>
               <TextInput placeholder='Ej: Teach Lead' style={{fontSize:18, marginTop:10, marginBottom:10, paddingLeft:5,textAlign:'left', border:1, borderWidth:1, borderColor:'#605A72', width:348, height:56, borderRadius:5}}/>
            </View>
            <View style={style.buttonContainer}>
                <MyButton
                    color={colors.neutro100}
                    bgcolor={colors.primary400}
                    onPress={() => props.navigation.navigate("PersonalPage")}
                    text={"Confirmar"}
                    width={"80%"}
                    padding={12}
                />
            </View>
        </View>
    )
}

export default StackTech
