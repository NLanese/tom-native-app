import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVER_CREATE_PROPERTY_ACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import Template from "../../../Styles/RAA/RAATemplateStyles";

import Gradient from "../../../Components/Gradient"
import DynamicInput from '../../../Components/DynamicInput'

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PropertyAccidentExtraInformation = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)
    const [driverCreatePropertyAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVER_CREATE_PROPERTY_ACCIDENT)
    const [complete, setComplete] = useState(false)

    const [isActive, setActive] = useState(false)


    const handleSubmit = async () => {
        await driverCreatePropertyAccident({
            variables: {
                accidentId: propertyData.accidentId,
                contact_info: propertyData.contact_info,
                damage_report: propertyData.damage_report,
                defective_equip: propertyData.defective_equip,
                safety_equip: propertyData.safety_equip,
                specific_pictures: propertyData.specific_pictures,
                extra_info: propertyData.extra_info,
                types_of_damage: propertyData.types_of_damage
            }
        }).then( (resolved) => {
            console.log(resolved)
            setPropertyData({
                ...propertyData,
                id: resolved.data.driverCreatePropertyAccident.id
            })
            setComplete(true)
        })
    }


    return (
        <View>
            <Banner />
            <Text style={Template.questionText}>Enter any Extra Information in the space below</Text>

            <View style={{marginTop: 30, marginBottom: 30, marginLeft: 30, width: maxWidth - 60}}>
            <DynamicInput 
                    activeColorOne="#534FFF" 
                    activeColorTwo="#15A1F1"
                    activeTextStyle={Template.activeTextStyle}

                    height={50}
                    width={maxWidth - 60}

                    borderLeftRightWidth={6}
                    borderTopBottomWidth={6}
                    borderRadius={20}

                    inactiveColor="#ddd" 
                    inactiveTextStyle={Template.inactiveTextStyle}

                    placeholder={"Any Extra Information Here"}
                    onChange={content => {
                        setPropertyData({
                            ...propertyData,
                            extra_info: content
                    })
                }}
                />
            </View>

            <View style={{marginLeft: 30, marginTop: 300}}>
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Gradient
                        colorOne={"#534FFF"}
                        colorTwo={"#15A1F1"}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={Template.buttonText}>Submit</Text>
                    </Gradient>
                </TouchableOpacity>
            </View>

            <View style={{marginLeft: 30, marginTop: -160}}>
                {complete === true ? 
                <View style={{marginTop: 0}}>
                    <ContinueButton nextPage={'post-property-instructions'} nextSite={'Post Property Damage Instructions'} buttonText={'Done'} pageName={'property-accident-extra-information-continue-button'} />
                </View>
                 : null} 
            </View>
        </View>
    )
}

export default PropertyAccidentExtraInformation