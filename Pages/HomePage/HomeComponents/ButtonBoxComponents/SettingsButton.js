import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { ScoreCardStyles } from "../../../../Styles/ScoreCardStyles";
import { Button, Card } from 'react-native-paper';
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const SettingsButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("settings")}}>
            <View>
                <Image 
                    style={{		
                        alignContent: 'center',
                        height: maxHeight * 0.185,
                        width: '82%',}}
                    source={require('../../../../assets/settings-icon.jpeg')}/>
            </View> 
            <View style={{
                		width: '100%',
                        // borderWidth: 2,
                        textAlign: 'center',
                        alignItems: 'center',
                        marginTop: 8,
                        left: -maxWidth * 0.035
            }}>
                <Text style={{textAlign: 'center'}}>Settings</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default SettingsButton
