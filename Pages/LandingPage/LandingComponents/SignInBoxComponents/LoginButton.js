import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native';
import { buttonStyles } from '../../../../Styles/LandingPageStyles';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../GraphQL/operations';
import stateChange from '../../../../Hooks/handleToken'

const LoginButton = ({ userData, handleLoggedIn }) => {
	const [login, { loading: loadingL, error: errorL, data: dataL }] =
		useMutation(LOGIN);
	const [user, setUser] = useRecoilState(userState);
	let history = useHistory();

	useEffect( async () => {
		if (!loadingL && dataL) {
			await setUser(dataL.signinDriver)
			await stateChange(dataL.signinDriver.token);
			await handleLoggedIn()
			await history.push("/home");
		}
	}, [dataL])

	return (
		<View style={buttonStyles.container}>
			<Button
				onPress={() => {
					login({
					variables: {
						email: userData.username,
						password: userData.password,
					},
				});}}
				title='Login!'
				color='#CCCCCC'
				accessibilityLabel='Login!'
			/>
		</View>
	);
};

export default LoginButton;