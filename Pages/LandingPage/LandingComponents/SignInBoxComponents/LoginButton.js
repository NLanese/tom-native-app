import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native';
import { ButtonStyles } from '../../../../Styles/LandingPageStyles';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../GraphQL/operations';
import stateChange from '../../../../Hooks/handleToken'

const LoginButton = ({ userData, handleLoggedIn }) => {
	const [login, { loading: loading, error: error, data: data }] =
		useMutation(LOGIN);
	const [user, setUser] = useRecoilState(userState);
	let history = useHistory();

	useEffect( async () => {
		if (!loading && data) {
			await setUser(data.signinDriver)
			await stateChange(data.signinDriver.token);
			await handleLoggedIn()
			await history.push("/home");
		}
	}, [data])

	return (
		<View style={ButtonStyles.container}>
			<Button
				onPress={() => {
					login({
					variables: {
						email: userData.email,
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