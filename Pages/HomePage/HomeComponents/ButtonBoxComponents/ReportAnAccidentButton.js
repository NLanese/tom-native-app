import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.cardContainer}>
            <Card onPress={() => {history.push("/leadership_notified")}}>
                <Card.Cover source={require('../../../../assets/report-accident.jpg')} style={ButtonBoxStyles.image}/>
                <Card.Content style={ButtonBoxStyles.card}>
                    <Title
                        style={ScoreCardStyles.CardContent}
                    >
                        Report Accident
                    </Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ReportAnAccidentButton