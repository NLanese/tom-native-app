import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { useHistory } from 'react-router-native';
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { ButtonStyles } from '../../../../Styles/LandingPageStyles';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../../GraphQL/operations';
import stateChange from '../../../../Hooks/handleToken'

const LoginButton = ({ userData, handleLoggedIn }) => {
	const [login, { loading: loading, error: error, data: data }] =
		useMutation(LOGIN);
	const [buttonLoading, setButtonLoading] = useState(false)
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

	const handleButtonLoading = () => {
		setButtonLoading(!buttonLoading)
	}

	return (
		<View>
			<View>
				<Button 
					icon="login" 
					mode="contained"
					loading={buttonLoading} 
					style={ButtonStyles.logInButton}
					onPress={ async () => {
						await handleButtonLoading()
						await login({
							variables: {
								email: userData.email,
								password: userData.password,
							},
						});
					}}
				>
						Login
				</Button>

			</View>
		</View>
	);
};

export default LoginButton;