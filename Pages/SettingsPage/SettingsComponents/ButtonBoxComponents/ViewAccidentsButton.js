import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { settings } from "../../../../Styles/SettingStyles";

const ViewAccidentsButton = () => {
    let history = useHistory()

    return (
        <View style={settings.button}>
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
