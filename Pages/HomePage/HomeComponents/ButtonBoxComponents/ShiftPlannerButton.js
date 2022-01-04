import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"
import { Button, Card, Title } from 'react-native-paper';


const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {history.push("/shift_planner")}}>
                <Card.Cover source={require('../../../../assets/shift_planner.png')} style={ScoreCardStyles.image}/>
                {/* <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                           SHIFT PLANNER
                        </Button>
                    </View>
                </Card.Actions> */}
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

export default ShiftPlannerButton
