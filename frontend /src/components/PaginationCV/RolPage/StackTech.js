import React from 'react'
import { Button } from 'react-native'

function StackTech() {
    return (
        <View>
            <View style={style.buttonContainer}>
                <Button
                    color={colors.neutro100}
                    bgcolor={colors.primary400}
                    onPress={() => navigate("PersonalPage")}
                    text={"Confirmar"}
                    width={"80%"}
                    padding={12}
                />
            </View>
        </View>
    )
}

export default StackTech
