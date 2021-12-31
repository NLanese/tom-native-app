import React from "react";
import { View, Text } from 'react-native'
import { PleaseRememberStyles } from "../../Styles/ReportAnAccidentStyles";
import NavBar from "../../Global/NavBar";
import OkButton from "./PleaseRememberComponents/OkButton";

const PleaseRemember = () => {

    return (
        <View>
            <NavBar />

            <View style={PleaseRememberStyles.container}>
                <Text style={PleaseRememberStyles.text}> Please remember don't admit fault, just tell the truth</Text>

                <OkButton />
            </View>
        </View>
    )
}

export default PleaseRemember