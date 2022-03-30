import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import { Button, Input } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import Gradient from "../../../Components/Gradient";
import DynamicInput from "../../../Components/DynamicInput";

import { DRIVER_CREATE_SELF_INJURY_ACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { selfInjuryDataState, accidentDataState, userState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const UserInjuryExtraInformation = ({accident}) => {
    const [driverCreateSelfInjuryAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVER_CREATE_SELF_INJURY_ACCIDENT)

    let route = 'check-self-car-damage'
    let site = "Check Own Car Damage"
    if (accident){
        route = "check-self-accident-damage"
        site = "Check Own Car Damaged after Accident"
    }
    // const [ ----, { loading: loading, error: error, data: data }] = useMutation( )

    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)
    const [accidentState, setAccidentState] = useRecoilState(accidentDataState)
    const [user] = useRecoilState(user.token)

    console.log(userState.token)


    const [isActive, setActive] = useState(false)
    const [completed, setCompleted] = useState(false)

    const handleSubmit = () => {
        return handleMutation().then(resolved => {
            setCompleted(true)
        })
    }

    const handleMutation = () => {
        return driverCreateSelfInjuryAccident({
            variables: {
                accidentId: accidentState.id,
                injuries: selfInjuryData.injuries,
                injury_report: selfInjuryData.injury_report,
                extra_info: selfInjuryData.extra_info,
                specific_pictures: selfInjuryData.specific_pictures,
            }
        })
    }

    return (
        <View>
            <Banner />
            <Text style={Template.title}>Any Extra Information?</Text>
            <Text style={Template.subTitle}>IF SO, ENTER IT BELOW</Text>
            <View style={{marginLeft: 30, width: maxWidth - 60, paddingTop: 50, marginBottom: 200}}>
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

                placeholder={"Any Extra Information Here"}
                onChange={extraInfo => {
                    setSelfInjuryData({
                        ...selfInjuryData,
                        extra_info: extraInfo
                        })
                    }
                }
            />        
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
                    <View style={{marginLeft: 30, position: 'absolute', marginTop: -90}}>
                        <ContinueButton nextPage={route} nextSite={site} buttonText={'Done'} pageName={'collision-extra-info-continue-button'} />
                    </View>
                 ) : null}
            </View>
        </View>
    )
}

export default UserInjuryExtraInformation