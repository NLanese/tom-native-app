import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const dynamicStyles = StyleSheet.create({
    activeInput: {
        backgroundColor: "#ccc",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        // height: '%',
        marginLeft: 30,
        marginBottom: 20
    },
    inactiveInput: {
        backgroundColor: "#ccc",
        borderColor: "#ccc",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        // height: '13%',
        marginLeft: 30,
        marginBottom: 20
    }
})

const PropertyAccidentInformation = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    return (
        <View>
            <Banner />
            <Text>TEST FROM PROPERTY ACCIDENT INFORMATION</Text>

            <View>
                <Text>What did you hit?</Text>
                <Input 
                    size={'large'}
                    placeholder={`What did you hit?`}
                    onChangeText={objectHit => {
                        setPropertyData({
                            ...propertyData,
                            object_hit: objectHit
                        })
                    }}
                />
            </View>

            <View>
                <Text>What is the address of the property you damaged?</Text>
                <Input 
                    size={'large'}
                    placeholder={`Address`}
                    onChangeText={address => {
                        setPropertyData({
                            ...propertyData,
                            address: address
                        })
                    }}
                />
            </View>
            
            <View>
                {propertyData.object_hit && propertyData.address ? (<ContinueButton nextPage={'property-accident-contact-information'} buttonText={'Continue'} pageName={'property-accident-information-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default PropertyAccidentInformation