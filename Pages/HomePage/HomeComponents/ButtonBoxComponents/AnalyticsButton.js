import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const AnalyticsButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.AnalyticsButton}>
            <Button 
                onPress={() => {history.push("/analytics")}}
				title='Analytics'
				color='#ffffff'
				accessibilityLabel='Analytics'
            />
        </View>
    )
}

export default AnalyticsButton
