import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";
import { collisionDataState, accidentDataState, cameraPermissionState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";
import { Camera } from 'expo-camera';

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionSpecificPictures = () => {
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)
    const navigation = useNavigation()
    // Camera permissions and device type state
    const [hasPermission, setHasPermission] = useRecoilState(cameraPermissionState)
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        // Get permission to use the camera
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            console.log(status)
            setHasPermission(status)
            if (status === 'denied') {
                alert('Camera access is required. Please modify your device permissions in the Systems Preferences page or contact your manager')
                navigation.navigate('create-collision-accident')
            }
        })();

        setCollisionData({
            ...collisionData,
            specific_pictures: {
                'Pic One': "Test url" // Change this to setCollisionData({...collisionData, specific_pictures: { pic_one: <input>} })
            },
        })
    }, [hasPermission])

    return (
        <View style={Styles.container}>
            <Banner />
                <Camera style={Styles.camera} type={cameraType}>
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
                    </View>
                </Camera>

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
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})

export default CollisionSpecificPictures