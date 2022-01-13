import React from "react"
import { useHistory } from 'react-router-native';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card } from 'react-native-paper';
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const SettingsButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {history.push("/settings")}}>
            <View>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/settings-icon.jpeg')}/>
            </View> 
            <View style={ButtonBoxStyles.label}>
                <Text style={{textAlign: 'center'}}>Communication</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default SettingsButton
