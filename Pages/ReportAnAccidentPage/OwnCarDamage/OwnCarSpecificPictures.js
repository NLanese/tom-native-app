import React, { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
// import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
// import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, cameraPermissionState, ownCarDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Camera } from 'expo-camera';

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const OwnCarSpecificPictures = () => {
    const [ownCarData, setOwnCarData] = useRecoilState(ownCarDataState)
    const navigation = useNavigation()
    // Camera permissions and device type state
    const [hasPermission, setHasPermission] = useRecoilState(cameraPermissionState)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
    const [showCamera, setShowCamera] = useState(false)
    const [image, setImage] = useState(null)

    // Camera ref to enable picture taking
    const cameraRef = useRef(null)

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

        setOwnCarData({
            ...ownCarData,
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
                                <Text style={Styles.text}> Flip </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={Styles.button}
                            onPress={async () => {
                                    const r = await takePhoto()
                                    if (!r.cancelled) {
                                        setImage(r.uri)
                                        let images = [...ownCarData.specific_pictures];
                                        images.push(r.uri)
                                        setOwnCarData({
                                            ...ownCarData,
                                            specific_pictures: images
                                        })
                                        // console.log(images)
                                    }
                                    // alert(`DEBUG: ${JSON.stringify(r)}`)
                                    setShowCamera(false)
                                }  
                            }
                            >
                                <Text style={Styles.text}> Take Photo </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={Styles.button}
                            onPress={async () => {
                                setShowCamera(false)
                            }  
                            }
                            >
                                <Text style={Styles.text}> Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                :
                    // When camera is NOT showing
                    <View style={Styles.container}>
                        <View style={Styles.buttonContainer}>
                            <View style={Styles.imageBox}>
                                {image && (
                                    <Image 
                                        source={{ uri: image }}
                                        style={Styles.img}
                                    />
                                )}
                            <TouchableOpacity 
                                style={Styles.button}
                                onPress={async () => {
                                        setShowCamera(true)
                                    }  
                                }
                                >
                                <Text style={Styles.text}> Open Camera </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.continue}>
                            <ContinueButton nextPage={'collision-accident-information'} nextSite={'Collision Information'} buttonText={'Done'} pageName={'collision-specific-pictures-continue-button'}/> 
                        </View>
                    </View>
                }
        </View>
    )
}

// TODO: Continue Button needs to be the right button

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
    },
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        padding: 50
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    imageBox: {
        width: '100%',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,

    }
})

export default OwnCarSpecificPictures