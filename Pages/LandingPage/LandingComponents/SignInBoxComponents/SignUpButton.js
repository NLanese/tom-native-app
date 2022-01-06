import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../../GraphQL/operations';
import { ButtonStyles, SignUpModalStyles } from '../../../../Styles/LandingPageStyles';
import { Button } from 'react-native-paper';
import SignUpModal from './SignUpModal';
import {  Portal,  Provider } from 'react-native-paper';

const SignUpButton = () => {
	const [userData, setUserData] = useState({})

    const [signup, { loading: loading, error: error, data: data }] = 
		useMutation(SIGNUP);

    const [modalVisible, setModalVisible] = useState(false);

	const [buttonLoading, setButtonLoading] = useState(false);

	const handleInput = (id, information) => {
		const input = { ...userData };
		input[id] = information;
		console.log(information)
		setUserData(input);
	};

	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}
	
	useEffect(() => {
		console.log(loading)
		if (loading !== false) {
			setButtonLoading(true)
		}
	}, [loading])

	// useEffect(() => {
	// 	console.log('data hit')
	// }, [data])

	// useEffect(() => {
	// 	if (typeof data === undefined) {
	// 		console.log('errror hit')
	// 		setButtonLoading(false)
	// 	}
	// }, [error])

    return (
		<View style={SignUpModalStyles.container}>
			<Button 
				icon="pen" 
				dark={false} 
				mode="outlined" 
				style={ButtonStyles.signUpButton} 
				labelStyle={ButtonStyles.signUpButtonText}
				onPress={() => setModalVisible(!modalVisible)} >
					Sign Up
			</Button>
			<SignUpModal setModalVisible={setModalVisible} modalVisible={modalVisible} handleInput={handleInput} signup={signup} getUserData={userData}/> 
		</View>
		);
};

export default SignUpButton;