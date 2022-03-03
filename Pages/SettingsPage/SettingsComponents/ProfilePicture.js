import React, { useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Banner from "../../../Global/Banner";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
// import {launchCamera, launchImageLibrary } from 'react-native-image-picker';


const ProfilePicture = () => {
    const [imageUri, setimageUri] = useState('');
    const [imageUriGallary, setimageUriGallary] = useState('');
    const [image, setImage] = useState(null);

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // useEffect(() => {
    //     (async () => {
    //     if (Platform.OS !== 'web') {
    //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //         if (status !== 'granted') {
    //         alert('Sorry, we need camera roll permissions to make this work!');
    //         }
    //     }
    //     })();
    // }, []);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setImage(result.uri);
    //     }
    // };


    // const openCamera = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true,
    //       }).then(image => {
    //         console.log(image);
    //       });
    // }

    // const openCamera = () => {
    //     const options = {
    //         storageOptions: {
    //             path: 'images',
    //             mediaType: 'photo'
    //         },
    //         includeBase64: true
    //     }

    //     launchCamera(options, response => {
    //         console.log(`Response = ${response}`)

    //         if (response.didCancel) {
    //             console.log(`User cancelled image picker`)
    //         }

    //         if (response.error) {
    //             console.log(`ImagePicker Error: ${response.error}`)
    //         }

    //         if (response.customButton) {
    //             console.log(`User tapped custom button: ${response.customButton}`)
    //         }

    //         // You can also display the image using data:
    //         const source = {uri: 'data:image/jpeg;base64,' + response.base64};
    //         setimageUri(source);
    //     })
    // }

    // const openCamera = () => {
    //     let options = {
    //         storageOption: {},
    //     };

    //     launchCamera(options, (response))
    // }
    // let options = {
    //     title: 'Select Image',
    //     customButtons: [
    //       { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    //     ],
    //     storageOptions: {
    //       skipBackup: true,
    //       path: 'images',
    //     },
    //   };

    // const result = await launchCamera(options);

    // You can also use as a promise without 'callback':
    // const result = launchCamera(options, (response));

    return (
        <View style={styles.container}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );


    // return (
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //       <Button title="Pick an image from camera roll" onPress={pickImage} />
    //       {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    //     </View>
    //   );

    // return (
    //     <View>
    //         <Banner />
    //         <Text>HELLO FROM TAKE PROFILE PICTURE!</Text>

    //         <Button
    //             title={'Open Camara'}
    //             onPress={() => {
    //             console.log('hit')
    //             // openCamera();
    //         }}
    //         />

    //     </View>
    // )
}

const styles = StyleSheet.create({
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
  });

export default ProfilePicture