import React, { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'


import { Camera } from 'expo-camera';
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from 'expo-media-library'

import { useRecoilState } from "recoil";
import { collisionDataState, accidentDataState, injuryDataState, selfInjuryDataState, propertyDataState, ownCarDataState, cameraPermissionState, mediaLibraryPermissionState } from "../Recoil/atoms";

import ContinueButton from "./Buttons/ContinueButton";
import ErrorPrompt from "./ErrorPrompt";
import Gradient from "../Components/Gradient"
import Banner from "./Banner"


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CameraPage = ({type}) => {

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
        const [images, setImages] = useState([])
        // const images = []

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
                console.log(r)
                setImages([...images, r.uri]) 
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
                // <View>
                    <Camera style={{ height: maxHeight * 0.89, width: maxWidth, marginTop: 0}} type={cameraType} ref={cameraRef}>

                    {/* Renders the Bottom Buttons */}
                    <View>
                        {renderFlipButton()}
                        {renderTakePicture()}
                        {renderCloseButton()}
                    </View>

                    </Camera>
                // {/* </View> */}
            )
        }

        // Flip Button //
        const renderFlipButton = () => {
            console.log("Inside Flip Button")
            return(
                <View>
                    <TouchableOpacity
                        // style={Styles.button}
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
            console.log("Inside Take Pic Button")
            return(
                <View >
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
            console.log("inside close button")
            return(
                <View style={{backgroundColor: 'blue', height: 300, width: 500}}>
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
                <View>
                    {/* Title */}
                    {renderPictureTypeTitle()}
                    
                    <View>
                        <View style={{backgroundColor: 'red', marginTop: 15}}>
                            {renderTakenPictures()}  
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: maxWidth * .15 - 10, width: maxWidth * .7, marginTop: 100}}>
                        {renderOpenCameraButton()}
                        <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/>
                    </View>
                </View>
                // <Text>This is fucking retarded. I've taken shits with more helpful error messages than React Native</Text>
            )
        }

        // Renders the Open Camera Button
        const renderOpenCameraButton = () => {
            return(
                <View style={{marginTop: -8}}>
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
                            shadowColor: 'black',
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
                    {images && (
                        <View >
                            <Image 
                                source={{ uri: images[images.length - 1] }}
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
                else{
                    title="Error"
                    prompt="Error"
                }
            }
            return(
                <View style={{width: maxWidth, height: maxHeight * 0.2}}>
                    <Text style={Styles.title}>{title}</Text>
                    <Text style={Styles.subTitle}>{prompt}</Text>
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
            return displayCameraView()
        }
        else{
            return renderDefaultView()
        }
    }

    return(
        <View>
            <Banner />
            {mainReturn()}
        </View>
        
    )

}

const Styles = StyleSheet.create({
    title: {
        marginLeft: 30,
        width: maxWidth - 60,
        marginTop: 30,
        fontSize: 24,
        fontFamily: "GilroyBold",
        color: "#444444"
    },
    subTitle: {
        marginLeft: 30,
        width: maxWidth - 70,
        marginBottom: 5,
        fontFamily: 'GilroyBold',
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 2,
        color: '#888888'
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    imageBox: {
        width: '100%',
    },
    img: {
        width: 200,
        height: 200,

    }
})


export default CameraPage