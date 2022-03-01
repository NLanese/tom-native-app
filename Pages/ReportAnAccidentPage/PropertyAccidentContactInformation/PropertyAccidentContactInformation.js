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

const PropertyAccidentContactInformation = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    return (
        <View>
            <Banner />
            <Text>Test from property accident contact information</Text>

            <View>
                <Text>Owner of damage property first name?</Text>
                <Input 
                    size={'large'}
                    placeholder={`First name`}
                    onChangeText={firstname => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                                firstname: firstname
                            }
                        })
                    }}
                />
            </View>

            <View>
                <Text>Owner of damage property last name?</Text>
                <Input 
                    size={'large'}
                    placeholder={`First name`}
                    onChangeText={lastname => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                                lastname: lastname
                            }
                        })
                    }}
                />
            </View>

            <View>
                <Text>Owner of damage property phone number?</Text>
                <Input 
                    size={'large'}
                    placeholder={`Phone Number`}
                    onChangeText={phoneNumber => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                                phoneNumber: phoneNumber
                            }
                        })
                    }}
                />
            </View>

            <View>
                <Text>Owner of damage property address?</Text>
                <Input 
                    size={'large'}
                    placeholder={`Address`}
                    onChangeText={address => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                                address: address
                            }
                        })
                    }}
                />
            </View>

            <View>
                {propertyData.contact_infomation.firstname && propertyData.contact_infomation.lastname && propertyData.contact_infomation.address && propertyData.contact_infomation.phoneNumber ? (<ContinueButton nextPage={'property-accident-safety-equipment'} buttonText={'Continue'} pageName={'property-accident-contact-information-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default PropertyAccidentContactInformation