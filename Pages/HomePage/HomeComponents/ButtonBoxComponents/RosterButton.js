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
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/roster-icon.jpeg')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>Roster</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default RosterButton
