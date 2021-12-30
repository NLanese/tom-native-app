import React from "react";
import { View, Text, Button } from 'react-native'
import { PoliceContactedStyle } from "../../Styles/ReportAnAccidentStyles";

const PoliceContacted = () => {

    return (
        <View style={PoliceContactedStyle.container}>
            <Text style={PoliceContactedStyle.text}> Have you called the police yet to report the accident? </Text>
        </View>
    )
}

export default PoliceContacted