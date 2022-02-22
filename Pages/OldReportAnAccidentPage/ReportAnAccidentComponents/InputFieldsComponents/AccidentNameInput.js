import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyles } from "../../../../Styles/ReportAnAccidentStyles";


const AccidentNameInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyles.container}>
            <Text style={SubmitStyles.text}> Report Name </Text>
                <TextInput 
                    name='Name'
                    placeholder=" Name of the report"
                    style={SubmitStyles.input}
                    onChangeText={(name) => {
                        handleInput('name', name)
                    }}
                />
        </View>
    )
}

export default AccidentNameInput