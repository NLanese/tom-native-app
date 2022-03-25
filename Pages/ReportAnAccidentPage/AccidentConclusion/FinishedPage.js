import React from "react";
import { View, TouchableOpacity, Text } from 'react-native'

import { useRecoilState } from "recoil";
import { accidentDataState, userState } from "../../../Recoil/atoms";

import { useMutation } from "@apollo/client";

import Gradient from "../../../Components/Gradient"
import Banner from "../../../Global/Banner";

import Template from "../../../Styles/RAA/RAATemplateStyles";

const FinishedPage = () => {

    const [accidentState, setAccidentState] = useRecoilState(accidentDataState)
    const [user] = useRecoilState(userState)

    console.log(user.token)

    return(
        <View>
            <Banner />
            <Text style={Template.title}>Your Incident Report has been filed!</Text>
            <View style={{marginTop: 20}} />
            <Text style={Template.subTitle2}>Thank you for bearing with this process and we hope you have a safe remainder of your day</Text>
            <Text style={Template.subTitle2}>Please remember to call any and all emergency services necessary, or contact your manager if you feel unable to complete your shift.</Text>

            <View style={{marginLeft: 30, marginTop: 130}}>
                <TouchableOpacity onPress={() => {
                    console.log(accidentState)
                }}>
                    <Gradient
                        colorOne="#534FFF"
                        colorTwo="#15A1F1"
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50.5,
                            justifyContent: 'center',
                            alightItems: 'center',
                            shadowColor: '#000000',
                            shadowOffset: {width: 6, height: 25},
                            shadowOpacity: 0.14,
                            shadowRadius: 13,
                        }}
                    >
                        <Text style={{
                            fontFamily: "GilroySemiBold",
                            fontSize: 25,
                            letterSpacing: -0.5,
                            color: '#FFFFFF',
                            textAlign: 'center'
                        }}
                        > 
                            Done 
                        </Text>
                    </Gradient>
                </TouchableOpacity>
            </View>            
        </View>
    )
}

export default FinishedPage