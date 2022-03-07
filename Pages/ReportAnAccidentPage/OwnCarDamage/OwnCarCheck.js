import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import Gradient from "../../../Components/Gradient";

import {accidentDataState} from "../../../Recoil/atoms"
import { useRecoilState } from 'recoil'

import { useNavigation } from "@react-navigation/native";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const OwnCarCheck = ({accident}) => {    

    const navigation = useNavigation()

    let route = "self-car-damage-information"
    if (accident){
        route = "self-car-accident-damage-information"
    }

    const [accidentState, setAccidentState] = useRecoilState(accidentDataState)

    const handleYes = () => {
        setAccidentState({...accidentState, selfDamage: {
            ...accidentState.selfDamage, damaged: true
        }})
        navigation.navigate(route)
    }


    useEffect( ()=> {
        let selfDamageExtension = { damaged: false, damages: {
            "Door(s)": null, "Mirror(s)": null, "Headlight(s)": null,
            "Headlight(s)": null, "Tail Light(s)": null, "Brake Light(s)": null, 
            "Rear Bumper": null, "Trunk": null, "Interior": null
        }}
        setAccidentState({
            ...accidentState,
            selfDamage: selfDamageExtension
        })
    }, [] )

    let colors = ["#DE0000", "#DE0000"]

    return (
        <View>
            <Banner />
            <Text style={Styles.title}>Was there any damage to your vehicle?</Text>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={'accident-conclusion'} buttonText={'No'} pageName={'check-collision-accident-no-button'} />
            </View>
            <View style={Styles.continue} >
            <TouchableOpacity onPress={() => handleYes()}  >
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
                        Yes 
                    </Text>
                </Gradient>
                </TouchableOpacity>
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
        marginLeft: maxWidth * .58,
    },
    continue: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .15,
    }
})

export default OwnCarCheck