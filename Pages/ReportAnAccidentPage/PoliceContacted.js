import React from "react";
import { View, Text, Button } from 'react-native'
import { PoliceContactedStyles } from "../../Styles/ReportAnAccidentStyles";
import NavBar from "../../Global/NavBar";
import NoButton from "./PoliceContactedComponents/NoButton";
import YesButton from "./PoliceContactedComponents/YesButton";

const PoliceContacted = () => {

    return (
        <View>
            <NavBar />

            <View style={PoliceContactedStyles.container}>
                <Text style={PoliceContactedStyles.text}> Have you called the police yet to report the accident? </Text>

                <YesButton />
                <NoButton />
            </View>
        </View>
    )
}

export default PoliceContacted