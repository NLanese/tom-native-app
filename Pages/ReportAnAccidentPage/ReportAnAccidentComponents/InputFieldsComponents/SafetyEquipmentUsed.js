import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";


const SafetyEquipmentUsedInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyle.container}>
            <Text style={SubmitStyle.text}> What safety equipment were you using? </Text>
                <TextInput 
                    name='safetyEquipmentUsed'
                    placeholder=" I was using the harness and seatbelt."
                    style={SubmitStyle.input}
                    onChangeText={(safetyEquipmentUsed) => {
                        handleInput('safetyEquipmentUsed', safetyEquipmentUsed)
                    }}
                />
        </View>
    )
}

export default SafetyEquipmentUsedInput