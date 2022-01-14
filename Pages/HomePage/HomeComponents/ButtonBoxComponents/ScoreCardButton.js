import React from "react"
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ScoreCardButton = () => {
    const navigation = useNavigation()

    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("score_card")}}>
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
