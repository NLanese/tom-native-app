import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"

const ScoreCardButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/score_card")}}>
                <Card.Cover source={require('../../../../assets/scorecard.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                           SCORECARD
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default ScoreCardButton
