import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card } from 'react-native-paper';

const SettingsButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {navigation.navigate("settings")}}>
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
