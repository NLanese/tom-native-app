import React from "react";
import { View } from 'react-native'
import ProfilePictureButton from "./SettingsComponents/ButtonBoxComponents/ProfilePictureButton";
import Banner from "../../Global/Banner";

const Settings = () => {

    return (
        <View>
            <Banner />

            <View>
                <AccountSettingsButton />
                <ProfilePictureButton />
            </View>
        </View>
    )
}

export default Settings