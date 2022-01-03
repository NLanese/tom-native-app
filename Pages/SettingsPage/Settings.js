import React from "react";
import { View } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";

const Settings = () => {

    return (
        <View>
            <View>
                <UserInformationButton />
                <AccountSettingsButton />
            </View>
        </View>
    )
}

export default Settings