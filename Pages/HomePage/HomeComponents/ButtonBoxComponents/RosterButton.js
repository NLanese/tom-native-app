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
        <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={{
                        alignContent: 'center',
                        top: '30%',
                        height: 60,
                        width: 60,
                        marginLeft: 42.5
                    }}
                    source={require('../../../../assets/roster-icon.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>ROSTER</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RosterButton
