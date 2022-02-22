import React from "react";
import { View, Text, TextInput } from 'react-native'
import { SubmitStyles } from "../../../../Styles/ReportAnAccidentStyles";

/* NEED TO CHANGE TO ONLY ACCEPT INT INPUT */
const PackageNumberInput = ({ handleInput }) => {


    return (
        <View style={SubmitStyles.container}>
            <Text style={SubmitStyles.text}> How many packages were you delivering? </Text>
                <TextInput 
                    name='PackageNumber'
                    placeholder=" Number of packages carried"
                    style={SubmitStyles.input}
                    onChangeText={(packageNumber) => {
                        handleInput('numberPackageCarried', packageNumber)
                    }}
                />
        </View>
    )
}

export default PackageNumberInput