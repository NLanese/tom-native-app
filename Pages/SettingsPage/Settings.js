import react from "react";
import { useHistory } from 'react-router-native';
import { View, Text, Button } from 'react-native'
import UserInformationButton from "./SettingsComponents/ButtonBoxComponents/UserInformationButton";
import AccountSettingsButton from "./SettingsComponents/ButtonBoxComponents/AccountSettingsButton";
import { settings } from "../../Styles/SettingStyles";

const Settings = () => {

    return (
        <View>
            <View style={settings.buttonBox}>
                <UserInformationButton />
                <AccountSettingsButton />
            </View>
        </View>
    )
}

export default Settings