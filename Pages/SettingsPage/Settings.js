import React from "react";
import { View, Text, Button } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";
import { SettingsStyles } from "../../Styles/SettingStyles";

const Settings = () => {

    return (
        <View>
            <View style={SettingsStyles.buttonBox}>
                <UserInformationButton />
                <AccountSettingsButton />
            </View>
        </View>
    )
}

export default Settings