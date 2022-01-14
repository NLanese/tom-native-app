import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'
import { Button } from 'react-native-paper';
import { useState } from "react";
import { ButtonStyles } from "../../../../Styles/LandingPageStyles";

const ViewAccidentsButton = () => {
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
                    navigation.navigate("view_accidents")
                }}
            >
                View Acccidents
            </Button>
        </View>
    )
}

export default ViewAccidentsButton
