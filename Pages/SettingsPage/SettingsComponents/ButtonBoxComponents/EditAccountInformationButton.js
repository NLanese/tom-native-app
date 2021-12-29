import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { settings } from "../../../../Styles/SettingStyles";

const AccountSettingsButton = () => {
    let history = useHistory()

    return (
        <View style={settings.button}>
            <Button 
                onPress={() => {history.push("/edit_account_information")}}
                title='Edit Account Information'
                color='#CCCCCC'
                accessibilityLabel='EditAccountInformation'
            />
        </View>
    )
}

export default AccountSettingsButton
