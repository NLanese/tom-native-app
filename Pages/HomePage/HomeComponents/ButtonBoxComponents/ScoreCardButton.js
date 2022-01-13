import React from "react"
import { useHistory } from 'react-router-native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ScoreCardButton = () => {
    let history = useHistory()

    return (
        // <View style={ButtonBoxStyles.cardContainer}>
        //     <Card onPress={() => {history.push("/score_card")}}>
        //         <Card.Cover source={require("../../../../assets/scorecard.jpg")} style={ButtonBoxStyles.image}/>
        //         <Card.Content style={ButtonBoxStyles.card}>
        //             <Title
        //                 style={ScoreCardStyles.CardContent}
        //             >
        //                 Scorecard
        //             </Title>
        //         </Card.Content>
        //     </Card>
        // </View>
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {history.push("/scorecard")}}>
            <View>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/scorecard-icon.jpeg')}/>
            </View> 
            <View style={ButtonBoxStyles.label}>
                <Text style={{textAlign: 'center'}}>Scorecard</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ScoreCardButton
