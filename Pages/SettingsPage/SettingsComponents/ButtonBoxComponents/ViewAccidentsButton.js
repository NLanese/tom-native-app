import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const ViewAccidentsButton = () => {
    let history = useHistory()


    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <View >
            <Button
                mode="outlined"
                loading={buttonLoading}
                style={ButtonStyles.logInButton}
                onPress={ async () => {
                    handleButtonLoading()
                    history.push("/view_accidents")
                } }
            >
                View Accidents
            </Button>
        </View>
    )
}

export default ViewAccidentsButton
