import React, { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import { Camera } from 'expo-camera';

import { useRecoilState } from "recoil";
import { collisionDataState, accidentDataState, injuryDataState, selfInjuryDataState, propertyDataState, ownCarDataState, cameraPermissionState } from "../../../Recoil/atoms";

import ContinueButton from "../../../Global/Buttons/ContinueButton";

const Camera = ({type}) => {
    ///////////////////////
    ///                 ///
    ///   PRELIMINARY   ///
    ///                 ///
    ///////////////////////

        //////////////////////////
        // All Incidient States // 
        //////////////////////////
        const [collisionData, setCollisionData] = useRecoilState(collisionDataState)
        const [accidentData, setAccidentData] = useRecoilState(accidentDataState)
        const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
        const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)
        const [propertyData, setPropertyData] = useRecoilState(propertyDataState)
        const [ownCarData, setOwnCarData] = useRecoilState(ownCarDataState)


        ///////////////////
        // Camera States //
        ///////////////////
        const [hasPermission, setHasPermission] = useRecoilState(cameraPermissionState)
        const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
        const [showCamera, setShowCamera] = useState(false)

        /////////////////////////
        // State Determination //
        /////////////////////////
        let changeFunction = null
        let changeValue = null

        // This is inside an if just to be closed. Assigns the ChangeFunction
        if (true){
            if (type === "collision"){
                changeFunction = setCollisionData
                changeValue = collisionData
            }
            else if (type === "injury"){
                changeFunction = setInjuryData
                changeValue = injuryData
            }
            else if (type === "self-injury"){
                changeFunction = setSelfInjuryData
                changeValue = selfInjuryData
            }
            else if (type === "general"){
                changeFunction = setAccidentData
                changeValue = accidentData
            }
            else if (type === "property"){
                changeFunction = setPropertyData
                changeValue = propertyData
            }
            else if (type === "self-damage"){
                changeFunction = setOwnCarData
                changeValue = ownCarData
            }
        }

    //////////////////////
    ///                ///
    ///  I'm Not Sure  ///
    ///                ///
    //////////////////////

    // Camera ref to enable picture taking
    const cameraRef = useRef(null)


    ///////////////////////////////
    ///                         ///
    ///  Camera functionality   ///
    ///                         ///
    ///////////////////////////////

        ////////////////////////
        // Camera Permissions // 
        ////////////////////////
            useEffect(() => {
                (async () => {

                    ///////////////////////////////////////
                    // Checks Phone's Camera Permissions //
                        const { status } = await Camera.requestCameraPermissionsAsync()
                        setHasPermission(status)
                    ///////////////////////////////////////

                    if (status === 'denied') {
                        alert('Camera access is required. Please modify your device permissions in the Systems Preferences page or contact your manager')
                        // navigation.navigate('create-collision-accident')
                    }
                })();

                changeFunction({
                    ...changeValue,
                    specific_pictures: [] 
                })
            }, [hasPermission])

        /////////////////////////////
        // Picture Taking Function //
        /////////////////////////////
            const takePhoto = async () => {
                if (cameraRef) {
                    try {
                        let photo = await cameraRef.current.takePictureAsync({
                            allowsEditing: true,
                            aspect: [4, 3],
                            // base64: true,
                            quality: 1
                        })
                        return photo
                    } catch (error) {
                        console.log(error)
                    }
                }
            }

    //////////////////////
    ///                ///
    ///  Main Return   ///
    ///                ///
    //////////////////////

    return(
        
    )

}


export default Camera