import React from "react"
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const ScoreCardButton = () => {
    const navigation = useNavigation()

    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("score_card")}}>
            <View>
                <Image 
                    style={{
                        alignContent: 'center',
                        height: maxHeight * 0.187,
                        width: '82%',
                        marginLeft: maxHeight * 0.0
                    }}
                    source={require('../../../../assets/scorecard-icon.jpeg')}/>
            </View> 
            <View style={{
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
                marginTop: 6,
                left: -maxWidth * 0.035
            }}>
                <Text style={{textAlign: 'center'}}>Scorecard</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ScoreCardButton
