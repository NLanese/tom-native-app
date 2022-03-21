import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { selfInjuryDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const UserInjurySpecificPicture = ({accident}) => {

    let route = "user-injury-information"
    let site  = "Your Own Injury Information"
    if (accident){
        route = "user-accident-injury-information"
        site = "Your Own Accident Injury Information "
    }
    
    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)


    useEffect(() => {
        setSelfInjuryData({
            ...selfInjuryData,
            specific_pictures: {
                'Pic One': "Test url"
            } 
        })
    }, [])


    return (
        <View>
            <Banner />
            <Text>TEST FROM USER INJURY SPECIFIC PICTURES</Text>

            <View>
                <ContinueButton nextPage={route} nextSite={site} buttonText={'Done'} pageName={'property-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

export default UserInjurySpecificPicture