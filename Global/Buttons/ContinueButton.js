import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

// Conditional Stylings Based On "pageName"
const styles = StyleSheet.create({
    
})

const ContinueButton = ({ nextPage, buttonText, pageName }) => {
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity onPress={() => {navigation.navigate(`${nextPage}`)}}>
                <View>
                    <Text> {buttonText} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ContinueButton