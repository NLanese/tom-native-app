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
        const [imageIndex, setImageIndex] = useState(0)
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
            else if (type === "injury" || type === "collision-injury"){
                changeFunction = setInjuryData
                changeValue = injuryData
            }
            else if (type === "self-injury" || type === "self-accident-injury"){
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

        // Either adds one, removes one, or does nothing to the imageIndex 
        const changeImageIndex = (addOrSub) => {
            if (addOrSub === "add"){
                if (imageIndex < images.length - 1){
                    setImageIndex(1 + imageIndex)
                }
            }
            else if (addOrSub === "sub"){
                if (imageIndex !== 0){
                    setImageIndex(-1 + imageIndex)
                }
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
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: maxWidth * .9, marginTop: maxHeight * 0.65, marginLeft: maxHeight * 0.05}}>
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
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                            <Text style={Styles.text}> Flip </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }

        // Picture Button //
        const renderTakePicture = () => {
            return(
                <View >
                    <TouchableOpacity 
                    style={Styles.button}
                    onPress={() => {handleClickTakePicture()}   
                    }>
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
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
                        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
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
                        <View style={{marginTop: 15, width: maxWidth * 0.5, marginLeft: maxWidth * 0.25}}>
                            {renderTakenPictures()}  
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: maxWidth * .15 - 10, width: maxWidth * .7, marginTop: 100}}>
                        {renderOpenCameraButton()}
                        {renderContinueButton()}
                    </View>
                </View>
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
            if (images.length > 0){
                return(
                    <View>
                        {/* Title */}
                        <View >
                            <Text style={{textAlign: 'center'}}>Picture {imageIndex + 1} of {images.length}</Text>
                        </View>

                        {/* Picture and Arrows */}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', height: maxHeight * 0.25, width: maxWidth, marginLeft: -maxWidth * .251}}>

                            {/* index - 1 button*/}
                            <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 70}} 
                            onPress={() => changeImageIndex("sub")}
                            >
                                <Text style={{textAlign: 'center', fontSize: 30}}>{'<'}</Text>
                            </TouchableOpacity>

                            <Image 
                                source={{ uri: images[imageIndex] }}
                                style={Styles.img}
                            />

                            {/* index + 1 button */}
                            <TouchableOpacity style={{flex: 1, alignItems: 'center', marginTop: 70}}
                            onPress={() => changeImageIndex("add")}
                            >
                                <Text style={{textAlign: 'center', fontSize: 30}}>{'>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            else{
                return(
                    <>
                        {renderNoPictures()}
                    </>
                )
            }
        }

        // Renders the "No Pictures" Prompt when there are 0 images
        const renderNoPictures = () => {
            return (
                <View style={{marginBottom: maxHeight * 0.25}}>
                    <Text style={{...Styles.text, color: 'black'}}>You haven't taken any pictures</Text>
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

        // Renders the ContinueButton. Routes and Sites will vary based on the Camera Type
        const renderContinueButton = () => {
            if (type === "collision"){
                return(
                    <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/>
                )
            }
            else if (type === "collision-injury"){
               return(
                    <ContinueButton nextPage={'collision-injury-report-information'} nextSite={"Collision Injury Info"} buttonText={'Done'} pageName={'collision-injury-specific-pictures-continue-button'}/>
               )
            }
            else if (type === "injury"){
                return(
                    <ContinueButton nextPage={'injury-report-information'} nextSite={"Injury Info"} buttonText={'Done'} pageName={'injury-specific-pictures-continue-button'}/>
               )
            }
            else if (type === "self-injury"){
                return(
                    <ContinueButton nextPage={'user-injury-information'} nextSite={"Your Own Injury Information"} buttonText={'Done'} pageName={'self-injury-specific-picture=continue-button'}/>
                )
            }
            else if (type === "self-accident-injury"){
                return(
                    <ContinueButton nextPage={"user-accident-injury-information"} nextSite={"Your Own Accident Injury Information"} buttonText={'Done'} pageName={'self-accident-injury-specific-picture=continue-button'}/>
                )
            }
            else if (type === "general"){
                changeFunction = setAccidentData
                changeValue = accidentData
            }
            else if (type === "property"){
                return(
                    <ContinueButton nextPage={'property-accident-information'} nextSite={"Property Damage Information"} buttonText={'Done'} pageName={'property-specific-pictures-continue-button'}/>
                )
            } 
            else if (type === "self-damage"){
                return(
                    <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/> 
                )
            }
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
        letterSpacing: 1,
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
        flex: 5,
        height: '150%',
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: 'grey'
    }
})


export default CameraPage