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
                    <View style={{ marginTop: 20 }}>
                        <Text style={Template.subTitle}>OTHER LICENSE NUMBER</Text>
                        <Input
                            onPressIn={() => setActive("num")}
                            onEndEditing={() => setActive("num")}
                            style={determineStyle("num").style}
                            size={'large'}
                            placeholder={`LICENSE NUMBER`}
                            placeholderTextColor={determineStyle("num").color}
                            textStyle={{color: determineStyle("num").color, fontSize: 18}}
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

                    <View >
                        <Text style={Template.subTitle}>OTHER PERSON'S FIRST NAME</Text>
                        <Input
                            onPressIn={() => setActive("first")}
                            onEndEditing={() => setActive("first")}
                            style={determineStyle("first").style}
                            size={'large'}
                            placeholder={`Firstname`}
                            placeholderTextColor={determineStyle("first").color}
                            textStyle={{color: determineStyle("first").color, fontSize: 18}}
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

                    <View>
                    <Text style={Template.subTitle}>OTHER PERSON'S LAST NAME</Text>
                        <Input
                            onPressIn={() => setActive("last")}
                            onEndEditing={() => setActive("last")}
                            style={determineStyle("last").style}
                            size={'large'}
                            placeholder={`Lastname`}
                            placeholderTextColor={determineStyle("last").color}
                            textStyle={{color: determineStyle("last").color, fontSize: 18}}
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

                    <View >
                    <Text style={Template.subTitle}>OTHER PERSON'S PHONE NUMBER</Text>
                        <Input
                            onPressIn={() => setActive("phone")}
                            onEndEditing={() => setActive("phone")}
                            style={determineStyle("phone").style}
                            size={'large'}
                            placeholder={`1234567890`}
                            placeholderTextColor={determineStyle("phone").color}
                            textStyle={{color: determineStyle("phone").color, fontSize: 18}}
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

                    <View >
                    <Text style={Template.subTitle}>OTHER PERSON'S HOME ADDRESS</Text>
                        <Input
                            onPressIn={() => setActive("home")}
                            onEndEditing={() => setActive("home")}
                            style={determineStyle("home").style}
                            size={'large'}
                            placeholder={`123 Example Avenue, City, State`}
                            placeholderTextColor={determineStyle("home").color}
                            textStyle={{color: determineStyle("home").color, fontSize: 18}}
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
                    <View style={{ marginTop: 20 }}>
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE PROVIDER</Text>
                        <Input
                            onPressIn={() => setActive("prov")}
                            onEndEditing={() => setActive("prov")}
                            style={determineStyle("prov").style}
                            size={'large'}
                            placeholder={`Please Enter Other Party's Insurance Policy Provider`}
                            placeholderTextColor={determineStyle("prov").color}
                            textStyle={{color: determineStyle("prov").color, fontSize: 18}}
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
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE POLICTY NUMBER</Text>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`12345678901234567`}
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