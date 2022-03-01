import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Toggle, Input } from '@ui-kitten/components';
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, collisionIdState, injuryDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const InjuryReportInformation = () => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    const [medicalCheck, setMedicalCheck] = useState(false)
    const [immediateCheck, setImmediateCheck] = useState(false)

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

      console.log(injuryData)

      return (
        <View>
            <Banner />
            <Text>Did they need medical attention?</Text>
            <Toggle checked={medicalCheck} onChange={onMedicalAttentionChange} />

            <Text>Did they need immediate medical attention?</Text>
            <Toggle checked={immediateCheck} onChange={onImmediateMedicalChange} />

            <View style={{ marginTop: "0%" }}>
                <Text>What was the injury they recieved?</Text>
                    <Input
                        onPressIn={() => setActive(true)}
                        onEndEditing={() => setActive(false)}
                        style={determineStyle().style}
                        size={'large'}
                        placeholder={`Please Enter The Type Of Injury They Recieved`}
                        placeholderTextColor={determineStyle().color}
                        textStyle={{color: determineStyle().color, fontSize: 18}}
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

                <View style={{ marginTop: "-10%" }}>
                    <Text>What was the injured partys firstname?</Text>
                        <Input
                        onPressIn={() => setActive(true)}
                        onEndEditing={() => setActive(false)}
                        style={determineStyle().style}
                        size={'large'}
                        placeholder={`Please Enter The injured Partys Firstname`}
                        placeholderTextColor={determineStyle().color}
                        textStyle={{color: determineStyle().color, fontSize: 18}}
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

            <View style={{ marginTop: "-10%" }}>
                <Text>What was the injured partys lastname?</Text>
                    <Input
                        onPressIn={() => setActive(true)}
                        onEndEditing={() => setActive(false)}
                        style={determineStyle().style}
                        size={'large'}
                        placeholder={`Please Enter The Injured Partys Firstname`}
                        placeholderTextColor={determineStyle().color}
                        textStyle={{color: determineStyle().color, fontSize: 18}}
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

            <View style={{ marginTop: "-10%" }}>
                <Text>What was the injured partys phone number?</Text>
                    <Input
                        onPressIn={() => setActive(true)}
                        onEndEditing={() => setActive(false)}
                        style={determineStyle().style}
                        size={'large'}
                        placeholder={`Please Enter The Injured Partys Firstname`}
                        placeholderTextColor={determineStyle().color}
                        textStyle={{color: determineStyle().color, fontSize: 18}}
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

            <View style={{ marginTop: "-10%" }}>
                <Text>What was the injured partys address?</Text>
                    <Input
                        onPressIn={() => setActive(true)}
                        onEndEditing={() => setActive(false)}
                        style={determineStyle().style}
                        size={'large'}
                        placeholder={`Please Enter The Injured Partys Address`}
                        placeholderTextColor={determineStyle().color}
                        textStyle={{color: determineStyle().color, fontSize: 18}}
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

            {injuryData.contact_info.firstname !== null && injuryData.contact_info.lastname !== null && injuryData.contact_info.phone_number !== null && injuryData.contact_info.address !== null ? (<ContinueButton nextPage={'injury-report-extra-info'} buttonText={'Continue'} pageName={'injury-report-information-continue-button'}/>) : null}
          </View>
      )
}

export default InjuryReportInformation