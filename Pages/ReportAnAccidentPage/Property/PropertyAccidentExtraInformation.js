import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATEPROPERTYACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import Template from "../../../Styles/RAA/RAATemplateStyles";

import Gradient from "../../../Components/Gradient"

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

const PropertyAccidentExtraInformation = () => {
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)
    const [driverCreatePropertyAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATEPROPERTYACCIDENT)
    const [complete, setComplete] = useState(false)

    const [isActive, setActive] = useState(false)

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
        await driverCreatePropertyAccident({
            variables: {
                accidentId: propertyData.accidentId,
                address: propertyData.address,
                objectHit: propertyData.object_hit,
                safetyEquipment: propertyData.safety_equipment,
                specificPictures: propertyData.specific_pictures,
                contactInfo: propertyData.contact_infomation,
                extraInfo: propertyData.extra_info
            }
        })
    }

    // console.log(propertyData)

    useEffect(() => {
        if (!loading && data) {
            setComplete(true)
        }
    }, [data])

    return (
        <View>
            <Banner />
            <Text style={Template.questionText}>Enter any Extra Information in the space below</Text>

            <View style={{marginTop: 30, marginBottom: 30, marginLeft: 30, width: maxWidth - 60}}>
                <Input 
                    size={'large'}
                    style={{...Template.activeInput, maxHeight: 300}}
                    textStyle={{color: "white"}}
                    placeholder={`Please Enter Any Additional Information`}
                    onChangeText={extraInfo => {
                        setPropertyData({
                            ...propertyData,
                            extra_info: extraInfo
                        })
                    }}
                    multiline={true}
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
                {complete === true ? (<ContinueButton nextPage={'check-injury-accident'} buttonTex={'Continue'} pageName={'property-accident-extra-information-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default PropertyAccidentExtraInformation