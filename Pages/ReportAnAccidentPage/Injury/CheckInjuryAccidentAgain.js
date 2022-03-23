import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import { Button, Input } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { websiteState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CheckInjuryAccidentAgain = () => {
    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    return (
        <View>
            <Banner />
            <Text>Did you injury someone?</Text>

            <ContinueButton nextPage={'create-injury-accident'} buttonText={'Yes'} pageName={'check-injury-accident-yes-button'} />
            <Button onPress={() => {
                setWebsite({current: "Check Self Injury", previous: website.current, saved: "Check Self Injury"})
                navigation.navigate('check-user-accident-injury')
            }}>No</Button>
        </View>
    )
}

export default CheckInjuryAccidentAgain