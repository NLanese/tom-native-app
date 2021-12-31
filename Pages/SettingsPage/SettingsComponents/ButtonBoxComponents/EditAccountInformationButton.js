import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const AccountSettingsButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.ButtonCasing}>
            <Button style={SettingsStyles.Button}
                onPress={() => {history.push("/edit_account_information")}}
                title='Edit Account Information'
                color='#CCCCCC'
                accessibilityLabel='EditAccountInformation'
            />
        </View>
    )
}

export default AccountSettingsButton
