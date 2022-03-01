import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const InjurySpecificPictures = () => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
    
    useEffect(() => {
        setInjuryData({
            ...injuryData,
            specific_pictures: {
                'Pic One': "Test url"
            },
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>TEST FROM INJURY SPECIFIC PICTURES</Text>

            <View>
                <ContinueButton nextPage={'injury-report-information'} buttonText={'Continue'} pageName={'injury-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

export default InjurySpecificPictures