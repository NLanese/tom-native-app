import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATEPROPERTYACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const dynamicStyles = StyleSheet.create({
    activeInput: {
        backgroundColor: 'rgba(52, 52, 52, 0.3) !important',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 15,
        width: '85%',
        height: '13%',
        marginLeft: maxWidth * 0.125,
    },
    inactiveInput: {
        backgroundColor: 'rgba(52, 52, 52, 0.3) !important',
        borderColor: 'rgba(52, 52, 52, 0.3) !important',
        borderRadius: 15,
        width: '85%',
        height: '13%',
        marginLeft: maxWidth * 0.125,
    }
})

const AccidentExtraInformation = () => {
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    return (
        <View>
            <Banner />
            <Text>TEST FROM ACCIDENT EXTRA INFORMATION</Text>
        </View>
    )
}
export default AccidentExtraInformation