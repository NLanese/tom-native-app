import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import { Input, Button } from '@ui-kitten/components';

import { geoLocation, accidentDataState, websiteState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import DynamicInput from "../../../Components/DynamicInput";

import Banner from "../../../Global/Banner"
import Gradient from "../../../Components/Gradient";

import { DRIVER_CREATE_ACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import Template from "../../../Styles/RAA/RAATemplateStyles";

import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CreateAccident = ({accident}) => {
    let route = 'check-collision-accident'
    let site = 'Vehicle Collision Check'
    if (!accident) {
        site = "Check Self Injury"
        route = 'check-user-injury'
    }

    const [website, setWebsite] = useRecoilState(websiteState)
    const navigation = useNavigation()
    const [driverCreateAccount, { loading: loading, error: error, data: data }] = useMutation(DRIVER_CREATE_ACCIDENT)
    const [gLocation, setGeoLocation] = useRecoilState(geoLocation)
    const [accidentStateData, setAccidentDataState] = useRecoilState(accidentDataState)

    // Getting Time and Dates
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    let todayTime = new Date();
    let time = todayTime.getHours() + ":" + todayTime.getMinutes() + ":" + todayTime.getSeconds();

    const [accidentData, setAccidentData] = useState({
        name: `${gLocation.name}, ${gLocation.city} ${gLocation.region} ${gLocation.postalCode} Accident`,
        date: today,
        time: time,
        location: `${gLocation.name}, ${gLocation.city} ${gLocation.region} ${gLocation.postalCode}`,
        selfDamage: {}
    })

    const handleInput = (id, information) => {
        const input = { ...accidentData };
		input[id] = information;
		setAccidentData(input);
    }

    const handleSubmit = async () => {
        if (
            accidentData.name.length > 3 &&
            accidentData.date.length > 4 &&
            accidentData.time.length > 3 &&
            accidentData.location.length > 5
            ){
                await driverCreateAccount({
                    variables: {
                        name: accidentData.name,
                        date: accidentData.date,
                        time: accidentData.time,
                        location: accidentData.location
                    }
                }).then( async(resolved) => {
                    await setAccidentDataState(resolved.data.driverCreateAccident)
                    await setWebsite({current: site, previous: website.state, saved: site})
                    navigation.navigate(route)
                }).catch( (error) => {
                    console.log(error)
                })
            }
    }


    return (
        <ScrollView>
            <Banner />

            <Text style={{...Template.questionText, marginBottom: 10}}> 
                Please make sure the information below is correct.
                If not, please correct it below
             </Text>

            <View style={{marginTop: 20}}>
                <Text style={Template.subTitle}> ACCIDENT NAME </Text>
                <View style={{marginLeft: 30, marginBottom: 10}}>
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

                        placeholder={accidentData.name}
                        onChange={name => {
                            handleInput('name', name)
                        }}
                    />
                </View>
    
                <Text style={Template.subTitle}> ACCIDENT DATE </Text>
                <View style={{marginLeft: 30, marginBottom: 10}}>
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

                        placeholder={accidentData.date}
                        onChange={date => {
                            handleInput('date', date)
                        }}
                    />
                </View>


                <Text style={Template.subTitle}> ACCIDENT TIME </Text>
                <View style={{marginLeft: 30, marginBottom: 10}}>
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

                        placeholder={accidentData.time}
                        onChange={time => {
                            handleInput('time', time)
                        }}
                    />
                </View>

                <Text style={Template.subTitle}> ACCIDENT LOCATION </Text>

                    <View style={{marginLeft: 30, marginBottom: 40}}>
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

                        placeholder={accidentData.location}
                        onChange={location => {
                            handleInput('location', location)
                        }}
                    />
                </View>
                    

                    <TouchableOpacity onPress={() => handleSubmit()} style={{ width: 120, marginLeft: 30}}>
                        <Gradient
                            colorOne="#534FFF" 
                            colorTwo="#15A1F1" 
                            style={Template.lgButton}
                        >
                            <Text style={{...Template.buttonText, marginTop: -7}}>Done</Text>
                        </Gradient>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CreateAccident