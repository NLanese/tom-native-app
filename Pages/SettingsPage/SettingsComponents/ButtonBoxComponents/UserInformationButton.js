import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const UserInformationButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.button}>
            <Button 
                onPress={() => {history.push("/account_information")}}
                title='Account Information'
                color='#ffffff'
                accessibilityLabel='AccountInformation'
            />
        </View>
    )
}

export default UserInformationButton
