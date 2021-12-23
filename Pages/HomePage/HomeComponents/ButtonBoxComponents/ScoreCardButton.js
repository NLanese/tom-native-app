import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const ScoreCardButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/scorecard")}}
				title='Score Card'
				color='#CCCCCC'
				accessibilityLabel='Score Card'
            />
        </View>
    )
}

export default ScoreCardButton