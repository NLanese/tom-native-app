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
}
