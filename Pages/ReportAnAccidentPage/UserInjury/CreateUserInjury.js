import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import Banner from "../../../Global/Banner";
import ContinueButton from "../../../Global/Buttons/ContinueButton" 

import { useRecoilState } from "recoil";
import { selfInjuryDataState, accidentDataState } from "../../../Recoil/atoms";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreateUserInjury = ({accident}) => {

    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)

    const [accidentData] = useRecoilState(accidentDataState)

    let accidentId
    if (accident){
        accidentId = accidentData.id 
    }

    let selfInjury
    if (accident){
        selfInjury = {...selfInjury, accidentId: accidentId}
    }

    useEffect(() => [
        setSelfInjuryData({
            injuries: {
                head: null, neck: null, shoulder: null,
                chest: null, back: null, stomach: null,
                arm: null, hand: null, elbow: null,
                leg: null, knee: null, foot: null
            },
            drivingDuringInjury: null
        })
    ], [])

    return(
        <View>
            <Banner />
            <Text style={Styles.title}>
                Report an Injury
            </Text>
            <Text style={Styles.subTitle}>
                We're sorry to hear that you're hurt!
            </Text>

            <Text style={Styles.subTitle}>
                Our first concern is your well being, if you are in need or if you believe that you may be in need for medical assistance, call the appropriate emergency services.
            </Text>

            <Text style={Styles.subTitle}>
                Please answer the following questions as accurately as possible. and make your selections carefully. Remember you can always hit the back button on the top of your screen to move back a page if you need to change any answers.
            </Text>

            <Text style={Styles.subTitle}>
                Remember, your safety and anyone else's is our main concern, so please ensure you are in a safe location before proceeding
            </Text>

            <View style={Styles.continue}>
                <ContinueButton nextPage={'user-injury-specific-pictures'} nextSite={'Your Own Injury Pictures'} buttonText={'Okay'} pageName={'create-property-accident-continue-button'} />
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
    subTitle:{
        marginTop: 15,
        marginLeft: 30,
        marginRight: 38,
        fontFamily: "GilroyMedium",
        fontSize: 13,
        lineHeight: 20,
        color: "#888888",
        letterSpacing: 0.5
    },
    continue: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: maxHeight * 0.75
    }
})

export default CreateUserInjury        
        
        