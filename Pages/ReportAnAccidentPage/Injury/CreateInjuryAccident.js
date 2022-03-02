import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreateInjuryAccident = () => {
    const [accidentData] = useRecoilState(accidentDataState)
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    useEffect(() => {
        setInjuryData({
            accidentId: accidentData.id,
            medical_attention: null,
            immediate_attention: null,
            injury: null,
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
    }, [])

    return (
        <View>
            <Banner />
            <Text>
                Create Injury Accident
                (Give information/directions for upcoming slides)
            </Text>

            <View>
                <ContinueButton nextPage={'injury-specific-pictures'} buttonText={'Continue'} pageName={'create-injury-report-continue-button'} />
            </View>
        </View>
    )
}

export default CreateInjuryAccident