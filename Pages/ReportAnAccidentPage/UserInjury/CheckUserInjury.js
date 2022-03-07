import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import Template from "../../../Styles/RAA/RAATemplateStyles";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CheckUserInjury = ({accident}) => {

    let route = 'create-user-injury'
    if (accident){
        route = 'create-user-accident-injury' 
    }

    let noRoute = 'check-self-car-damage'
    if (accident){
        noRoute = 'check-self-car-accident-damage'
    }

    return (
        <View>
            <Banner />
            <Text style={Styles.title}>Are you injured or hurt?</Text>

            <View style={Styles.continue}>
                <ContinueButton nextPage={route} buttonText={'Yes'} pageName={'check-user-injury-yes-button'} colorOne="#DE0000" colorTwo="#DE0000"/>
            </View>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={noRoute} buttonText={'No'} pageName={'check-user-injury-no-button'} />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: 30,

        width: 230,
        // backgroundColor: 'red',

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

export default CheckUserInjury