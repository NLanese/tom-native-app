import React from "react";
import { View, Text, Button } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";
import { SettingsStyles } from "../../Styles/SettingStyles";
import NavBar from "../../Global/NavBar";

const Settings = () => {

    return (
        <View>
            <NavBar />

            <View style={SettingsStyles.buttonBox}>
                <UserInformationButton />
                <AccountSettingsButton />
            </View>
        </View>
    )
}

export default Settings