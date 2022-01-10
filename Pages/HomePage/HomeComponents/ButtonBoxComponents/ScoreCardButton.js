import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";

const ScoreCardButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {history.push("/score_card")}}>
                <Card.Cover source={require("../../../../assets/scorecard.jpg")} style={ScoreCardStyles.image}/>
                <Card.Content>
                    <Title
                        style={ScoreCardStyles.CardContent}
                    >
                        Scorecard
                    </Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ScoreCardButton
