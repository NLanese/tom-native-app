import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import { Button, Input } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import Gradient from "../../../Components/Gradient";

// import {  } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { selfInjuryDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const UserInjuryExtraInformation = ({accident}) => {

    let route = 'check-self-car-damage'
    if (accident){
        route = "check-self-accident-damage"
    }
    // const [ ----, { loading: loading, error: error, data: data }] = useMutation( )

    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)
    const [isActive, setActive] = useState(false)
    const [completed, setCompleted] = useState(false)

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

    const handleSubmit = async () => {
        // await -------({
        //     variables: {
               
        // })
        setCompleted(true)
    }


    return (
        <View>
            <Banner />
            <Text style={Template.title}>Any Extra Information?</Text>
            <Text style={Template.subTitle}>IF SO, ENTER IT BELOW</Text>
            <View style={{marginLeft: 30, width: maxWidth - 60, height: 300}}>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    height={200}
                    style={{...Template.neutralInput, marginTop: 35}}
                    size={'large'}
                    placeholder={`Please Enter Any Additional Information`}
                    placeholderTextColor={"white"}
                    textStyle={{color: "white"}}
                    onChangeText={extraInfo => {
                        setSelfInjuryData({
                            ...selfInjuryData,
                            extra_info: extraInfo
                            })
                        }}
                    />                
            </View>
            
            <View style={{marginLeft: 30, marginTop: 70}}>
                <TouchableOpacity onPress={handleSubmit}>
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
                    <View style={{marginLeft: 30, position: 'absolute', marginTop: -100}}>
                        <ContinueButton nextPage={route} buttonText={'Done'} pageName={'collision-extra-info-continue-button'} />
                    </View>
                ) : null}
            </View>
        </View>
    )
}

export default UserInjuryExtraInformation