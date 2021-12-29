import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";


const AccidentLocation = ({ handleInput }) => {


    return (
        <View style={SubmitStyle.container}>
            <Text style={SubmitStyle.text}> Location of Accident </Text>
                <TextInput 
                    name='Location'
                    placeholder=" Location of the Accident"
                    style={SubmitStyle.input}
                    onChangeText={(location) => {
                        handleInput('location', location)
                    }}
                />
        </View>
    )
}

export default AccidentLocation