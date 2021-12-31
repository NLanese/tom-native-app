import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyles } from "../../../../Styles/ReportAnAccidentStyles";


const AccidentLocation = ({ handleInput }) => {


    return (
        <View style={SubmitStyles.container}>
            <Text style={SubmitStyles.text}> Location of Accident </Text>
                <TextInput 
                    name='Location'
                    placeholder=" Location of the Accident"
                    style={SubmitStyles.input}
                    onChangeText={(location) => {
                        handleInput('location', location)
                    }}
                />
        </View>
    )
}

export default AccidentLocation