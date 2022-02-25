import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATEINJURYREPORTFORCOLLISION } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, collisionIdState, injuryDataState } from "../../../Recoil/atoms";
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

const CollisionInjuryReportExtraInfo = () => {
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)
    const [collisionId] = useRecoilState(collisionIdState)
    const [driverCreateInjuryReportForCollision, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATEINJURYREPORTFORCOLLISION) 
    const [completed, setCompleted] = useState(false)
    const [isActive, setActive] = useState(false)

    const handleSubmit = async () => {
        await driverCreateInjuryReportForCollision({
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

    useEffect(() => {
        if (!loading && data) {
            setInjuryData(data.driverCreateInjuryAccident)
            setCompleted(true)
        }
    }, [data])

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

            <View style={{ marginTop: "0%" }}>
                    <Text>What is the injured partys pain level?</Text>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Please Enter The Injured Partys Pain Level`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={pain_level => {
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

                <View style={{ marginTop: "0%" }}>
                    <Text>Is there any extra info you would like to add?</Text>
                        <Input
                            onPressIn={() => setActive(true)}
                            onEndEditing={() => setActive(false)}
                            style={determineStyle().style}
                            size={'large'}
                            placeholder={`Extra Info`}
                            placeholderTextColor={determineStyle().color}
                            textStyle={{color: determineStyle().color, fontSize: 18}}
                            onChangeText={extra_info => {
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

                <View>
                    <Button onPress={handleSubmit}>Submit</Button>
                </View>

                <View>
                    {completed === true ? (<ContinueButton nextPage={'collision-injury-check-again'} buttonText={'Continue'} pageName={'collision-injury-report-extra-info-continue-button'} />) : null}
                </View>
        </View>
    )
}

export default CollisionInjuryReportExtraInfo