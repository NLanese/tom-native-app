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

const PropertyAccidentSafetyEquipment = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    return (
        <View>
            <Banner />
            <Text>Test Property Accident Safety Equipment</Text>

            <View>
                <Text>Were you using any safety equipment?</Text>
                <Input 
                    size={'large'}
                    placeholder={`Safety Equipment`}
                    onChangeText={safetyEquipment => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                            },
                            safety_equipment: {
                                ...propertyData.safety_equipment,
                                safetyEquipment: safetyEquipment
                            }
                        })
                    }}
                />
            </View>

            <View>
                {propertyData.safety_equipment.safetyEquipment ? (<ContinueButton nextPage={'property-accident-extra-info'} buttonText={'Okay'} pageName={'property-accident-safety-equipment-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default PropertyAccidentSafetyEquipment