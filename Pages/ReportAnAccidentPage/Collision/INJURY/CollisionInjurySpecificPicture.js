import React, { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, injuryDataState, cameraPermissionState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Camera } from 'expo-camera';
import Gradient from "../../../../Components/Gradient"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjurySpecificPictures = ({collision}) => {
    const [collisionData] = useRecoilState(collisionDataState)
    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)
    const navigation = useNavigation()
    // Camera permissions and device type state
    const [hasPermission, setHasPermission] = useRecoilState(cameraPermissionState)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [showCamera, setShowCamera] = useState(false)
    const [image, setImage] = useState(null)

    // Camera ref to enable picture taking
    const cameraRef = useRef(null)


    let site = "Collision Injury Info"
    if (!collision){
        site = "Injury Info"
    }
    const whichContinue = () => {
        if (collision){
            return 'collision-injury-report-information'
        }
        else{
            return 'injury-report-information'
        }
    }

    useEffect(() => {
        // Get permission to use the camera
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status)
            if (status === 'denied') {
                alert('Camera access is required. Please modify your device permissions in the Systems Preferences page or contact your manager')
                navigation.navigate('create-collision-accident')
            }
        })();

        setInjuryData({
            ...injuryData,
            specific_pictures: [] // Change this to setCollisionData({...collisionData, specific_pictures: { pic_one: <input>} })
        })
        }, [hasPermission])

    // Function for taking a photo
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

    return (
        <View style={Styles.container}>
            <Banner />

                {/* CAMAERA SHOWING */}
                {showCamera ? 
                    <Camera style={Styles.camera} type={cameraType} ref={cameraRef}>
                        <View style={Styles.buttonContainer}>
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
                            <TouchableOpacity 
                            style={Styles.button}
                            onPress={async () => {
                                    const r = await takePhoto()
                                    if (!r.cancelled) {
                                        setImage(r.uri)
                                        let images = [...injuryData.specific_pictures];
                                        images.push(r.uri)
                                        setInjuryData({
                                            ...injuryData,
                                            specific_pictures: images
                                        })
                                    }
                                    setShowCamera(false)
                                }  
                            }
                            >
                                <View style={{marginTop: maxHeight * 0.62, marginLeft: maxWidth * 0.16}}>
                                    <Text style={Styles.text}> Take Photo </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={Styles.button}
                            onPress={async () => {
                                setShowCamera(false)
                            }  
                            }
                            >
                                <View style={{marginTop: maxHeight * 0.65, marginLeft: maxWidth * 0.13}}>
                                    <Text style={Styles.text}> Cancel </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                :
                    // CAMERA NOT SHOWING
                    <View style={Styles.container}>
                        <View>
                            <Text style={Styles.title}>Take a picture of the injury, if able</Text>
                        </View>
                        <View>
                            <View style={Styles.imageBox}>
                                {image && (
                                    <View style={Styles.pictureContainer}>
                                        <Image 
                                            source={{ uri: image }}
                                            style={Styles.img}
                                        />
                                    </View>
                                )}

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
                                            fontSize: 25,
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
                               
                            </View>
                        </View>
                        <View style={Styles.continue}>
                            <ContinueButton nextPage={whichContinue()} nextSite={site} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/>
                        </View>
                    </View>
                }
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
    openCamButton: {
        position: 'absolute',
        marginTop: maxHeight * 0.49,
        marginLeft: maxWidth * .57
    },
    continue: {
        position: 'absolute',
        marginTop: maxHeight * 0.60,
        marginLeft: maxWidth * .13
    },
    camera: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    pictureContainer: {
        marginTop: maxHeight * .06,
        position: 'absolute',
        marginLeft: (maxWidth -200) / 2,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        padding: 50
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

export default CollisionInjurySpecificPictures