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
            <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={{
                        alignContent: 'center',
                        top: '20%',
                        height: '40%',
                        width: '42%',
                        marginLeft: '29%'
                    }}
                    source={require('../../../../assets/scorecard-icon.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>Scorecard</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ScoreCardButton
