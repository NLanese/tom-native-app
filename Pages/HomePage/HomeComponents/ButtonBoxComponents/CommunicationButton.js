import React from "react"
import { useHistory } from 'react-router-native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const CommunicationButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {history.push("/communication")}}>
            <View>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/Communication.jpeg')}/>
            </View> 
            <View style={ButtonBoxStyles.label}>
                <Text style={{textAlign: 'center'}}>Communication</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default CommunicationButton
