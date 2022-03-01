import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreatePropertyAccident = () => {
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    useEffect(() => {
        setPropertyData({
            accidentId: accidentData.id,
            specific_pictures: {},
            contact_infomation: {},
            safety_equipment: {}
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>Test from create property accident</Text>

            <View>
                <ContinueButton nextPage={'property-specific-pictures'} buttonText={'Okay'} pageName={'create-property-accident-continue-button'} />
            </View>
        </View>
    )
}

export default CreatePropertyAccident