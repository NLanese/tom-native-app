import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { Button, Input } from "@ui-kitten/components";
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, collisionIdState } from "../../../Recoil/atoms";
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
    const [collisionId, setCollisionId] = useRecoilState(collisionIdState)
    const [completed, setCompleted] = useState(false)

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
        await driverCreateCollisionAccident({
            variables: {
                accidentId: collisionData.accidentId,
                specificPictures: collisionData.specific_pictures,
                contactInfo: collisionData.contact_info,
                extraInfo: collisionData.extra_info
            }
        })
    }

    useEffect(() => {
        if (!loading && data) {
            setCollisionId(data.driverCreateCollisionAccident.id)
            setCompleted(true)
        }
    }, [data])

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
            
            <View>
                <Button onPress={handleSubmit}>Submit</Button>
            </View>

            <View>
                {completed === true ? (<ContinueButton nextPage={'collision-injury-check'} buttonText={'Continue'} pageName={'collision-extra-info-continue-button'} />) : null}
            </View>
        </View>
    )
}

export default CollisionExtraInfo