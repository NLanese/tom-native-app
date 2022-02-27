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

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"


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

 // ---------- INSURANCE------------
    const [q2, setQ2] = useState("none")

    const determineOutline2 = (yesNo) => {
        if (yesNo == q2){
            if (yesNo == "yes"){
                return ({ borderColor: "#15A1F1", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const renderInsuranceInformationButtons = () => {
        return (
            <View>
                <Text style={RAACollisionInfoStyles.questionText}>Was the other party willing to let you take a picture of their insurance card?</Text>

                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setDriverInsuranceAnswer('yes')
                                setQ2("yes")
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        driver_license_number: 'Have Picture'
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline2("yes")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={RAACollisionInfoStyles.button}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setDriverInsuranceAnswer('no')
                                setQ2("no")
                            }}
                        >
                            <View style={determineOutline2("no")}>
                                <Gradient 
                                    colorOne="#DE0000" 
                                    colorTwo="#DE0000" 
                                    style={RAACollisionInfoStyles.button}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>



            </View>
        )
    }
 // ---------- INSURANCE------------


    const [isActive, setActive] = useState(false)

 // ---------- LICENSE ------------

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

    const [q1, setQ1] = useState("None")

    const determineOutline = (yesNo) => {
        if (yesNo == q1){
            if (yesNo == "yes"){
                return ({ borderColor: "#15A1F1", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    return (
        <ScrollView contentContainerStyle={{ height: '150%' }}>
            <Banner />
            <Text style={RAACollisionInfoStyles.questionText}>Was the other party willing to let you take a picture of their license?</Text>

            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            handleDriverLicense('yes')
                            setQ1("yes")
                            setCollisionData({
                                ...collisionData,
                                contact_info: {
                                    ...collisionData.contact_info,
                                    driver_license_number: 'Have Picture'
                                }
                            })
                        }
                    }>
                        <View style={determineOutline("yes")}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={RAACollisionInfoStyles.button}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={RAACollisionInfoStyles.noButtonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            handleDriverLicense('no')
                            setQ1("no")
                        }}
                    >
                        <View style={determineOutline("no")}>
                            <Gradient 
                                colorOne="#DE0000" 
                                colorTwo="#DE0000" 
                                style={RAACollisionInfoStyles.button}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>


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
                collisionData.contact_info.insurance_provider !== null ? (<View style={{ marginTop: 70, marginLeft: 30 }}><ContinueButton nextPage={'collision-extra-info'} pageName={'collision-accident-information-continue-button'} buttonText={'Done'} /></View>) : null}
        </ScrollView>
    )
}

export default CollisionAccidentInformation