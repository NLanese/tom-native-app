import React, { useState } from 'react'
import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { CheckBox } from '@ui-kitten/components'

import Banner from '../../../Global/Banner'
import Gradient from '../../../Components/Gradient'
import ContinueButton from '../../../Global/Buttons/ContinueButton'

import { useRecoilState } from 'recoil'
import { accidentDataState, websiteState } from '../../../Recoil/atoms'

import Template from '../../../Styles/RAA/RAATemplateStyles'

import { useNavigation } from "@react-navigation/native";


const Distractions = () => {

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const [weather, setWeather] = useState(null)
    const handleWeatherCheck = (wea) => {
        setWeather(wea)
    }
    const determineWeatherCheck = (wea) => {
        if (wea == weather){
            return true
        }
        else { 
            return false
        }
    }

    const [slippery, setSlippery] = useState(null)
    const handleSlipperyCheck = (slip) => {
        setSlippery(slip)
    }
    const determineSlipCheck = (slip) => {
        if (slip == slippery){
            return true
        }
        else{
            return false
        }
    } 

    const [distract, setDistract] = useState(null)
    const handleDistractCheck = (dis) => {
        setDistract(dis)
    }
    const determineDistractCheck = (dis) => {
        if (distract == dis){
            return true
        }
        else{
            return false
        }
    }

    const renderContinue = () => {
        if (weather != null){
            if (slippery != null){
                if (distract != null){
                    return(
                        <View style={{marginLeft: 30, marginTop: 40}}>
                            {/* <ContinueButton nextPage={"home"} buttonText={"Done"}/> */}
                            <TouchableOpacity onPress={() => {
                                setWebsite({current: "Home", previous: website.current, saved: "Home"})
                                navigation.navigate("home")
                            }}>
                                <Gradient
                                    colorOne={colors[0]}
                                    colorTwo={colors[1]}
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
                                        Finish 
                                    </Text>
                            </Gradient>
                            </TouchableOpacity>
                        </View>
                    )
                }
            }
        }
    }


    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '120%'}}>
                <Text style={Template.title}>
                    What was the weather like at the time of the incident?
                </Text>
                <View style={{marginTop: 10}}>

                    <View style={Template.checkRow}>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Sunny")}
                            onChange={() => handleWeatherCheck("Sunny")}
                        >
                            <Text>Sunny</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Cloudy")}
                            onChange={() => handleWeatherCheck("Cloudy")}
                        >
                            <Text>Cloudy</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Foggy")}
                            onChange={() => handleWeatherCheck("Foggy")}
                        >
                            <Text>Foggy</Text>
                        </CheckBox>
                    </View>

                    <View style={Template.checkRow}>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("lite-Rainy")}
                            onChange={() => handleWeatherCheck("lite-Rainy")}
                        >
                            <Text>Light rain</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Rainy")}
                            onChange={() => handleWeatherCheck("Rainy")}
                        >
                            <Text>Rainy</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Downpour")}
                            onChange={() => handleWeatherCheck("Downpour")}
                        >
                            <Text>Heavy Rain</Text>
                        </CheckBox>
                    </View>

                    <View style={Template.checkRow}>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Flurry")}
                            onChange={() => handleWeatherCheck("Flurry")}
                        >
                            <Text>Flurries</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Hail")}
                            onChange={() => handleWeatherCheck("Hail")}
                        >
                            <Text>Hailing</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineWeatherCheck("Snow")}
                            onChange={() => handleWeatherCheck("Snow")}
                        >
                            <Text>Snowing</Text>
                        </CheckBox>
                    </View>

                </View>
                <Text style={Template.title}>
                    Were the roads slippery?
                </Text>

                <View style={{marginTop: 10}}>

                    <View style={Template.checkRow}>

                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineSlipCheck("Slippery")}
                            onChange={() => handleSlipperyCheck("Slippery")}
                        >
                            <Text>Yes</Text>
                        </CheckBox>
                        <CheckBox
                            style={Template.rowCheck}
                            checked={determineSlipCheck("Not Slippery")}
                            onChange={() => handleSlipperyCheck("Not Slippery")}
                        >
                            <Text>No</Text>
                        </CheckBox>

                    </View>

                    <Text style={Template.title}>
                        Were you distracted or was vision obstructed?
                    </Text>

                    <View style={{marginTop: 10}}>
                        
                        <View style={Template.checkRow}>
                            <CheckBox
                                style={Template.rowCheck}
                                checked={determineDistractCheck("Texting")}
                                onChange={() => handleDistractCheck("Texting")}
                            >
                                <Text>Texting</Text>
                            </CheckBox>
                            <CheckBox
                                style={Template.rowCheck}
                                checked={determineDistractCheck("Sun in Eyes")}
                                onChange={() => handleDistractCheck("Sun in Eyes")}
                            >
                                <Text>Sun in Eyes</Text>
                            </CheckBox>
                            <CheckBox
                                style={Template.rowCheck}
                                checked={determineDistractCheck("Other Accident on Road")}
                                onChange={() => handleDistractCheck("Other Accident on Road")}
                            >
                                <Text>Another Accident</Text>
                            </CheckBox>
                        </View>

                        <View style={Template.checkRow}>
                            <CheckBox
                                style={Template.rowCheck}
                                checked={determineDistractCheck("Radio")}
                                onChange={() => handleDistractCheck("Radio")}
                            >
                                <Text>Changing Radio</Text>
                            </CheckBox>
                            <CheckBox
                                style={Template.rowCheck}
                                checked={determineDistractCheck("Obstructed Windshield")}
                                onChange={() => handleDistractCheck("Obstructed Windshield")}
                            >
                                <Text>Blocked Windshield</Text>
                            </CheckBox>
                            <CheckBox
                                style={{...Template.rowCheck, width: 120}}
                                checked={determineDistractCheck("No Distraction")}
                                onChange={() => handleDistractCheck("No Distraction")}
                            >
                                <Text>No Distractions</Text>
                            </CheckBox>
                        </View>

                    </View>

                </View>
                <View>
                    {renderContinue()}
                </View>
            </ScrollView>
        </View>
    )
}

export default Distractions