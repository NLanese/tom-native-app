import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import { Input, Button } from '@ui-kitten/components';

import { geoLocation, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";``

import Banner from "../../../Global/Banner"
import Gradient from "../../../Components/Gradient";

import { DRIVERCREATEACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import Template from "../../../Styles/RAA/RAATemplateStyles";

import { useNavigation } from "@react-navigation/native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const dynamicStyles = StyleSheet.create({
    activeInput: {
        backgroundColor: "#ccc",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        height: '13%',
        marginLeft: 30,
    },
    inactiveInput: {
        backgroundColor: "#ccc",
        borderColor: "#ccc",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        height: '13%',
        marginLeft: 30,
    }
})

const CreateAccident = () => {
    const navigation = useNavigation()
    const [driverCreateAccount, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATEACCIDENT)
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
        location: `${gLocation.name}, ${gLocation.city} ${gLocation.region} ${gLocation.postalCode}`
    })

    const handleInput = (id, information) => {
        const input = { ...accidentData };
		input[id] = information;
		setAccidentData(input);
    }

    const handleSubmit = async () => {
        await driverCreateAccount({
            variables: {
                name: accidentData.name,
                date: accidentData.date,
                time: accidentData.time,
                location: accidentData.location
            }
        })
    }

    useEffect( async () => {
        if (!loading && data) {
            await setAccidentDataState(data.driverCreateAccident)
            await navigation.navigate('check-collision-accident')
        }
    }, [data])

    const [isActive, setActive] = useState("NONE")

    const determineStyle = (type) => {
        if (isActive == type){
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else{
            return{
                style: dynamicStyles.inactiveInput,
                color: '#aaa'
            }
        }
    }

    return (
        <ScrollView>
            <Banner />

            <Text style={{...Template.questionText, marginBottom: 10}}> 
                Please make sure the information below is correct.
                If not, please correct it below
             </Text>

            <View>
                <Text style={Template.subTitle}> ACCIDENT NAME </Text>
                <Input
                    onPressIn={() => setActive("name")}
                    // onEndEditing={() => setActive("none")}
                    style={determineStyle("name").style}
                    size={'large'}
                    placeholder={accidentData.name}
                    placeholderTextColor={determineStyle("name").color}
                    textStyle={{color: determineStyle("name").color, fontSize: 18}}
                    onChangeText={name => {
                        handleInput('name', name)
                    }}
                />
    
                <Text style={Template.subTitle}> ACCIDENT DATE </Text>
                <Input
                    onPressIn={() => setActive("date")}
                    // onEndEditing={() => setActive("none")}
                    style={determineStyle("date").style}
                    size={'large'}
                    placeholder={accidentData.date}
                    placeholderTextColor={determineStyle("date").color}
                    textStyle={{color: determineStyle("date").color, fontSize: 18}}
                    onChangeText={date => {
                        handleInput('date', date)
                    }}
                />

                <Text style={Template.subTitle}> ACCIDENT TIME </Text>
                <Input
                    onPressIn={() => setActive("time")}
                    // onEndEditing={() => setActive("time")}
                    style={determineStyle("time").style}
                    size={'large'}
                    placeholder={accidentData.time}
                    placeholderTextColor={determineStyle("time").color}
                    textStyle={{color: determineStyle("time").color, fontSize: 18}}
                    onChangeText={time => {
                        handleInput('time', time)
                    }}
                    />

                <Text style={Template.subTitle}> ACCIDENT LOCATION </Text>
                <Input
                    onPressIn={() => setActive("loca")}
                    // onEndEditing={() => setActive(false)}
                    style={determineStyle("loca").style}
                    size={'large'}
                    placeholder={accidentData.location}
                    placeholderTextColor={determineStyle("loca").color}
                    textStyle={{color: determineStyle("loca").color, fontSize: 18}}
                    onChangeText={location => {
                        handleInput('location', location)
                    }}
                    />

                    <TouchableOpacity onPress={() => handleSubmit()}>
                        <Gradient
                            colorOne="#534FFF" 
                            colorTwo="#15A1F1" 
                            style={Template.lgButton}
                        >
                            <Text style={{...Template.buttonText, marginLeft: -27, marginTop: -7}}>Done</Text>
                        </Gradient>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CreateAccident