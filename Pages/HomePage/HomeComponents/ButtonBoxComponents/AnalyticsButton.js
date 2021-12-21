import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const AnalyticsButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.AnalyticsButton}>
            <Button 
                onPress={() => {history.push("/analytics")}}
				title='Analytics'
				color='#CCCCCC'
				accessibilityLabel='Analytics'
            />
        </View>
    )
}

export default AnalyticsButton
