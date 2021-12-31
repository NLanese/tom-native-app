import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const ViewAccidentsButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.button}>
            <Button 
                onPress={() => {history.push("/view_accidents")}}
                title='View Accidents'
                color='#CCCCCC'
                accessibilityLabel='ViewAccidents'
            />
        </View>
    )
}

export default ViewAccidentsButton
