import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATEPROPERTYACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { propertyDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
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
            <Text>Test from property Accident Extra Information</Text>

            <View>
                <Text>Please Enter Any Additional Information?</Text>
                <Input 
                    size={'large'}
                    placeholder={`Please Enter Any Additional Information`}
                    onChangeText={extraInfo => {
                        setPropertyData({
                            ...propertyData,
                            specific_pictures: {
                                ...propertyData.specific_pictures
                            },
                            contact_infomation: {
                                ...propertyData.contact_infomation,
                            },
                            safety_equipment: {
                                ...propertyData.safety_equipment
                            },
                            extra_info: extraInfo
                        })
                    }}
                />
            </View>

            <Button onPress={() => handleSubmit()}>Submit</Button>

            <View>
                {complete === true ? (<ContinueButton nextPage={'check-injury-accident'} buttonTex={'Continue'} pageName={'property-accident-extra-information-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default PropertyAccidentExtraInformation