import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Toggle, Input } from '@ui-kitten/components';
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Gradient from "../../../Components/Gradient";

import Template from "../../../Styles/RAA/RAATemplateStyles"
import {RAACollisionInfoStyles} from "../../../Styles/RAA/RAACollisionInfo"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryReportInformation = () => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    const [medicalCheck, setMedicalCheck] = useState(false)
    const [immediateCheck, setImmediateCheck] = useState(false)

    const [isActive, setActive] = useState("none")

    const determineStyle = (type) => {
        if (isActive == type) {
            return{
                style: Template.activeInput,
                color: 'white'
            }
        }
        else {
            return{
                style: Template.inactiveInput,
                color: '#adadad'
            }
        }
    }

    const onMedicalAttentionChange = (isChecked) => {
        setMedicalCheck(isChecked);

        setInjuryData({
            ...injuryData,
            contact_info: {
                ...injuryData.contact_info
            },
            specific_pictures: {
                ...injuryData.specific_pictures
            },
            medical_attention: !medicalCheck
        })
    };

    const onImmediateMedicalChange = (isChecked) => {
        setImmediateCheck(isChecked);

        setInjuryData({
            ...injuryData,
            contact_info: {
                ...injuryData.contact_info
            },
            specific_pictures: {
                ...injuryData.specific_pictures
            },
            immediate_attention: !immediateCheck
        })
    };

    const [q1, setQ1] = useState("None")
    const [q2, setQ2] = useState("None")

    const determineOutline = (yesNo, num) => {
        if (num == 1){
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
        else{
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
    }

    const determineSize = (yesNo, num) => {
        if (num == 1){
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
        else{
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
        
    }

    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: 1500}}>
            <Text style={Template.questionText}>Was nedical attention needed?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("yes")
                            setMedicalCheck(true)
                        }}
                    >
                        <View style={determineOutline("yes", 1)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("yes", 1)}
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
                            setQ1("no")
                            setMedicalCheck(false)
                        }}
                    >
                        <View style={determineOutline("no", 1)}>
                            <Gradient 
                                colorOne="#DE0000" 
                                colorTwo="#DE0000" 
                                style={determineSize("no", 1)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            {/* <Toggle checked={medicalCheck} onChange={onMedicalAttentionChange} /> */}

            <Text style={Template.questionText}>Was there immediate medical attention needed?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ2("yes")
                            setImmediateCheck(true)
                        }}
                    >
                        <View style={determineOutline("yes", 2)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("yes", 2)}
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
                            setQ2("no")
                            setImmediateCheck(false)
                        }}
                    >
                        <View style={determineOutline("no", 2)}>
                            <Gradient 
                                colorOne="#DE0000" 
                                colorTwo="#DE0000" 
                                style={determineSize("no", 2)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            {/* <Toggle checked={immediateCheck} onChange={onImmediateMedicalChange} /> */}

            <View style={{ marginTop: "0%" }}>
                <Text style={Template.questionText}>What was the injury they recieved?</Text>
                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                    <Input
                        onPressIn={() => setActive("type")}
                        style={determineStyle("type").style}
                        size={'large'}
                        placeholder={`Please Enter The Type Of Injury They Recieved`}
                        placeholderTextColor={determineStyle("type").color}
                        textStyle={{color: determineStyle("type").color, fontSize: 18}}
                        onChangeText={injury => {
                            setInjuryData({
                                ...injuryData,
                                contact_info: {
                                    ...injuryData.contact_info
                                },
                                specific_pictures: {
                                    ...injuryData.specific_pictures
                                },
                                injury: injury
                            })
                            }}
                        />
                </View>
            </View>

                <View style={{ marginTop: 0}}>
                    <Text style={Template.questionText}>What was the injured partys firstname?</Text>
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                            onPressIn={() => setActive("first")}
                            style={determineStyle("first").style}
                            size={'large'}
                            placeholder={`Please Enter The injured Partys Firstname`}
                            placeholderTextColor={determineStyle("first").color}
                            textStyle={{color: determineStyle("first").color, fontSize: 18}}
                            onChangeText={firstname => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        firstname: firstname
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                              }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 30}}>
                    <Text style={Template.questionText}>What was the injured partys lastname?</Text>
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                            onPressIn={() => setActive("last")}
                            style={determineStyle("last").style}
                            size={'large'}
                            placeholder={`Please Enter The Injured Partys Firstname`}
                            placeholderTextColor={determineStyle("last").color}
                            textStyle={{color: determineStyle("last").color, fontSize: 18}}
                            onChangeText={lastname => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        lastname: lastname
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                              }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 30}}>
                    <Text style={Template.questionText}>What was the injured partys phone number?</Text>
                        <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                            <Input
                                onPressIn={() => setActive("phone")}
                                style={determineStyle("phone").style}
                                size={'large'}
                                placeholder={`Please Enter The Injured Partys Firstname`}
                                placeholderTextColor={determineStyle("phone").color}
                                textStyle={{color: determineStyle("phone").color, fontSize: 18}}
                                onChangeText={phone_number => {
                                    setInjuryData({
                                        ...injuryData,
                                        contact_info: {
                                            ...injuryData.contact_info,
                                            phone_number: phone_number
                                        },
                                        specific_pictures: {
                                            ...injuryData.specific_pictures
                                        }
                                    })
                                }}
                            />
                        </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={Template.questionText}>What was the injured partys address?</Text>
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                                onPressIn={() => setActive("addy")}
                                style={determineStyle("addy").style}
                                size={'large'}
                                placeholder={`Please Enter The Injured Partys Address`}
                                placeholderTextColor={determineStyle("addy").color}
                                textStyle={{color: determineStyle("addy").color, fontSize: 18}}
                                onChangeText={address => {
                                    setInjuryData({
                                        ...injuryData,
                                        contact_info: {
                                            ...injuryData.contact_info,
                                            address: address
                                        },
                                        specific_pictures: {
                                            ...injuryData.specific_pictures
                                        }
                                    })
                                }}
                            />
                        </View>
                </View>

                {injuryData.contact_info.firstname !== null && injuryData.contact_info.lastname !== null && injuryData.contact_info.phone_number !== null && injuryData.contact_info.address !== null ? 
                (
                    <View style={{marginLeft: 30, marginTop: 40}}>
                        <ContinueButton nextPage={'collision-injury-report-extra-info'} buttonText={'Done'} pageName={'collision-injury-report-information-continue-button'}/>
                    </View>
                ) : null}
            </ScrollView>
        </View>
    )
}

export default CollisionInjuryReportInformation