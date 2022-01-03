import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { userState } from '../../../../Recoil/atoms'
import { useHistory } from 'react-router-native';
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import { View/* , Button */ } from 'react-native';
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
			<View style={ButtonStyles.logInButton}>
				{/* <Button
					onPress={() => {
						login({
						variables: {
							email: userData.email,
							password: userData.password,
						},
					});}}
					title='Login!'
					color='#ffffff'
					accessibilityLabel='Login!'
				/> */}

				<Button
                title="Login!"
                loading={false}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: '#02020A',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
              />

			</View>
		</View>
	);
};

export default LoginButton;