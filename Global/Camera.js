import React, { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'

import { Camera } from 'expo-camera';
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from 'expo-media-library'

import { useRecoilState } from "recoil";
import { collisionDataState, accidentDataState, injuryDataState, selfInjuryDataState, propertyDataState, ownCarDataState, cameraPermissionState, mediaLibraryPermissionState } from "../../../Recoil/atoms";

import ContinueButton from "../../../Global/Buttons/ContinueButton";
import ErrorPrompt from "./ErrorPrompt";

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
        const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useRecoilState(mediaLibraryPermissionState)
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
            else{
                return <ErrorPrompt code={'901'} />
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
                        setHasPermission(status)         //
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
///    Handlers    ///
///                ///
//////////////////////

        // Adds taken (took? taked?) Picture to Array of Pictures in the Selected State //
        const handleClickTakePicture = async () => {
            const r = await takePhoto()
            if (!r.cancelled) {
                setImage(r.uri)
                let images = [...changeValue.specific_pictures];
                images.push(r.uri)
                changeFunction({
                    ...changeValue,
                    specific_pictures: images
                })
            }
        }

//////////////////////
///                ///
///   Renderings   ///
///                ///
//////////////////////

        ///////////////////////////
        // Camera Display Render // 
        ///////////////////////////

        // Main Camera View //
        const displayCameraView = () => {
            return(
                <Camera style={Styles.camera} type={cameraType} ref={cameraRef}>

                    {/* Renders the Bottom Buttons */}
                    <View style={Styles.buttonContainer}>
                        {renderFlipButton()}
                        {renderTakePicture()}
                        {renderCloseButton()}
                    </View>

                </Camera>
            )
        }

        // Flip Button //
        const renderFlipButton = () => {
            return(
                <View>
                    <TouchableOpacity
                        style={Styles.button}
                        onPress={() => {
                            setCameraType(
                                cameraType === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}>
                        <View style={{marginTop: maxHeight * 0.65, marginLeft: maxWidth * -0.1}}>
                            <Text style={Styles.text}> Flip </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        // Picture Button //
        const renderTakePicture = () => {
            return(
                <View>
                    <TouchableOpacity 
                    style={Styles.button}
                    onPress={() => {handleClickTakePicture()}  
                    }>
                        <View style={{marginTop: maxHeight * 0.62, marginLeft: maxWidth * 0.16}}>
                            <Text style={Styles.text}> Take Photo </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        // Close button //
        const renderCloseButton = () => {
            return(
                <View>
                    <TouchableOpacity 
                    style={Styles.button}
                    onPress={async () => { setShowCamera(false)}
                    }>
                        <View style={{marginTop: maxHeight * 0.65, marginLeft: maxWidth * 0.13}}>
                            <Text style={Styles.text}> Close </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        ////////////////////////////
        // Default Display Render // 
        ////////////////////////////

        // Main Default View //
        const renderDefaultView = () => {
            return(
                <View style={Styles.container}>
                    {/* Title */}
                    <View>
                        {renderPictureTypeTitle()}
                    </View>
                    
                    <View>
                        <View style={Styles.imageBox}>
                            {renderTakenPictures()}
                            {renderOpenCameraButton()}
                        </View>
                    </View>
                    <View style={Styles.continue}>
                        <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/>
                    </View>
                </View>
            )
        }

        // Renders the Open Camera Button
        const renderOpenCameraButton = () => {
            return(
                <View style={Styles.openCamButton}>
                <TouchableOpacity onPress={async () => {
                        setShowCamera(true)
                    }}>
                    <Gradient
                        colorOne='#555'
                        colorTwo='#333'
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50.5,
                            justifyContent: 'center',
                            alightItems: 'center',
                            shadowColor: '#000000',
                            shadowOffset: {width: 6, height: 25},
                            shadowOpacity: 0.14,
                            shadowRadius: 13,
                        }}
                    >
                        <Text style={{
                            fontFamily: "GilroySemiBold",
                            fontSize: 18,
                            letterSpacing: -0.5,
                            color: 'white',
                            textAlign: 'center'
                        }}
                        > 
                            Open Camera
                        </Text>
                    </Gradient>
                </TouchableOpacity>
                </View>
            )
        }

        // Renders the Pictures Taken
        const renderTakenPictures = () => {
            return(
                <View>
                    {image && (
                        <View style={Styles.pictureContainer}>
                            <Image 
                                source={{ uri: image }}
                                style={Styles.img}
                            />
                        </View>
                    )}
                </View>
            )
        }

        // Renders the title based on incident type// 
        const renderPictureTypeTitle = () => {
            let title = "ERROR: Something Went Wrong. We apologize, please leave feedback / email support stating you encountered ERROR 901"
            let prompt = ""

            // Renders Title based on Type
            if (true){
                if (type === "collision"){
                    title = "Collision Pictures you should take:"
                    prompt = "Your Car, Their Car, Thier Insurance (if possible) Their Drivers License (if possible)"
                }
                else if (type === "injury"){
                    title = "Injury Pictures you should take:"
                    prompt = "The Scene, The Victim (with permission, if appropriate), Insurance Card"
                }
                else if (type === "self-injury"){
                    title = "Injury Pictures you should take:"
                    prompt = "What Caused Your Injury, The Injured Area"
                }
                else if (type === "general"){
                    title = "Pictures you should take:"
                    prompt = "The Road Where The Incident Occurred, Your Vehicle"
                }
                else if (type === "property"){
                    title = "Pictures of Property you should take:"
                    prompt = "Any and All Damages"
                }
                else if (type === "self-damage"){
                    title = "Damage Pictures you should take:"
                    prompt = "Any and All Damages"
                }
            }
            return(
                <View>
                    <Text style={Styles.title}>{title}</Text>
                    <Text>{prompt}</Text>
                </View>
            )
        }

//////////////////////
///                ///
///  Main Return   ///
///                ///
//////////////////////

    const mainReturn = () => {
        if (showCamera){
            displayCameraView()
        }
        else{
            renderDefaultView()
        }
    }

    return(
        mainReturn()
    )

}


export default Camera