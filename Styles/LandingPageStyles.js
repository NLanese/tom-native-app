import { StyleSheet } from 'react-native';

const LandingStyles = StyleSheet.create({
	container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
    },
})

const SignInBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		height: 250,
		width: '90%',
		borderRadius: 10,
		paddingTop: 10,
		marginTop: 100
	},
});

const EmailStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginTop: 10
	},
	input: {
		backgroundColor: '#02020A',
		color: '#ffffff',
		height: 40,
		width: 225,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
});

const ButtonStyles = StyleSheet.create({
	container: {
		display: 'flex'
	},
	signinButton: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingLeft: 25,
		paddingRight: 25,
		marginTop: 150
	},
	signUpSubmitButton: {
		height: 35,
		width: 150,
		backgroundColor: '#ffffff',
		marginBottom: 50,
		marginTop: 10,
		borderRadius: 20,
	},
	logInButton: {
		backgroundColor: '#02020A',
		marginLeft: 25,
		marginRight: 25
	},
	button: {
		borderRadius: 25,
	},
});

const SignUpModal = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginBottom: 75
	},
	modalView: {
		width: 300,
		height: 200,
		backgroundColor: '#02020A',
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		paddingTop: 20
	},
	insideModalView: {
		display: 'flex',
		alignItems: 'center'
	},	
	button: {
		borderRadius: 20,
		marginBottom: 100,
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 5,
		textAlign: 'center',
		color: '#ffffff',
	},
	modalTitle: {
		marginBottom: 5,
		textAlign: 'center',
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 24
	},
	modalSubTitle: {
		marginBottom: 5,
		textAlign: 'center',
		color: '#ffffff',
		fontSize: 12,
		marginBottom: 25
	},
	input: {
		backgroundColor: '#ffffff',
		color: '#02020A',
		height: 40,
		width: 225,
		marginBottom: 15,
		borderWidth: 1,
		borderRadius: 10,
	},
});

export {
	LandingStyles,
	SignInBoxStyles,
	EmailStyles,
	ButtonStyles,
	SignUpModal,
};