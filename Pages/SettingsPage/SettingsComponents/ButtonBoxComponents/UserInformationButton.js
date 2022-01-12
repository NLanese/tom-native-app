import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const AccountInformation = () => {
    let history = useHistory()


    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <View >
            <Button 
                mode="contained"
                loading={buttonLoading}
                style={ButtonStyles.logInButton}
                titleStyle={{color: "white"}}
                onPress={() => {
                    handleButtonLoading()
                    history.push("/account_information")
                }}
            >
                Account Information
            </Button>
        </View>
    )
}

export default AccountInformation
