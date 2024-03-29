import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreateCollisionInjuryReport = ({collision}) => {


    let route = 'collision-injury-specific-pictures'
    let site = "Collision Injury Pictures"
    if (!collision){
        route = 'injury-specific-pictures'
        site = "Injury Pictures"
    }
    const [collisionId] = useRecoilState(collisionIdState)
    const [collisionData] = useRecoilState(collisionDataState)
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    useEffect(() => {
        if (collision){
            setInjuryData({
                collisionAccidentId: collisionData.id,
                injury_report: {
                    medical_attention: null,
                    concussion: null,
                    loss_of_con: null,
                    fracture: null,
                    life_threatening: null,
                    fatal: null,
                    prior: null
                },
                injured_areas: null,
                contact_info: {
                    firstname: null,
                    lastname: null,
                    address: null,
                    phone_number: null
                },
                specific_pictures: null,
                pain_level: null,
                extra_info: null
            })
        }
        else{
            setInjuryData({
                injury_report: {
                    medical_attention: null,
                    concussion: null,
                    loss_of_con: null,
                    fracture: null,
                    life_threatening: null,
                    fatal: null,
                    prior: null
                },
                injured_areas: null,
                contact_info: {
                    firstname: null,
                    lastname: null,
                    address: null,
                    phone_number: null
                },
                specific_pictures: null,
                pain_level: null,
                extra_info: null
            })
        }
    }, [])

    const renderTitle = () => {
        if (collision){
            return "Report a Collision related Injury"
        }
        if (!collision){
            return "Report an Injury"
        }
    }

    return (
        <View style={{height: 'auto'}}>
            <Banner />
            <Text style={Styles.title}>
                {renderTitle()}
            </Text>
            <Text style={Styles.subTitle}>
                Please remain calm and remember to first call 911 if anyone is in immediate danger before proceeding.
            </Text>

            <Text style={Styles.subTitle}>
                Simply follow along with the instructions as you proceed. Do your best to follow the directions as closely as possible to ensure you do not have to redo this process later! 
            </Text>

            <Text style={Styles.subTitle}>
                Be sure to be careful about your button selections, but remember you can always go back a screen using the back arrow on the top of your screen.
            </Text>

            <Text style={Styles.subTitle}>
                Remember, your safety and anyone else's is our main concern, so please ensure you and all parties involved are somewhere safe and clear of traffic
            </Text>

            <View style={Styles.continue}><ContinueButton nextPage={route} nextSite={site} buttonText={'Okay'} pageName={'create-collision-injury-report-continue-button'} />
            </View>
        </View>
    )
}


let buttonTop = maxHeight * 0.75
if (maxHeight < 700){
    buttonTop = 550
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
    noButton: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .58
    },
    continue: {
        position: 'absolute',
        marginTop: buttonTop,
        marginLeft: 30
    }

})


export default CreateCollisionInjuryReport