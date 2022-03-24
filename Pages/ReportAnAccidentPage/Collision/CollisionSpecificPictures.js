import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, cameraPermissionState, cameraTypeState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Camera } from 'expo-camera';

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionSpecificPictures = () => {
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)
    // Camera permissions and device type state
    const [hasPermission, setHasPermission] = useRecoilState(cameraPermissionState)
    const [cameraType, setCameraType] = useRecoilState(cameraTypeState)

    useEffect(() => {
        // console.log('useEffect called');
        // Get permission to use the camera
        (async () => {
            // console.log('in async')
            const { status } = await Camera.requestCameraPermissionsAsync()
            // console.log(status)
        })()

        setCollisionData({
            ...collisionData,
            specific_pictures: {
                'Pic One': "Test url" // Change this to setCollisionData({...collisionData, specific_pictures: { pic_one: <input>} })
            },
        })
    }, [])
    return (
        <View>
            <Banner />
            <Text>TEST FROM COLLISION SPECIFIC PICTURE</Text>

            <View style={Styles.continue}>
                <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title: {
        marginTop: 23,
        marginLeft: 30,
        marginRight: 30,

        fontFamily: "GilroyBold",
        fontSize: 30,
        color: "#444444",
        letterSpacing: -0.5
    },
    noButton: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .58
    },
    continue: {
        position: 'absolute',
        marginTop: maxHeight * 0.75,
        marginLeft: maxWidth * .15
    }

})

export default CollisionSpecificPictures