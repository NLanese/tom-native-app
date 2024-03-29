import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useRecoilState } from 'recoil'
import { cameraPermissionState, userState, loggedState, errorDataState } from '../../../../Recoil/atoms'
import { websiteState } from '../../../../Recoil/atoms';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMutation, useQuery } from '@apollo/client';
import { IS_SERVER_READY, LOGIN } from '../../../../GraphQL/operations';

import stateChange from '../../../../Hooks/handleToken'



const LoginButton = ({ userData, handleLoggedIn, checked }) => {
	const navigation = useNavigation()
	const [errorState, setErrorState] = useRecoilState(errorDataState)
// ---------------------------- Mutations ---------------------------- //

	// Login Mutation
	const [login, { loading: loading, error: error, data: data }] =
		useMutation(LOGIN);


	// Handles the data changes and reroutes to the logged-in home page
	useEffect(() => {
		if (!loading && data) {
			if (!data.driverSignIn){
				return
			}
			// await storeData()
			console.log(data.driverSignIn.token)
			 setUser(data.driverSignIn)
			 stateChange(data.driverSignIn.token);
			 handleLoggedIn()
		}
	}, [loading])


// ---------------------------- Mutations ---------------------------- //
//																	   //
//																	   //
// ----------------------------- States ------------------------------ //

	const [user, setUser] = useRecoilState(userState);

	const [logged, setLogged] = useRecoilState(loggedState)

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
		.then( (resolved) => {

			// Failed Login // 
			if (resolved.data.driverSignIn === null){
				return resolved.data.driverSignIn
			}

			// Successful Login
			else{
				setLogged(true)
				setErrorState({...errorState, email_login: false, password_login: false})
				// If REMEMBER ME
				if (checked) {
					try {
						const email =  AsyncStorage.getItem('@email')
						const password =  AsyncStorage.getItem('@password')
						AsyncStorage.setItem('@remember_User', 'true')
						// If email and password don't already exist in AsyncStorage, save them to AsyncStorage on login
						if (email === null && password === null) {
							try {
								AsyncStorage.setItem('@email', userData.email)
								AsyncStorage.setItem('@password', userData.password)
							} catch (error) {
								console.error(error)
							}
						}
						navigation.navigate("home")
					} catch (error) {
						console.error(error)
					}
				}

				// If NOT REMEMBER ME
				if (!checked) {
					navigation.navigate("home")
				}

				setWebsite({
					current: "Home",
					previous: "Landing",
					saved: website.saved,
				});
			}

		}).catch((error) => {
			let errorMessage = error.toString().split("\n")[0]
			if (errorMessage === "Error: Error: No User exists with this email!"){
				setErrorState({...errorState, email_login: "Incorrect Email"})
			}
			else{
				setErrorState({...errorState, email_login: false})
			}
			if (errorMessage === "Error: Error: Wrong Passowrd!"){
				setErrorState({...errorState, password_login: "Incorrect Password!"})
			}
		});
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
		if (userData.password.length > 5 && userData.email.length > 5){
			if (!buttonLoading && !buttonLoaded){
				setButtonLoading(true)
			}
			return(
				<View>
					<View style={{position: 'absolute', height: (50 - buttonHeight), zIndex: 20, overflow: 'hidden',}}>
						<Image source={require("../../../../assets/check-button-inactive.png")} style={{height: 50, width: 50}}/>
					</View>
					<Image source={require("../../../../assets/check-button.png")} style={{height: 50, width: 50}}/>
				</View>
			)
		}
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