import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const ProfilePictureButton = () => {
    const navigation = useNavigation()
    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    console.log('test')

    return (
        <View >
            <Button 
                mode="contained"
                loading={buttonLoading}
                style={ButtonStyles.logInButton}
                titleStyle={{color: "white"}}
                onPress={() => {
                    navigation.navigate("profile-picture")
                }}
            >
                Profile Picture
            </Button>
            
        </View>
    )
}

export default ProfilePictureButton
