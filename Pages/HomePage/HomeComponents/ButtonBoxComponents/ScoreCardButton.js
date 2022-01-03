import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ButtonBoxStyles, scoreCardButton } from "../../../../Styles/HomeStyles"

const ScoreCardButton = () => {
    let history = useHistory()

    return (
        <View>
            <Card onPress={() => {history.push("/score_card")}} style={scoreCardButton.container}>
                <Card.Cover source={{ uri: 'https://picsum.photos/699' }} style={scoreCardButton.image}/>
                <Card.Actions>
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
