import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import noButton from "./buttons/noButton"
import Gradient from "../../../Components/Gradient"


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

const CollisionAccidentInformation = () => {
    const [driverLicenseAnswer, setDriverLicenseAnswer] = useState(null)
    const [driverInsuranceAnswer, setDriverInsuranceAnswer] = useState(null)
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)

    const handleInput = (id, information) => {
        const input = { ...collisionData };
		input[id] = information;
		setCollisionData(input);
    }

    const handleDriverLicense = (answer) => {
        if (answer === 'yes') {
            setDriverLicenseAnswer('yes')
        }

        if (answer === 'no') {
            setDriverLicenseAnswer('no')
        } 
    }

    const renderDriverLicense = () => {
        if (driverLicenseAnswer === 'yes') {
            return (
                <View>
                    <Text>Excellent! Continue to the next step</Text>
                </View>
            )
        }

        if (driverLicenseAnswer === 'no') {
            return (
                <View>
                    <View style={{ marginTop: "0%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's License Number`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={driverLicense => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            driver_license_number: driverLicense
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's First Name`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={firstname => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            firstname: firstname 
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Last Name`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={lastname => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            lastname: lastname 
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Phone Number`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={phoneNumber => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            phone_number: phoneNumber 
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Address`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={address => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            address: address 
                                        } 
                                    })
                                }}
                            />
                    </View>
                </View>
            )
        }
    }

    const renderInsuranceInput = () => {
        if (driverInsuranceAnswer === 'yes') {
            return (
                <View>
                    <Text>Excellent! Continue to the next step</Text>
                </View>
            )
        }

        if (driverInsuranceAnswer === 'no') {
            return (
                <View>
                    <View style={{ marginTop: "0%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Insurance Policy Provider`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={insuranceProvider => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            insurance_provider: insuranceProvider
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "0%" }}>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Insurance Policy Number`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={insurance_policy_number => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            insurance_policy_number: insurance_policy_number
                                        } 
                                    })
                                }}
                            />
                    </View>
                </View>
            )
        }
    }

 

    const renderInsuranceInformationButtons = () => {
        return (
            <View style={{ marginTop: "-20%" }}>
                <Text>Did the other party's let you take a picture of their insurance card?</Text>
                <Button onPress={() => {
                    setDriverInsuranceAnswer('yes')
                    setCollisionData({
                        ...collisionData,
                        contact_info: {
                            ...collisionData.contact_info,
                            insurance_policy_number: 'Have Picture'
                        }
                    })
                }}> yes </Button>
                <Button onPress={() => setDriverInsuranceAnswer('no')}> no </Button>
            </View>
        )
    }

    const [isActive, setActive] = useState(false)

    const determineStyle = () => {
        if (isActive) {
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else {
            return{
                style: dynamicStyles.inactiveInput,
                color: '#adadad'
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={{ height: '150%' }}>
            <Banner />
            <Text> Did the other party's let you take a picture of their drivers license? </Text>
            {/* <Button onPress={() => {
                handleDriverLicense('yes')
                setCollisionData({
                    ...collisionData,
                    contact_info: {
                        ...collisionData.contact_info,
                        driver_license_number: 'Have Picture'
                    }
                })
            }}> yes </Button> */}
            {/* <Button onPress={() => handleDriverLicense('no')}> no </Button> */}

            <TouchableOpacity>
                <View>
                    <Gradient 
                        colorOne="#534FFF" 
                        colorTwo="#15A1F1" 
                        style={{
                            width: 80, 
                            height: 80,
                            borderRadius: 40,
                            justifyContent: 'center'
                        }}
                    >
                        <Text>Yes</Text>
                    </Gradient>
                </View>
            </TouchableOpacity>


            <TouchableOpacity>
                <View>
                    <Gradient 
                        colorOne="#800000" 
                        colorTwo="#C00000" 
                        style={{
                            width: 80, 
                            height: 80,
                            borderRadius: 40,
                            justifyContent: 'center'
                        }}
                    >
                        <Text>No</Text>
                    </Gradient>
                </View>
            </TouchableOpacity>


            {driverLicenseAnswer !== null ? (renderDriverLicense()) : null}
            {collisionData.contact_info.driver_license_number !== null && 
                collisionData.contact_info.firstname !== null && 
                collisionData.contact_info.lastname !== null && 
                collisionData.contact_info.address !== null && 
                collisionData.contact_info.phone_number !== null ||
                driverLicenseAnswer === 'yes' ? (renderInsuranceInformationButtons()) : null}
            {driverInsuranceAnswer !== null ? (renderInsuranceInput()) : null}
            {driverInsuranceAnswer === 'yes' && driverLicenseAnswer === 'yes' || 
                collisionData.contact_info.insurance_policy_number !== null && 
                collisionData.contact_info.insurance_provider !== null ? (<View style={{ marginTop: '-125%' }}><ContinueButton nextPage={'collision-extra-info'} pageName={'collision-accident-information-continue-button'} buttonText={'Continue'} /></View>) : null}
        </ScrollView>
    )
}

export default CollisionAccidentInformation