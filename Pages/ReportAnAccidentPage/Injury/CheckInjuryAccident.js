import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { useNavigation } from "@react-navigation/native";

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CheckInjuryAccident = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Banner />
            <Text style={{
                marginTop: 30,
                marginLeft: 30,
                fontFamily: "GilroyBold",
                fontSize: 30,
                width: maxWidth - 60,
                color: "#444444",
                letterSpacing: -0.5
            }}>Did an Injury occur to someone other than you?</Text>
            <Text style={{...Template.subTitle, marginTop: 15, width: maxWidth - 90, lineHeight: 15}}>IF YOU ALREADY FILLED OUT AN INJURY REPORT FOR THIS INCIDENT, YOU CAN HIT "NO"</Text>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={'check-user-injury-accident'} buttonText={'No'} pageName={'check-injury-no-button'} />
            </View>
            <View style={Styles.continue}>
            <ContinueButton nextPage={'create-injury-report'} buttonText={'Yes'} pageName={'collision-check-injury-yes-button'} colorOne="#DE0000" colorTwo="#DE0000"/>
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

{/* <Button onPress={() => navigation.navigate('accident-info-continue')}>No</Button>
<ContinueButton nextPage={'create-injury-accident'} buttonText={'Yes'} pageName={'check-injury-accident-yes-button'} /> */}

export default CheckInjuryAccident