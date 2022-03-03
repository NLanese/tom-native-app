import React from "react";
import { View } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";
import ProfilePictureButton from "./SettingsComponents/ButtonBoxComponents/ProfilePictureButton";
import Banner from "../../Global/Banner";

const Settings = () => {

    return (
        <View>
            <Banner />

            <View>
                <UserInformationButton />
                <AccountSettingsButton />
                <ProfilePictureButton />
            </View>
        </View>
    )
}

export default Settings