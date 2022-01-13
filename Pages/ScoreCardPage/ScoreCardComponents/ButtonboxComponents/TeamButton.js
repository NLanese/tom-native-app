import React from "react"
import { useHistory } from 'react-router-native';
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonBox } from "../../../../Styles/ScoreCardStyles";

const QualityButton = () => {
    let history = useHistory()


    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <TouchableOpacity onPress={() => {
            handleButtonLoading()
            history.push("/team")
        }}>
        <View style={ButtonBox.container}>
            <Button 
                mode="outline"
                loading={buttonLoading}
                style={ButtonBox.button}
                titleStyle={{color: "black"}}
                onPress={() => {
                    handleButtonLoading()
                    history.push("/team")
                }}
            >
                <Text style={ButtonBox.text}>Team</Text>
            </Button>
        </View>
        </TouchableOpacity>
    )
}

export default QualityButton
