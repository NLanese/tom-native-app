import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
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

const CollisionExtraInfo = () => {
    const [driverCreateCollisionAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVERCREATECOLLISIONACCIDENT)
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)

    console.log(collisionData)

    return (
        <View>
            <Banner />
            <Text>Hello From Collision Extra Info</Text>

            <View>
                <Input
                    onPressIn={() => setActive(true)}
                    onEndEditing={() => setActive(false)}
                    style={determineStyle().style}
                    size={'large'}
                    placeholder={`Please Enter Any Additional Information`}
                    placeholderTextColor={determineStyle().color}
                    textStyle={{color: determineStyle().color, fontSize: 18}}
                    onChangeText={extraInfo => {
                        setCollisionData({
                            ...collisionData,
                            contact_info: {
                                ...collisionData.contact_info,
                                },
                                extra_info: extraInfo 
                            })
                        }}
                    />                
            </View>
        </View>
    )
}

export default CollisionExtraInfo