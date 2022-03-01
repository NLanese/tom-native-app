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

const ReportAnAccidentCompleted = () => {

    return (
        <View>
            <Banner />
            <Text>TEST FROM REPORT AN ACCIDENT COMPLETE</Text>
            <Text>Youve completed filing the accident a supervisor will look over it and get back to you</Text>

            <ContinueButton nextPage={'home'} buttonText={'Home'} pageName={'check-injury-accident-yes-button'} />
        </View>
    )
}

export default ReportAnAccidentCompleted