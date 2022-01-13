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
            history.push("/quality")
        }}>
        <View style={ButtonBox.container}>
            <Button 
                height={169}
                mode="outline"
                loading={buttonLoading}
                style={ButtonBox.button}
                titleStyle={{color: "white"}}
                onPress={() => {
                    handleButtonLoading()
                    history.push("/quality")
                }}
            >
                <Text style={ButtonBox.text}>Quality</Text>
            </Button>
        </View>
        </TouchableOpacity>
    )
}

export default QualityButton
