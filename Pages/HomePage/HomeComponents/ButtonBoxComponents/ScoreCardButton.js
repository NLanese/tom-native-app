import React from "react"
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ScoreCardButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.cardContainer}>
            <Card onPress={() => {navigation.navigate("score_card")}}>
                <Card.Cover source={require("../../../../assets/scorecard.jpg")} style={ButtonBoxStyles.image}/>
                <Card.Content style={ButtonBoxStyles.card}>
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

export default ScoreCardButton
