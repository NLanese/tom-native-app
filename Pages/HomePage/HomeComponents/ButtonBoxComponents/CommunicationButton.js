import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Button, Card, Title } from 'react-native-paper';
import { ScoreCardButtonStyles } from "../../../../Styles/HomeStyles"
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const CommunicationButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("messages")}}>
            <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/Communication.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>COMMUNICATION</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default CommunicationButton
