import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"

const ProductivityButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/productivity")}}>
                <Card.Cover source={require('../../../../assets/productivity.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                        PRODUCTIVITY
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default ProductivityButton
