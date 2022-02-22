import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const ContinueButton = ({ nextPage }) => {
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate(`${nextPage}`)}}>
                <View>
                    <Text> Continue </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ContinueButton