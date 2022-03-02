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

const CheckInjuryAccidentAgain = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Banner />
            <Text>Did you injury someone?</Text>

            <ContinueButton nextPage={'create-injury-accident'} buttonText={'Yes'} pageName={'check-injury-accident-yes-button'} />
            {/* <Button onPress={() => navigation.navigate('report-an-accident-completed')}>No</Button> */}
            <Button onPress={() => navigation.navigate('accident-info-continue')}>No</Button>
        </View>
    )
}

export default CheckInjuryAccidentAgain