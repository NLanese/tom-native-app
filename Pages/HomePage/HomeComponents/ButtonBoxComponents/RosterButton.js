import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const RosterButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("roster")}}>
            <View>
                <Image 
                    style={{		
                        alignContent: 'center',
                        top: maxHeight * -0.04,
                        height: maxHeight * 0.255,
                        width: '82%',}}
                    source={require('../../../../assets/roster-icon.jpeg')}/>
            </View> 
            <View style={{
                		width: '100%',
                        // borderWidth: 2,
                        textAlign: 'center',
                        alignItems: 'center',
                        marginTop: 0,
                        top: maxHeight * -0.06,
                        left: -maxWidth * 0.035
            }}>
                <Text style={{textAlign: 'center'}}>Roster</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RosterButton
