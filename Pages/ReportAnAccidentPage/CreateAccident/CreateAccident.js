import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { geoLocation, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import Banner from "../../../Global/Banner"
import { DRIVERCREATEACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { Input, Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

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

    const [isActive, setActive] = useState(false)

    const determineStyle = () => {
        if (isActive){
            return{
                style: dynamicStyles.activeInput,
                color: 'white'
            }
        }
        else{
            return{
                style: dynamicStyles.inactiveInput,
                color: '#adadad'
            }
        }
    }

    return (
        <View>
            <Banner />

            <Text> 
                Please make sure the information below is correct.
                If it is not please update with the proper information
             </Text>

            <View>
                <Text> Accident Name </Text>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    style={determineStyle().style}
                    size={'large'}
                    placeholder={accidentData.name}
                    placeholderTextColor={determineStyle().color}
                    textStyle={{color: determineStyle().color, fontSize: 18}}
                    onChangeText={name => {
                        handleInput('name', name)
                    }}
                />
    
                <Text> Accident Date </Text>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    style={determineStyle().style}
                    size={'large'}
                    placeholder={accidentData.date}
                    placeholderTextColor={determineStyle().color}
                    textStyle={{color: determineStyle().color, fontSize: 18}}
                    onChangeText={date => {
                        handleInput('date', date)
                    }}
                />

                <Text> Accident Time </Text>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    style={determineStyle().style}
                    size={'large'}
                    placeholder={accidentData.time}
                    placeholderTextColor={determineStyle().color}
                    textStyle={{color: determineStyle().color, fontSize: 18}}
                    onChangeText={time => {
                        handleInput('time', time)
                    }}
                    />

                <Text> Accident Location </Text>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    style={determineStyle().style}
                    size={'large'}
                    placeholder={accidentData.location}
                    placeholderTextColor={determineStyle().color}
                    textStyle={{color: determineStyle().color, fontSize: 18}}
                    onChangeText={location => {
                        handleInput('location', location)
                    }}
                    />

                    <Button onPress={() => handleSubmit()}>
                        Submit
                    </Button>
            </View>
        </View>
    )
}

export default CreateAccident