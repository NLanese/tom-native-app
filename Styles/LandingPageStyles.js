import { relayStylePagination } from '@apollo/client/utilities';
import { StyleSheet, Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const LandingStyles = StyleSheet.create({
	container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
		backgroundColor: "green"
    },
	titleIcon: {
		width: maxWidth * 0.2,
		marginLeft: maxWidth * 0.4,
		alignItems: 'center'
	}
})

const LogoStyles = StyleSheet.create({
	logo: {
		resizeMode: 'stretch',
		width: 90,
		height: 55,
		marginTop: 60,
	  }
})

const SignInBoxStyles = StyleSheet.create({
	container: {
		marginTop: maxHeight * 0.03,
	},

	loginContents: {
		height: 65,
		width: maxWidth,
		marginBottom: 15
	},

	titleBox: {
		width: maxWidth * 0.20,
		height: maxHeight * 0.06,

		marginLeft: maxWidth * 0.4,
		marginBottom: maxHeight * 0.05,
		// borderColor: 'black',
		// borderWidth: 1,
		// backgroundColor: 'red',
	},

	titleText: {
		// fontFamily: "Gilroy-Heavy",
		fontSize: 30
	}

});

const EmailStyles = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(52, 52, 52, 0.3) !important',
		width: maxWidth * 0.75,
		height: maxHeight * 0.1,
		marginLeft: maxWidth * 0.125,
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
	},


});

const LandingPageStyles = StyleSheet.create({
	container: {
		width: maxWidth,
		height: maxHeight,
	},
	tabBarContainer: {
		marginTop: maxHeight * 0.045,
		marginLeft: maxWidth * 0.075,
		marginBottom: maxHeight * 0.06,

		borderWidth: 1,
		borderColor: 'black',
		width: maxWidth * 0.85,
	},
	tabBar: {
		backgroundColor: 'rgba(52, 52, 52, 0.0) !important',
		
	}
})

export {
	LandingStyles,
	LogoStyles,
	SignInBoxStyles,
	EmailStyles,
	ButtonStyles,
	SignUpModalStyles,
	LandingPageStyles
};