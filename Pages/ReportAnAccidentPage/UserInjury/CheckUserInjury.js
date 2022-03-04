import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import Template from "../../../Styles/RAA/RAATemplateStyles";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CheckUserInjury = () => {
    return (
        <View>
            <Banner />
            <Text style={Template.title}>Are you injured?</Text>

            <View style={Styles.continue}>
                <ContinueButton nextPage={'create-user-injury'} buttonText={'Yes'} pageName={'check-user-injury-yes-button'} colorOne="#DE0000" colorTwo="#DE0000"/>
            </View>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={''} buttonText={'No'} pageName={'check-user-injury-no-button'} />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: 30,

        width: 200,
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