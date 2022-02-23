import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CheckCollisionAccident = () => {    
    return (
        <View>
            <Banner />
            <Text style={Styles.title}>Was another vehicle hit? TELL ME NOW!</Text>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={'create-collision-accident'} buttonText={'Yes'} pageName={'check-collision-accident-yes-button'} colorOne="#600000" colorTwo="#C00000"/>
            </View>
            <View style={Styles.continue}>
                <ContinueButton nextPage={'check-property-accident'} buttonText={'No'} pageName={'check-collision-accident-no-button'} />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 23,
        marginLeft: 30,
        marginRight: 30,

        fontFamily: "GilroyBold",
        fontSize: 30,
        color: "#444444",
        letterSpacing: -0.5
    },
    noButton: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .58
    },
    continue: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .15
    }

})

export default CheckCollisionAccident