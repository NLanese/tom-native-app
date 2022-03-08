import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { DRIVERCREATEINJURYREPORTFORCOLLISION, DRIVERCREATEINJURYACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, collisionIdState, injuryDataState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Gradient from "../../../../Components/Gradient";
import DynamicInput from "../../../../Components/DynamicInput";

import Template from "../../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryReportExtraInfo = ({collision}) => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)
    const [collisionId] = useRecoilState(collisionIdState)
    const [driverCreateInjuryReportForCollision, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATEINJURYREPORTFORCOLLISION) 
    const [driverCreateInjuryReport, { loading: loading2, error: error2, data: data2 }] = useMutation(DRIVERCREATEINJURYACCIDENT) 
    const [completed, setCompleted] = useState(false)
    const [isActive, setActive] = useState(false)

    const whichContinue = () => {
        if (collision){
            return('collision-injury-check-again')
        }
        else{
            return('injury-check-again')
        }
    }

    const handleMutation =  () => {
        console.log(injuryData)
        if (collision){
            return driverCreateInjuryReportForCollision({
                variables: {
                    collisionAccidentId: collisionId,
                    accidentId: accidentData.id,
                    medicalAttention: injuryData.medical_attention.toString(),
                    immediateAttention: injuryData.immediate_attention.toString(),
                    injury: injuryData.injury,
                    contactInfo: injuryData.contact_info,
                    specificPictures: injuryData.specific_pictures,
                    painLevel: injuryData.pain_level,
                    extraInfo: injuryData.extra_info
                }
            })
        }
        else{
            return driverCreateInjuryReport({
                variables: {
                    accidentId: accidentData.id,
                    medicalAttention: injuryData.medical_attention.toString(),
                    immediateAttention: injuryData.immediate_attention.toString(),
                    injury: injuryData.injury,
                    contactInfo: injuryData.contact_info,
                    specificPictures: injuryData.specific_pictures,
                    painLevel: injuryData.pain_level,
                    extraInfo: injuryData.extra_info
                }
            })
        }
    }

    const handleSubmit = () => {
        return handleMutation()
            .then( (resolved) => {
                setCompleted(true)
            })
    }

    return (
        <View>
            <Banner />

            <View style={{ marginTop: "0%" }}>
                    <Text style={Template.questionText}>Could you describe the Injured Individual's pain level on a scale of one to ten?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
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

                            placeholder={"Number from 1 to 10"}
                            onChange={pain_level => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    },
                                    pain_level: parseInt(pain_level)
                                })
                              }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: "0%" }}>
                    <Text style={Template.questionText}>Is there any extra info you would like to add?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
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

                            placeholder={"Extra Inforrmation"}
                            onChange={extra_info => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    },
                                    extra_info: extra_info
                                })
                              }}
                        />
                    </View>
                </View>

                <View style={{marginLeft: 30, marginTop: 70}}>
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

                <View>
                    {completed === true ? (
                        <View style={{marginLeft: 30, marginTop: -100}}>
                            <ContinueButton nextPage={whichContinue()} buttonText={'Done'} pageName={'collision-injury-report-extra-info-continue-button'} />
                        </View>
                    ) : null}
                </View>
        </View>
    )
}

export default CollisionInjuryReportExtraInfo