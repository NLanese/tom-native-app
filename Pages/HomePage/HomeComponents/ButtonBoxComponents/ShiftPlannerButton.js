import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card, Title } from 'react-native-paper';


const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {history.push("/shift_planner")}}>
                <Card.Cover source={require('../../../../assets/shift-planner.jpg')} style={ScoreCardStyles.image}/>
                <Card.Content>
                    <Title
                        style={ScoreCardStyles.CardContent}
                    >
                        Shift Planner
                    </Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ShiftPlannerButton
