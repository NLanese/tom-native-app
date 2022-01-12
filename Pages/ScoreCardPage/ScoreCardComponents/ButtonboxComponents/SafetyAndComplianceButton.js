import React from "react"
import { useHistory } from 'react-router-native';
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonBox } from "../../../../Styles/ScoreCardStyles";

const SafetyAndComplianceButton = () => {
    let history = useHistory()


    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <TouchableOpacity onPress={() => {
            handleButtonLoading()
            history.push("/safetyandcompliance")
        }}>
        <View style={ButtonBox.container}>
            <Button 
                mode="text"
                loading={buttonLoading}
                style={ButtonBox.button}
                titleStyle={{color: "white"}}
                onPress={() => {
                    handleButtonLoading()
                    history.push("/safetyandcompliance")
                }}
            >
                <Text style={ButtonBox.text}>Safety and Compliance</Text>
            </Button>
        </View>
        </TouchableOpacity>
    )
}

export default SafetyAndComplianceButton
