import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardButtonStyles.container}>
            <Card onPress={() => {history.push("/leadership_notified")}}>
                <Card.Cover source={require('../../../../assets/report_an_accident.png')} style={ScoreCardButtonStyles.image}/>
                <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                        REPORT AN ACCIDENT
                        </Button>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default ReportAnAccidentButton