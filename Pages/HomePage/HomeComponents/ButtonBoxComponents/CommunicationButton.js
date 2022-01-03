import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"

const CommunicationButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/communication")}}>
                <Card.Cover source={{ uri: 'https://picsum.photos/699' }} style={ScoreCardButtonStyles.image}/>
                <Card.Actions>
                    <View>
                        <Button
                            color="black"
                        >
                        COMMUNICATION
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default CommunicationButton
