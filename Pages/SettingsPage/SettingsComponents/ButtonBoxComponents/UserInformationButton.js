import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const UserInformationButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.ButtonCasing}>
            <Button style={SettingsStyles.Buttom}
                onPress={() => {history.push("/account_information")}}
                title='Account Information'
                color='#CCCCCC'
                accessibilityLabel='AccountInformation'
            />
        </View>
    )
}

export default UserInformationButton
