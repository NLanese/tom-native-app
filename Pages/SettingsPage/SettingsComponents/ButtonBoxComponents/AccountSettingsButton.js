import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const AccountSettingsButton = () => {
    const navigation = useNavigation()
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
                    // handleButtonLoading()
                    navigation.navigate("account_settings")
                }}
            >
                Account Settings
            </Button>
            
        </View>
    )
}

export default AccountSettingsButton
