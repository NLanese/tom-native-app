import React from "react";
import { View } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";
import Banner from "../../Global/Banner";

const Settings = () => {

    return (
        <View>
            <Banner />

            <View>
                <UserInformationButton />
                <AccountSettingsButton />
            </View>
        </View>
    )
}

export default Settings