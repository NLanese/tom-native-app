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

const CollisionInjuryCheck = () => {
    const navigation = useNavigation()
    const [collisionId, setCollisionId] = useRecoilState(collisionIdState)

    console.log(collisionId)

    return (
        <View>
            <Banner />
            <Text>Was the Other Party injured in the accident?</Text>

            <ContinueButton nextPage={'create-coliision-injury-report'} buttonText={'Yes'} pageName={'collision-check-injury-yes-button'} />
            <Button onPress={navigation.navigate('check-property-accident')}>No</Button>
        </View>
    )
}

export default CollisionInjuryCheck