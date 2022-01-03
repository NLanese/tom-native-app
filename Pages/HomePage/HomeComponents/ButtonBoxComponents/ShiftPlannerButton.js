import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"
import { Button, Card } from 'react-native-paper';


const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/shift_planner")}}>
                <Card.Cover source={require('../../../../assets/shift_planner.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                           SHIFT PLANNER
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default ShiftPlannerButton
