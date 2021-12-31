import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const AccountSettingsButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.ButtonCasing}>
            <Button style={SettingsStyles.Buttom}
                onPress={() => {history.push("/account_settings")}}
                titleStyle={SettingsStyles.ButtonTitle}
                title='Account Settings'
                color='#CCCCCC'
                accessibilityLabel='AccountSettings'
            />
        </View>
    )
}

export default AccountSettingsButton
