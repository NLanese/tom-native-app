import React, { useState, useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { userState } from '../../../Recoil/atoms';
import { View, Button, Modal, TextInput, Text, Pressable, ScrollView } from 'react-native'
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../../GraphQL/operations';
import { buttonStyles, signUpModal } from '../../../../Styles/LandingPageStyles';

/* Add phoneNumber / firstname / lastname / adminEmail INPUTS */
/* Add fields above to the onPress on button */
/* console log the data to make sure request when through */
const SignUpButton = () => {
	const [userData, setUserData] = useState({})
    const [signup, { loading: loadingS, error: errorS, data: dataS }] =
		useMutation(SIGNUP);
    const [modalVisible, setModalVisible] = useState(false);
	// const [user, setUser] = useRecoilState(userState);

	const handleInput = (id, information) => {
		const input = { ...userData };
		input[id] = information;
		setUserData(input);
	};

	/* Going to be used to check for errors */
	useEffect(() => {
		if (!loadingS && dataS) {
			console.log(dataS)
		} else {
			console.log(errorS)
		}
	}, [dataS, errorS]);

    return (
		<View style={buttonStyles.signinButton}>
		<Modal animationType='slide' transparent={true} visible={modalVisible}>
			<View style={signUpModal.centeredView}>
				<ScrollView contentContainerStyle={signUpModal.modalView}>
					<Pressable
						style={[signUpModal.button, signUpModal.buttonClose]}
						onPress={() => setModalVisible(!modalVisible)}
					/>
					<Text style={signUpModal.modalText}> First Name </Text>
					<TextInput
						name='firstname'
						style={signUpModal.input}
						onChangeText={(firstname) => {
							handleInput('firstname', firstname);
						}}
					/>
					<Text style={signUpModal.modalText}> Last Name </Text>
					<TextInput
						name='lastName'
						style={signUpModal.input}
						onChangeText={(lastName) => {
							handleInput('lastName', lastName);
						}}
					/>
					<Text style={signUpModal.modalText}> Phone Number </Text>
					<TextInput
						name='phoneNumber'
						style={signUpModal.input}
						onChangeText={(phoneNumber) => {
							handleInput('phoneNumber', phoneNumber);
						}}
					/>
					<Text style={signUpModal.modalText}> Email </Text>
					<TextInput
						name='Email'
						style={signUpModal.input}
						onChangeText={(email) => {
							handleInput('email', email);
						}}
					/>
					<Text style={signUpModal.modalText}> Username </Text>
					<TextInput
						name='Username'
						style={signUpModal.input}
						onChangeText={(username) => {
							handleInput('username', username);
						}}
					/>
					<Text style={signUpModal.modalText}> Password </Text>
					<TextInput
						name='Password'
						style={signUpModal.input}
						onChangeText={(password) => {
							handleInput('password', password);
						}}
					/>
					<Text style={signUpModal.modalText}> Administrator Email </Text>
					<TextInput
						name='adminEmail'
						style={signUpModal.input}
						onChangeText={(adminEmail) => {
							handleInput('adminEmail', adminEmail);
						}}
					/>
					<Button
						onPress={() => {
							// console.log(userData)
							// let signupObj = {
							// 	email: userData.email,
							// 	firstname: userData.firstname,
							// 	lastname: userData.lastName,
							// 	phoneNumber: userData.phoneNumber,
							// 	username: userData.username,
							// 	password: userData.password,
							// 	adminEmail: userData.adminEmail	
							// }
							// console.log(signupObj)
							console.log("attempt in progress")
							signup({
								// variables: {
								// 	SignupInput: {
								// 		email: userData.email,
								// 		firstname: userData.firstname,
								// 		lastname: userData.lastName,
								// 		phoneNumber: userData.phoneNumber,
								// 		username: userData.username,
								// 		password: userData.password,
								// 		adminEmail: userData.adminEmail
								// 	},
								// },
							});
							// setModalVisible(!modalVisible);
						}}
						title='Sign Up!'
						color='white'
						accessibilityLabel='Sign Up!'
					/>
				</ScrollView>
			</View>
		</Modal>
		<Button
			onPress={() => setModalVisible(!modalVisible)}
			title='Sign Up!'
			color='#F6AE2D'
			accessibilityLabel='Sign Up!'
		/>
	</View>
		);
    };

export default SignUpButton;