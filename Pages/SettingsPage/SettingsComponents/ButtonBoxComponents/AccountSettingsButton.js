import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const AccountSettingsButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.button}>
            <Button 
                onPress={() => {history.push("/account_settings")}}
                title='Account Settings'
                color='#ffffff'
                accessibilityLabel='AccountSettings'
            />
        </View>
    )
}

export default AccountSettingsButton
