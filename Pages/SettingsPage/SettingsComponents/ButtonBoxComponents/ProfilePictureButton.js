import React, { useState } from "react"
import { View, TouchableOpacity, Text } from 'react-native'

import Gradient from "../../../../Components/Gradient";

import { useNavigation } from "@react-navigation/native";


import { AccountInformationStyles } from "../../../../Styles/SettingStyles";

const ProfilePictureButton = () => {
    const navigation = useNavigation()
    const [buttonLoading, setButtonLoading] = useState(false)
	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}

    return (
        <View style={{marginBottom: 20}}>
            <TouchableOpacity>
                <Gradient
                    colorOne={"#534FFF"}
                    colorTwo={"#15A1F1"}
                    style={{
                        height: 50,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={AccountInformationStyles.buttonText}>SET PROFILE PICTURE</Text>
                </Gradient>
            </TouchableOpacity>
            {/* <Button 
                mode="contained"
                loading={buttonLoading}
                style={ButtonStyles.logInButton}
                titleStyle={{color: "white"}}
                onPress={() => {
                    navigation.navigate("profile-picture")
                }}
            >
                Profile Picture
            </Button> */}
            
        </View>
    )
}

export default ProfilePictureButton
