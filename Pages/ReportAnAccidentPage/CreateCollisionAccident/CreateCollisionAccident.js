import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const CreateCollisionAccident = () => {
    const [driverCreateCollisionAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATECOLLISIONACCIDENT)
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    useEffect(() => [
        setCollisionData({
            accidentId: accidentData.id,
            contact_info: {
                driver_license_number: null,
                insurance_provider: null,
                insurance_policy_number: null,
                firstname: null,
                lastname: null,
                address: null,
                phone_number: null
            },
            extra_info: null
        })
    ], [])
    
    return (
        <View>
            <Banner />
            <Text>
                Hello From Create Collision Accident
                (Give information/directions for upcoming slides)
            </Text>

            <ContinueButton nextPage={'collision-specific-pictures'} buttonText={'Continue'} pageName={'create-collision-accident'} />
        </View>
    )
}

export default CreateCollisionAccident