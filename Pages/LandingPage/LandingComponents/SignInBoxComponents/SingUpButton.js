import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { websiteState } from '../../../../Recoil/atoms';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../../GraphQL/operations';

import stateChange from '../../../../Hooks/handleToken'

import { useNavigation } from '@react-navigation/native';


const SignupButton = ({ userData, handleLoggedIn }) => {
	const navigation = useNavigation()

// ---------------------------- Mutations ---------------------------- //

	// Login Mutation
	const [signup, { loading: loading, error: error, data: data }] =
		useMutation(SIGNUP);

	const storeData = async () => {
		try {
			await AsyncStorage.setItem('@email', userData.email)
			await AsyncStorage.setItem('@password', userData.password)
		} catch (e) {
			console.log(e)
		}
	}

	// Handles the data changes and reroutes to the logged-in home page
	useEffect( async () => {
		if (!loading && data) {
			// await storeData()
			await setUser(data.driverSignUp)
			await stateChange(data.driverSignUp.token);
			await handleLoggedIn()
		}
	}, [data])

// ---------------------------- Mutations ---------------------------- //
//																	   //
//																	   //
// ----------------------------- States ------------------------------ //

	const [user, setUser] = useRecoilState(userState);

	const [website, setWebsite] = useRecoilState(websiteState)

// ----------------------------- States ------------------------------ //
//																	   //
//																	   //
// ---------------------------- Handlers ----------------------------- //


	// Handles the Login Click Button
	const handleSubmit = async () => {
        if (userData.confirmPassword != userData.password){
            console.log("Implement Error")
        }
        console.log(userData)
		await signup({
			variables: {
                firstname: userData.firstname,
                lastname: userData.lastname,
				email: userData.email,
				password: userData.password,
                phoneNumber: userData.phoneNumber,
                signUpToken: userData.signUpToken

			},
		}).then(() => {
			setWebsite({current: "Home", previous: "Landing", saved: null, saved: website.saved})
		})
	}


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
		if (
            userData.password.length > 5 && 
            userData.email.length > 5 &&
            userData.firstname.length > 1 &&
            userData.lastname.length > 1 &&
            userData.phoneNumber.length > 8 &&
            userData.password.length > 5 &&
            userData.confirmPassword.length == userData.password.length &&
            userData.signupToken.length > 4
        ){
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

export default SignupButton;