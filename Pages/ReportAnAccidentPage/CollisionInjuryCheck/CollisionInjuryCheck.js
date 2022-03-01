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

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryCheck = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Banner />
            <Text style={Template.questionText}>Were any members of the Other Party injured in the accident?</Text>
            <View style={Styles.noButton}>
                <ContinueButton nextPage={'check-property-accident'} buttonText={'No'} pageName={'collision-check-injury-yes-button'} />
            </View>
            <View style={Styles.continue}>
            <ContinueButton nextPage={'create-collision-injury-report'} buttonText={'Yes'} pageName={'collision-check-injury-yes-button'} colorOne="#DE0000" colorTwo="#DE0000"/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 30,
        marginLeft: 30,

        width: 200,
        // backgroundColor: 'red',

        fontFamily: "GilroyBold",
        fontSize: 30,
        color: "#444444",
        letterSpacing: -0.5
    },
    noButton: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .58
    },
    continue: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .15
    }

})
        
export default CollisionInjuryCheck


{/* <ContinueButton nextPage={'create-collision-injury-report'} buttonText={'Yes'} pageName={'collision-check-injury-yes-button'} />
            <Button onPress={() => navigation.navigate('check-property-accident')}>No</Button>
        </View>
    ) */}