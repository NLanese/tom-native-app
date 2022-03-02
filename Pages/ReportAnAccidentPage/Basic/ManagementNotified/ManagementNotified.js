import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../../Global/Banner"
import NoButton from "./Components/NoButton"
import ContinueButton from "../../../../Global/Buttons/ContinueButton"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const ManagementNotified = () => {

    return (
        <View>
            <Banner />
            <Text style={Styles.title}>Has management been notified?</Text>
            <View style={Styles.noButton}>
                <NoButton />
            </View>
            <View style={Styles.continue}>
                <ContinueButton nextPage={"police_notified"} pageName={"management-notified-yes-button"} buttonText={"Yes"}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 30,
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

export default ManagementNotified