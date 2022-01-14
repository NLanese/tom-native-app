import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonBox } from "../../../../Styles/ScoreCardStyles";

const QualityButton = () => {
    const navigation = useNavigation()

    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (

        <TouchableOpacity onPress={() => {
            handleButtonLoading()
            navigation.navigate("quality")
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
                    navigation.navigate("quality")
                }}
            >
                <Text style={ButtonBox.text}>Quality</Text>
            </Button>
        </View>
        </TouchableOpacity>
    )
}

export default QualityButton
