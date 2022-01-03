import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const QualityButton = () => {
    let history = useHistory()


    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <View >
            <Button
                mode="outlined"
                style={ButtonStyles.logInButton}
                onPress={ async () => {
                    handleButtonLoading()
                    history.push("/quality")
                } }
            >
                Quality
            </Button>
        </View>
    )
}

export default QualityButton
