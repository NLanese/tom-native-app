import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"

const CommunicationButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/communication")}}>
                <Card.Cover source={require('../../../../assets/communication.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Content>
                    <Title
                        style={ScoreCardButtonStyles.CardContent}
                    >
                        Messages
                    </Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default CommunicationButton
