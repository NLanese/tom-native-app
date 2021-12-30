import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { settings } from "../../../../Styles/SettingStyles";

const AccountSettingsButton = () => {
    let history = useHistory()

    return (
        <View style={settings.button}>
            <Button 
                onPress={() => {history.push("/account_settings")}}
                title='Account Settings'
                color='#CCCCCC'
                accessibilityLabel='AccountSettings'
            />
        </View>
    )
}

export default AccountSettingsButton
