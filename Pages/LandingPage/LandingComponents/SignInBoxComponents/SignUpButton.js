import React, { useState, useEffect } from 'react';
// import { useRecoilState } from 'recoil';
// import { userState } from '../../../Recoil/atoms';
import { View, Button, Modal, TextInput, Text, Pressable } from 'react-native'
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
						<View style={signUpModal.modalView}>
							<Pressable
								style={[signUpModal.button, signUpModal.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
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

							<Button
								onPress={() => {
									signup({
										variables: {
											signupUserSignupInput: {
												email: userData.email,
												username: userData.username,
												password: userData.password,
											},
										},
									});
									setModalVisible(!modalVisible);
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