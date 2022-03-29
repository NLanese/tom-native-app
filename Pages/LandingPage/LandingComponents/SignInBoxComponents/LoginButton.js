import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useRecoilState } from 'recoil'
import { cameraPermissionState, userState } from '../../../../Recoil/atoms'
import { websiteState } from '../../../../Recoil/atoms';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../GraphQL/operations';

import stateChange from '../../../../Hooks/handleToken'



const LoginButton = ({ userData, handleLoggedIn, checked }) => {

// ---------------------------- Mutations ---------------------------- //

	// Login Mutation
	const [login, { loading: loading, error: error, data: data }] =
		useMutation(LOGIN);

	// Handles the data changes and reroutes to the logged-in home page
	useEffect( async () => {
		if (!loading && data) {
			// await storeData()
			await setUser(data.driverSignIn)
			await stateChange(data.driverSignIn.token);
			await handleLoggedIn()
		}
	}, [data])

// ---------------------------- Mutations ---------------------------- //
//																	   //
//																	   //
// ----------------------------- States ------------------------------ //

	const [user, setUser] = useRecoilState(userState);

	const [website, setWebsite] = useRecoilState(websiteState)

	const [hasCameraPermission, setHasCameraPermission] = useRecoilState(cameraPermissionState)

// ----------------------------- States ------------------------------ //
//																	   //
//																	   //
// ---------------------------- Handlers ----------------------------- //

	const handleSubmit = async () => {
		await login({
		variables: {
		email: userData.email,
		password: userData.password,
		},
		})
		// Store email and password to AsyncStorage on login if Remember Me option is selected
		.then(async () => {
			console.log(`checked: ${checked}`)
			if (checked === true) {
				// Check and see if email and password are in AsyncStorage
				try {
					const email = await AsyncStorage.getItem('@email')
					const password = await AsyncStorage.getItem('@password')
					await AsyncStorage.setItem('@remember_User', 'true')
					// If email and password don't already exist in AsyncStorage, save them to AsyncStorage on login
					if (email === null && password === null) {
						try {
							await AsyncStorage.setItem('@email', userData.email)
							await AsyncStorage.setItem('@password', userData.password)
						} catch (error) {
							console.error(error)
						}
					}
				} catch (error) {
					console.error(error)
				}
			}
			else {
				try {
					await AsyncStorage.clear()
				} catch (error) {
					console.error(error)
				}
			}
		})
		.then(() => {
		setWebsite({
		current: "Home",
		previous: "Landing",
		saved: website.saved,
		});
		})
		// .then(() => {
		// 	console.log(`Pre-check for permissions: ${hasCameraPermission}`)
		// 	const permissions = await Camera.requestCameraPermissionsAsync()
		// 	if (hasCameraPermission === 'denied') {
		// 		console.log('in denial check')
		// 		setHasCameraPermission(null)
		// 	}
		// 	console.log(`After checking current permissions for denial: ${hasCameraPermission}`)
		// })
		.catch((error) => console.log(error));
		};


// ---------------------------- Handlers ----------------------------- //
//																	   //
//																	   //
// ------------------------- Button Related -------------------------- //

	// Button Oriented States
	const [buttonLoading, setButtonLoading] = useState(false)
	const [buttonLoaded, setButtonLoaded] = useState(false)
    const [buttonHeight, setButtonHeight] = useState(0)


	// Renders the Button with the Overlay with Dynamic Height
	const renderButton = () => {
		// if (userData.password.length > 5 && userData.email.length > 5){
		if (!buttonLoading && !buttonLoaded){
			setButtonLoading(true)
			return(
				<View>
					<View style={{position: 'absolute', height: (50 - buttonHeight), zIndex: 20, overflow: 'hidden',}}>
						<Image source={require("../../../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>
					</View>
					<Image source={require("../../../../assets/check-button.png")} style={{height: 50, width: 50}}/>
				</View>
			)
		}
		// }
		else{
			if (buttonLoaded){
				setButtonLoaded(false)
				setButtonHeight(0)
			}
			return(<Image source={require("../../../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>)
		}
	}

	if (buttonLoading){
        setTimeout(() => {
            if (buttonHeight < 50){
                setButtonHeight(buttonHeight + 5)
            }
            else{
				setButtonLoaded(true)
                setButtonLoading(false)
            }
        }, 0.5)
    }


// ------------------------- Button Related -------------------------- //


	return (
		<View>
			<TouchableOpacity onPress={() => handleSubmit()}>
				<View>
					{renderButton()}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default LoginButton;