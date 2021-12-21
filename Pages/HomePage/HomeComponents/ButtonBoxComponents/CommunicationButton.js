import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const CommunicationButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
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
