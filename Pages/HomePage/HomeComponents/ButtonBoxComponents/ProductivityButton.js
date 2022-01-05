import React from "react"
import { useHistory } from 'react-router-native';
import { View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";

const ProductivityButton = () => {
    let history = useHistory()

    return (
        <View style={ScoreCardStyles.container}>
            <Card onPress={() => {history.push("/productivity")}}>
                <Card.Cover source={require('../../../../assets/productivity.jpg')} style={ScoreCardStyles.image}/>
                {/* <Card.Actions
                    style={ScoreCardButtonStyles.button}
                >
                    <View>
                        <Button
                            color="black"
                        >
                        PRODUCTIVITY
                        </Button>
                    </View>
                </Card.Actions> */}
                <Card.Content>
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
