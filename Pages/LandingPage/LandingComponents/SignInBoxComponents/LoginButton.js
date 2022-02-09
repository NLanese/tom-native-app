import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { Button, Icon } from '@ui-kitten/components';
import { View, Image } from 'react-native';
import { ButtonStyles } from '../../../../Styles/LandingPageStyles';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../GraphQL/operations';
import stateChange from '../../../../Hooks/handleToken'
import { useNavigation } from '@react-navigation/native';
import activeCheck from'../../../../assets/activeCheck.jpg'
import inactiveCheck from'../../../../assets/inactiveCheck.jpg'


const LoginButton = ({ userData, handleLoggedIn }) => {

	// Login Mutation
	const [login, { loading: loading, error: error, data: data }] =
		useMutation(LOGIN);


	// State and Recoil
	const [buttonLoading, setButtonLoading] = useState(false)
	const [user, setUser] = useRecoilState(userState);
	const navigation = useNavigation()

	const handleSubmit = async () => {
		console.log("hit")
		await handleButtonLoading()
		await login({
			variables: {
				email: userData.email,
				password: userData.password,
			},
		})
	}


	const CheckIcon = () => {
		if (ableToLogIn()){
			return(
				<View style={{height: 60, width: 60, backgroundColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}> 
					<Image source={activeCheck} style={{height: 20, width: 20, borderRadius: 100}}/>
				</View>
			)
		} else{
			return(
				<View style={{height: 60, width: 60, backgroundColor: 'white', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}> 
					<Image source={inactiveCheck} style={{height: 20, width: 20, borderRadius: 100}}/>
				</View>
			)
		}
		
	};

	// Handles the data changes and reroutes to the logged-in home page
	useEffect( async () => {
		if (!loading && data) {
			console.log("hit")
			await setUser(data.driverSignIn)
			await stateChange(data.driverSignIn.token);
			await handleLoggedIn()
			await navigation.navigate("/home");
		}
	}, [data])


	// Handles the Button Loading
	const handleButtonLoading = () => {
		setButtonLoading(!buttonLoading)
	}

	// Enables or disables the Login Button
	const ableToLogIn = () => {
		if (userData.username != "" && userData.password.length > 5 ){
			return true
		}
		else{
			return false
		}
	}

	return (
		<View>
			<View>
				<Button
					style={{width: 70, backgroundColor: 'rgba(52, 52, 52, 0.0) !important', borderColor: 'rgba(52, 52, 52, 0.0) !important'}}
					accessoryLeft={CheckIcon} 
					onPress={() => handleSubmit()}
				/>

			</View>
		</View>
	);
};

export default LoginButton;