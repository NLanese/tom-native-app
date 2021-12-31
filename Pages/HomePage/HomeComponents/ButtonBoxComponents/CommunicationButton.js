import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const CommunicationButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/communication")}}
				title='Communication'
				color='#CCCCCC'
				accessibilityLabel='Communication'
            />
        </View>
    )
}

export default CommunicationButton
