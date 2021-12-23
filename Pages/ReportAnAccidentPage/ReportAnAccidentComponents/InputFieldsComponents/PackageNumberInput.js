import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyle } from "../../../../Styles/ReportAnAccidentStyles";

/* NEED TO CHANGE TO ONLY ACCEPT INT INPUT */
const PackageNumberInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyle.container}>
            <Text style={SubmitStyle.text}> How many packages were you delivering? </Text>
                <TextInput 
                    name='PackageNumber'
                    placeholder=" Number of packages carried"
                    style={SubmitStyle.input}
                    onChangeText={(packageNumber) => {
                        handleInput('numberPackageCarried', packageNumber)
                    }}
                />
        </View>
    )
}

export default PackageNumberInput