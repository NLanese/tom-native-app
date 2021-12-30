import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { settings } from "../../../../Styles/SettingStyles";

const UserInformationButton = () => {
    let history = useHistory()

    return (
        <View style={settings.button}>
            <Button 
                onPress={() => {history.push("/account_information")}}
                title='Account Information'
                color='#CCCCCC'
                accessibilityLabel='AccountInformation'
            />
        </View>
    )
}

export default UserInformationButton
