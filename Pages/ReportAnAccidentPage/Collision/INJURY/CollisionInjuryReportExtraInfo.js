import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { DRIVER_CREATE_INJURY_ACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, injuryDataState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Gradient from "../../../../Components/Gradient";
import DynamicInput from "../../../../Components/DynamicInput";

import Template from "../../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryReportExtraInfo = ({collision}) => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)
    const [collisionData] = useRecoilState(collisionDataState)
    const [driverCreateInjuryReport, { loading: loading2, error: error2, data: data2 }] = useMutation(DRIVER_CREATE_INJURY_ACCIDENT) 
    const [completed, setCompleted] = useState(false)

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
        console.log(collisionData.id)
        console.log(accidentData.id)
        if (collision){
            return driverCreateInjuryReport({
                variables: {
                    accidentId: accidentData.id,
                    collisionAccidentId: collisionData.id,
                    contact_info: injuryData.contact_info,
                    extra_info: injuryData.extra_info,
                    injured_areas: injuryData.injured_areas,
                    injury_report: injuryData.injury_report,
                    pain_level: injuryData.pain_level,
                    specific_pictures: injuryData.specific_pictures
                }
            })
        }
        else{
            return driverCreateInjuryReport({
                variables: {
                    accidentId: accidentData.id,
                    contact_info: injuryData.contact_info,
                    extra_info: injuryData.extra_info,
                    injured_areas: injuryData.injured_areas,
                    injury_report: injuryData.injury_report,
                    pain_level: injuryData.pain_level,
                    specific_pictures: injuryData.specific_pictures
                }
            })
        }
    }

    const handleSubmit = async () => {
        return await handleMutation()
            .then( (resolved) => {
                setInjuryData({
                    ...injuryData, 
                    id: resolved.data.driverCreateInjuryAccident.id
                })
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
                                   pain_level: pain_level
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
                        <View style={{marginLeft: 30, marginTop: -90}}>
                            <ContinueButton nextPage={whichContinue()} buttonText={'Done'} pageName={'collision-injury-report-extra-info-continue-button'} />
                        </View>
                    ) : null}
                </View>
        </View>
    )
}

export default CollisionInjuryReportExtraInfo