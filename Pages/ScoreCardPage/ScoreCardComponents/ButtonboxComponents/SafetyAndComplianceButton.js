import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonBox } from "../../../../Styles/ScoreCardStyles";

const SafetyAndComplianceButton = () => {
    const navigation = useNavigation()

    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <TouchableOpacity onPress={() => {
            handleButtonLoading()
            navigation.navigate("safety_and_compliance")
        }}>
        <View style={ButtonBox.container}>
            <Button 
                mode="text"
                loading={buttonLoading}
                style={ButtonBox.button}
                titleStyle={{color: "white"}}
                onPress={() => {
                    handleButtonLoading()
                    navigation.navigate("safety_and_compliance")
                }}
            >
                <Text style={ButtonBox.text}>Safety and Compliance</Text>
            </Button>
        </View>
        </TouchableOpacity>
    )
}

export default SafetyAndComplianceButton
