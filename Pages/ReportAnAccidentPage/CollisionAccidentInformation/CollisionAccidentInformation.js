import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

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

    const handleInsuranceInformation = (answer) => {
        if (answer === 'yes') {
            setDriverInsuranceAnswer('yes')
        }

        if (answer === 'no') {
            setDriverInsuranceAnswer('no')
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
                    <View style={{ marginTop: "2%" }}>
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
                                            driver_license: driverLicense
                                        } 
                                    })
                                }}
                            />
                    </View>

                    <View style={{ marginTop: "10%" }}>
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
                    <Text>No</Text>
                </View>
            )
        }
    }

    console.log(collisionData)

    const renderInsuranceInformationButtons = () => {
        return (
            <View>
                <Text>Did the other driver let you take a picture of their insurance card?</Text>
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
        <View>
            <Banner />
            <Text> Did the other driver let you take a picture of their drivers license? </Text>
            <Button onPress={() => {
                handleDriverLicense('yes')
                setCollisionData({
                    ...collisionData,
                    contact_info: {
                        ...collisionData.contact_info,
                        driver_license: 'Have Picture'
                    }
                })
            }}> yes </Button>
            <Button onPress={() => handleDriverLicense('no')}> no </Button>
            {driverLicenseAnswer !== null ? (renderDriverLicense()) : null}
            {collisionData.contact_info.driver_license !== null ? (renderInsuranceInformationButtons()) : null}
            {driverInsuranceAnswer !== null ? (renderInsuranceInput()) : null}
            {driverInsuranceAnswer !== null && driverLicenseAnswer !== null ? (<ContinueButton nextPage={'collision-extra-details'} pageName={'collision-accident-information-continue-button'} buttonText={'Continue'} />) : null}
        </View>
    )
}

export default CollisionAccidentInformation