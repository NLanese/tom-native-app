import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyles } from "../../../../Styles/ReportAnAccidentStyles";


const SafetyEquipmentUsedInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyles.container}>
            <Text style={SubmitStyles.text}> What safety equipment were you using? </Text>
                <TextInput 
                    name='safetyEquipmentUsed'
                    placeholder=" I was using the harness and seatbelt."
                    style={SubmitStyles.input}
                    onChangeText={(safetyEquipmentUsed) => {
                        handleInput('safetyEquipmentUsed', safetyEquipmentUsed)
                    }}
                />
        </View>
    )
}

export default SafetyEquipmentUsedInput