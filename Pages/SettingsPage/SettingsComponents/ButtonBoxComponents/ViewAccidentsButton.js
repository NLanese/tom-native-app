import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { SettingsStyles } from "../../../../Styles/SettingStyles";

const ViewAccidentsButton = () => {
    let history = useHistory()

    return (
        <View style={SettingsStyles.ButtonCasing}>
            <Button 
                onPress={() => {history.push("/view_accidents")}}
                title='View All Accidents'
                color='#CCCCCC'
                accessibilityLabel='ViewAccidents'
            />
        </View>
    )
}

export default ViewAccidentsButton
