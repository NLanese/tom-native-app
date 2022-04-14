import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { useNavigation } from "@react-navigation/native";

import Template from "../../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryCheckAgain = ({collision}) => {
    const navigation = useNavigation()

    const whichContinue = () => {
        if (collision){
            return('create-collision-injury-report')
        }
        else{
            return('create-injury-report')
        }
    }

    const whichNo = () => {
        if (collision){
            return('check-property-accident')
        }
        else{
            return('check-user-accident-injury')
        }
    }

    const whichSite = (yn) => {
        if (yn == "no"){
            if (collision){
                return('Check Property Accident')
            }
            else{
                return('Check Self Injury')
            }
        }
        if (yn == "yes"){

        }
    } 

    return (
        <View>
            <Banner />
            <Text style={Template.questionText}>Was another party injured in the accident?</Text>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={whichNo()} buttonText={'No'} nextSite={whichSite('no')} />
            </View>
            <View style={Styles.continue}>
            <ContinueButton nextPage={whichContinue()} buttonText={'Yes'} nextSite={whichSite('yes')} colorOne="#DE0000" colorTwo="#DE0000"/>
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
        
export default CollisionInjuryCheckAgain
