import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { Button, Input } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import Gradient from "../../../Components/Gradient";
import DynamicInput from "../../../Components/DynamicInput";

import { DRIVER_CREATE_COLLISION_ACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { collisionDataState, accidentDataState, collisionIdState, userState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionExtraInfo = () => {
    const [driverCreateCollisionAccident, { loading: loading, error: error, data: data }] = useMutation(DRIVER_CREATE_COLLISION_ACCIDENT)

    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)

    const [collisionId, setCollisionId] = useRecoilState(collisionDataState)

    const [user, setUser] = useRecoilState(userState)


    const [completed, setCompleted] = useState(false)

    const handleSubmit = () => {
        handleMutation().then(  (resolved) => {
            console.log(resolved)
        })
    }

    const handleMutation = async () => {
        await driverCreateCollisionAccident({
            variables: {
                accidentId: collisionData.accidentId,
                specific_pictures: collisionData.specific_pictures,
                contact_info: collisionData.contact_info,
                collision_report: collisionData.collision_report,
                extra_info: collisionData.extra_info,
            }
        })
    }

    return (
        <View>
            <Banner />
            <Text style={Template.title}>Any Extra Information?</Text>
            <Text style={Template.subTitle}>IF SO, ENTER IT BELOW</Text>
            <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 40, height: 250}}>
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
                    onChange={content => {
                        setCollisionData({
                            ...collisionData,
                            extra_info: content
                    })
                }}
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
                        <ContinueButton nextPage={'collision-injury-check'} buttonText={'Done'} nextSite={'Collision Injury Check'} pageName={'collision-extra-info-continue-button'} />
                    </View>
                ) : null}
            </View>
        </View>
    )
}

export default CollisionExtraInfo