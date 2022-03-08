import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, CheckBox } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import DynamicInput from "../../../Components/DynamicInput";

import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Gradient from "../../../Components/Gradient"

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
                    <View style={{ marginTop: 20, }}>
                        
                            <View style={{marginLeft: 30, marginBottom: 10}}>
                            <Text style={Template.subTitle}>OTHER PERSON'S LICENSE NUMBER</Text>
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

                                    placeholder={"12345-12345-12345-12345"}
                                    onChange={driverLicense => {
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
                    </View>

                    <View style={{marginLeft: 30, marginBottom: 10}}>
                        <Text style={Template.subTitle}>OTHER PERSON'S FIRST NAME</Text>
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

                                placeholder={"John"}
                                onChange={firstname => {
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

                    <View style={{marginLeft: 30, marginBottom: 10}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S LAST NAME</Text>
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

                            placeholder={"Smith"}
                            onChange={firstname => {
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

                    <View style={{marginLeft: 30, marginBottom: 10}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S PHONE NUMBER</Text>
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

                            placeholder={"123-456-7890"}
                            onChange={phoneNumber => {
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

                    <View style={{marginLeft: 30}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S HOME ADDRESS</Text>
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

                            placeholder={"123 Streetname, Township"}
                            onChange={name => {
                                handleInput('name', name)
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
                    <View style={{ marginBottom: 10, marginLeft: 30, marginTop: 10}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE PROVIDER</Text>
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

                            placeholder={"Example Insurance Company"}
                            onChange={insuranceProvider => {
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

                    <View style={{ marginLeft: 30 }}>
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE POLICTY NUMBER</Text>
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

                            placeholder={"12345-12345-12345-12345"}
                            onChange={insurance_policy_number => {
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
                return ({ borderColor: "#0052A2", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize2 = (yesNo) => {
        if (yesNo == q2){
            if (yesNo == "yes"){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return (RAACollisionInfoStyles.buttonPressed)
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
                                    style={determineSize2("yes")}
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
                                    style={determineSize2("no")}
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

    const determineStyle = (type) => {
        if (isActive == type){
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else{
            return{
                style: dynamicStyles.inactiveInput,
                color: '#aaa'
            }
        }
    }

    const [q1, setQ1] = useState("None")

    const determineOutline = (yesNo) => {
        if (yesNo == q1){
            if (yesNo == "yes"){
                return ({ borderColor: "#0052A2", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize = (yesNo) => {
        if (yesNo == q1){
            if (yesNo == "yes"){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return (RAACollisionInfoStyles.buttonPressed)
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    let height = "140%"
    if (q2 == "no" && q1 == "no"){
        height = "180%"
    }
// ------------ Contact -------------

    const [whoHitFirst, setWhoHitFirst] = useState("no one")

    const determineChecked = (meThem) => {
        if (whoHitFirst == meThem){
            return true
        }
    }

    const handleCheck = (meThem) => {
        setWhoHitFirst(meThem)
        setCollisionData({...collisionData, initiated: meThem})
    }


    return (
        <ScrollView contentContainerStyle={{ height: height }}>
            <Banner />
            <Text style={RAACollisionInfoStyles.questionText}>Who initiated the contact?</Text>

            <View style={{flexDirection: 'row', marginLeft: 30, width: maxWidth - 60, marginTop: 15}}>
                <CheckBox
                    checked={determineChecked("Other Party Hit Me")}
                    onChange={() => handleCheck("Other Party Hit Me")}
                >
                    <Text>They hit me</Text>
                </CheckBox>
                <CheckBox
                    checked={determineChecked("I caused the accident")}
                    onChange={() => handleCheck("I caused the accident")}
                >
                    <Text>I hit them</Text>
                </CheckBox>
            </View>

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
                                style={determineSize("yes")}
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
                                style={determineSize("no")}
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
                collisionData.contact_info.insurance_provider !== null ? (<View style={{ marginTop: 70, marginLeft: 30 }}><ContinueButton nextPage={'collision-extra-info'} nextSite={'Collsion Extra Information'} pageName={'collision-accident-information-continue-button'} buttonText={'Done'} /></View>) : null}
        </ScrollView>
    )
}

export default CollisionAccidentInformation