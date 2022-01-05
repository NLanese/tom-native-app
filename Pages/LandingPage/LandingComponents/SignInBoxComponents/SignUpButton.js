import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { View, Modal, TextInput, Text, Pressable, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../../GraphQL/operations';
import { ButtonStyles, SignUpModal } from '../../../../Styles/LandingPageStyles';

const SignUpButton = () => {
	const [userData, setUserData] = useState({})
    const [signup, { loading: loading, error: error, data: data }] =
		useMutation(SIGNUP);
    const [modalVisible, setModalVisible] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const handleInput = (id, information) => {
		const input = { ...userData };
		input[id] = information;
		setUserData(input);
	};

	const handleButtonLoading = async () => {
		await setButtonLoading(!buttonLoading)
	}
	
	useEffect(() => {
		console.log(loading)
		if (loading !== false) {
			console.log('loading hit')
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
			<View>

					<Modal animationType='slide' transparent={true} visible={modalVisible} /* style={SignUpModal.modal} */>

						<View style={SignUpModal.centeredView}>
							<ScrollView style={SignUpModal.modalView}>

								<View style={SignUpModal.insideModalView}>
									<Text style={SignUpModal.modalTitle}> Tom App Sign Up! </Text>
									<Text style={SignUpModal.modalSubTitle}> Please enter the proper information below! </Text>

									<Text style={SignUpModal.modalText}> Email </Text>
									<TextInput
										name='Email'
										style={SignUpModal.input}
										onChangeText={(email) => {
											handleInput('email', email);
										}}
									/>

									<Text style={SignUpModal.modalText}> Username </Text>
									<TextInput
										name='Username'
										style={SignUpModal.input}
										onChangeText={(username) => {
											handleInput('username', username);
										}}
									/>

									<Text style={SignUpModal.modalText}> First Name </Text>
									<TextInput
										name='Firstname'
										style={SignUpModal.input}
										onChangeText={(firstname) => {
											handleInput('firstname', firstname);
										}}
									/>

									<Text style={SignUpModal.modalText}> Last Name </Text>
									<TextInput
										name='Lastname'
										style={SignUpModal.input}
										onChangeText={(lastname) => {
											handleInput('lastname', lastname);
										}}
									/>

									<Text style={SignUpModal.modalText}> Phone Number </Text>
									<TextInput
										name='Phone Number'
										style={SignUpModal.input}
										onChangeText={(phoneNumber) => {
											handleInput('phoneNumber', phoneNumber);
										}}
									/>

									<Text style={SignUpModal.modalText}> Password </Text>
									<TextInput
										name='Password'
										style={SignUpModal.input}
										onChangeText={(password) => {
											handleInput('password', password);
										}}
									/>

									<Text style={SignUpModal.modalText}> Admin Email </Text>
									<TextInput
										name='Admin Email'
										style={SignUpModal.input}
										onChangeText={(adminEmail) => {
											handleInput('adminEmail', adminEmail);
										}}
									/>

									<View style={ButtonStyles.signUpSubmitButton}>
										<Button
											title='Submit!'
											accessibilityLabel='Submit!'
											loading={buttonLoading}
											titleStyle={{ fontWeight: '700' }}
											buttonStyle={{
											backgroundColor: '#02020A',
											borderColor: 'transparent',
											borderWidth: 0,
											borderRadius: 5,
											paddingVertical: 5,
											}}
											onPress={ async () => {
												// handleButtonLoading()
												signup({
													variables: {
														signupInput: {
															email: userData.email,
															username: userData.username,
															password: userData.password,
															firstname: userData.firstname,
															lastname: userData.lastname,
															phoneNumber: userData.phoneNumber,
															adminEmail: userData.adminEmail
														},
													},
												});
												// setModalVisible(!modalVisible);
											}}
										/>
									</View>

								</View>

							</ScrollView>
						</View>
					</Modal>

				<View>
					<Button 
						icon="pen" 
						dark={true}
						mode="contained"
						style={ButtonStyles.signUpButton}
						onPress={() => setModalVisible(!modalVisible)}
						>
							Sign Up
					</Button>
				</View>
			</View>
		);
    };

export default SignUpButton;