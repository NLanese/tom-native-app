import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ProductivityButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.cardContainer}>
            <Card onPress={() => {history.push("/productivity")}} >
                <Card.Cover source={require('../../../../assets/productivity.jpg')} style={ButtonBoxStyles.image}/>
                <Card.Content style={ButtonBoxStyles.card}>
                    <Title
                        style={ScoreCardStyles.CardContent}
                    >
                        Productivity
                    </Title>
                </Card.Content>
            </Card>
        </View>
    )
}

export default ProductivityButton
