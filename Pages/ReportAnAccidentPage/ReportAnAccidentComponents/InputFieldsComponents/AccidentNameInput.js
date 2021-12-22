import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";


const AccidentNameInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyle.container}>
            <TextInput 
                name='Name'
                placeholder="Name of the report"
                style={SubmitStyle.input}
                onChangeText={(name) => {
                    handleInput('name', name)
                }}
            />
        </View>
    )
}

export default AccidentNameInput