import React, { useState, useEffect } from 'react';
import { View, Button, Modal, TextInput, Text, Pressable } from 'react-native'
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../../../../GraphQL/operations';
import { ButtonStyles, SignUpModal } from '../../../../Styles/LandingPageStyles';

/* Add phoneNumber / firstname / lastname / adminEmail INPUTS */
/* Add fields above to the onPress on button */
/* console log the data to make sure request when through */
const SignUpButton = () => {
	const [userData, setUserData] = useState({})
    const [signup, { loading: loading, error: error, data: data }] =
		useMutation(SIGNUP);
    const [modalVisible, setModalVisible] = useState(false);

	const handleInput = (id, information) => {
		const input = { ...userData };
		input[id] = information;
		setUserData(input);
	};

	/* Going to be used to check for errors */
	useEffect(() => {
		if (!loading && data) {
			console.log(data)
		} else {
			console.log(error)
		}
	}, [data, error]);

    return (
			<View style={ButtonStyles.signinButton}>
				<Modal animationType='slide' transparent={true} visible={modalVisible}>
					<View style={SignUpModal.centeredView}>
						<View style={SignUpModal.modalView}>
							{/* <Pressable
								style={[SignUpModal.button, SignUpModal.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							/> */}

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

							<Button
								onPress={ async () => {
									await signup({
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
									await setModalVisible(!modalVisible);
								}}
								title='Sign Up!'
								color='black'
								accessibilityLabel='Sign Up!'
							/>
						</View>
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