import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

const AccidentGeneralPictures = () => {
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    useEffect(() => {
        setAccidentData({
            ...accidentData,
            policeReportInformation: {
                ...accidentData.policeReportInformation
            },
            generalPictures: {
                "Pic One": "Test Url"
            },
            actionsBeforeAccidents: {
                ...accidentData.actionsBeforeAccidents
            },
            unsafeConditions: {
                ...accidentData.unsafeConditions
            }
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>TEST FROM GENERAL PICTURES</Text>

            <View>
                <ContinueButton nextPage={'accident-police-report'} buttonText={'Continue'} pageName={'collision-injury-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

export default AccidentGeneralPictures