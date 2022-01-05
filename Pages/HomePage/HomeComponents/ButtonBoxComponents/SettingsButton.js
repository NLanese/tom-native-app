import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card } from 'react-native-paper';


const SettingsButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {history.push("/settings")}}>
                <Card.Cover source={require('../../../../assets/settings.png')} style={ScoreCardStyles.image}/>
                <Card.Actions
                    style={ScoreCardStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                           Settings
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default SettingsButton
