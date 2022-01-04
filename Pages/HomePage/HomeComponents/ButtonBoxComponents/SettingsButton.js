import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"
import { Button, Card } from 'react-native-paper';


const SettingsButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/settings")}}>
                <Card.Cover source={require('../../../../assets/settings.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                           SETTINGS
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default SettingsButton
