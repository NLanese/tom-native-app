import { relayStylePagination } from '@apollo/client/utilities';
import { StyleSheet } from 'react-native';

const LandingStyles = StyleSheet.create({
	container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
    },
})

const LogoStyles = StyleSheet.create({
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  }
})

const SignInBoxStyles = StyleSheet.create({
	container: {
		marginTop: 40,
		shadowColor: '#ffffff',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
	},

	loginContents: {
		top: 30,
		height: 65,
		width: 340,
	},

	signUpContents: {
		// backgroundColor: "red",
		marginTop: 10,
		bottom: 10,
		height: 500,
	}
});

const EmailStyles = StyleSheet.create({
	input: {
		backgroundColor: '#f1f1f1'
	}
});

const ButtonStyles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	signinButton: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingLeft: 25,
		paddingRight: 25,
		marginTop: 150,
		shadowColor: '#02020A',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.65,
		shadowRadius: 6,
	},
	signUpSubmitButton: {
		height: 35,
		width: 200,
		backgroundColor: 'white',
		marginBottom: 75,
		marginTop: 10,
		// borderRadius: 20,
		// shadowColor: '#02020A',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 6,
	},

	logInButton: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'black',
		marginTop: 5
	},
	signUpButton: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: 175,
		shadowOpacity: 0.0,
	},

	signUpButtonText: {
		color: "black"
	},
	 
	button: {
		borderRadius: 25,
	},
});

const SignUpModalStyles = StyleSheet.create({

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
		marginBottom: 75
	},

	outsideModal: {
		display: "flex",
		backgroundColor: "black",
		color: "black"
	},
	 
	modal: {
		width: 300,
		height: 200,
		backgroundColor: 'black',
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
		backgroundColor: "black",
		top: 0,
		width: 370,
		height: 650,
		display: 'flex',
		alignItems: 'center'
	},

	container: {
		margin: 0,
	},

	modalTitle: {
		marginTop: 15,
		top: 0,
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
		marginBottom: 10
	},

	inputField: {
        flex: 1,
        marginTop: 0,
		marginBottom: 2,
        backgroundColor: '#f1f1f1',
		width: '80%',	
		top: 0,
		height: 45,
		paddingVertical: -5,
	},

	submitbutton: {
		marginTop: 10,
		flex: 2
	}


});

export {
	LandingStyles,
	LogoStyles,
	SignInBoxStyles,
	EmailStyles,
	ButtonStyles,
	SignUpModalStyles,
};