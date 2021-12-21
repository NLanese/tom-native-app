import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const SettingsButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/settings")}}
				title='Settings'
				color='#CCCCCC'
				accessibilityLabel='Settings'
            />
        </View>
    )
}

export default SettingsButton
