import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card, Title } from 'react-native-paper';
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.cardContainer}>
            <Card onPress={() => {history.push("/shift_planner")}}>
                <Card.Cover source={require('../../../../assets/shift-planner.jpg')} style={ButtonBoxStyles.image}/>
                <Card.Content style={ButtonBoxStyles.card}>
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
