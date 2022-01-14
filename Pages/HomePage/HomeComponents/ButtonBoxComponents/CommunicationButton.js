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
