import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import Gradient from "../../Components/Gradient"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

// Conditional Stylings Based On "pageName"
const styles = StyleSheet.create({
    
})

const ContinueButton = ({ 
    nextPage, 
    buttonText, 
    pageName, 
    colorOne = false, 
    colorTwo = false,
}) => {
    const navigation = useNavigation()

    let colors = ["#534FFF", "#15A1F1"]
    if (colorOne){
        colors[0] = colorOne
    }
    if (colorTwo){
        colors[1] = colorTwo
    }

    return (
        <View style={{
            height: 100,
            width: 100,
            borderRadius: 50.5,
            justifyContent: 'center',
            alightItems: 'center',
            shadowColor: '#000000',
            shadowOffset: {width: -3, height: 25},
            shadowOpacity: 0.14,
            shadowRadius: 13,
        }}>
            <TouchableOpacity onPress={() => {navigation.navigate(`${nextPage}`)}}>
                <Gradient
                    colorOne={colors[0]}
                    colorTwo={colors[1]}
                    style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50.5,
                        justifyContent: 'center',
                        alightItems: 'center',
                        shadowColor: '#000000',
                        shadowOffset: {width: 6, height: 25},
                        shadowOpacity: 0.14,
                        shadowRadius: 13,
                    }}
                >
                    <Text style={{
                        fontFamily: "GilroySemiBold",
                        fontSize: 25,
                        letterSpacing: -0.5,
                        color: '#FFFFFF',
                        textAlign: 'center'
                    }}
                    > 
                        {buttonText} 
                    </Text>
                </Gradient>
            </TouchableOpacity>
        </View>
    )
}

export default ContinueButton