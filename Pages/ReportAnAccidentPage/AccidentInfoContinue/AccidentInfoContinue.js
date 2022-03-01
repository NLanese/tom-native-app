import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const AccidentInfoContinue = () => {
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    useEffect(() => {
        setAccidentData({
            ...accidentData,
            policeReportInformation: {},
            generalPictures: {},
            actionsBeforeAccidents: {
                "Test": "Test"
            },
            unsafeConditions: {
                "Test": "Test"
            }
        })
    }, [])

    return (
        <View>
            <Banner />
            <Text>Accident information Continued</Text>
            <ContinueButton nextPage={'accident-general-pictures'} buttonText={'Continue'} pageName={'accident-info-continue-yes-button'} />
        </View>
    )
}

export default AccidentInfoContinue