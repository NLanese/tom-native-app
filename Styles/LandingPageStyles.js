import { relayStylePagination } from '@apollo/client/utilities';
import { StyleSheet, Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const LandingStyles = StyleSheet.create({
	backdrop: {
		flex: 1,
		position: 'relative',
		resizeMode: 'cover'
	},	
	gradient: {
		zIndex: 3,
		position: 'relative',
		resizeMode: 'cover'
	},	
	container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
		// backgroundColor: "green"
    },
	titleIcon: {
		width: maxWidth * 0.2,
		marginLeft: maxWidth * 0.4,
		alignItems: 'center'
	},
	contents: {
		position: 'relative',
		marginTop: maxHeight * 0.132
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
	// ---------------------------------
	container: {
		marginTop: maxHeight * 0.03,
	},
	// ---------------------------------
	loginButton: {
		marginLeft: maxWidth * 0.75
	},
	signupButton: {
		marginTop: 20,
		marginLeft: maxWidth * 0.75
	},
	loginContents: {
		height: 65,
		width: maxWidth,
		marginBottom: 15,
		marginLeft: '-5%'
	},
	// ---------------------------------
	titleBox: {
		width: maxWidth * 0.30,
		height: maxHeight * 0.06,

		marginLeft: maxWidth * 0.35,
		marginBottom: maxHeight * 0.05,
	},
	titleText: {
		textAlign: 'center',
		fontFamily: "GilroyBold",
		fontSize: 30,
		color: 'white'
	},
	// ---------------------------------
	rememberMe: {
		fontFamily: 'GilroyLight'
	},
	rememberToggle: {
		width: 50,
		height: 30,
		borderRadius: 30,
		backgroundColor: '#d4d4d4',

		marginTop: maxHeight * -0.042,
		marginLeft: maxWidth * 0.08,
	},
	rememberMeTextBox: {
		position: 'absolute',
		marginTop: maxHeight * -0.030,
		marginLeft: maxWidth * 0.25
	},
	// ----------------------------------
	forgotPasswordSpace: {
		alignContent: 'center',
		// borderWidth: 3,
		marginTop: 130
	},
	divider: {
		width: maxWidth * .9,
		marginLeft: maxWidth * .05,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.24)'
	},
	forgotBox: {
		width: maxWidth * 0.5,
		marginLeft: maxWidth * .25,
		alignItems: 'center',
	},
	forgotPasswordText: {
		fontFamily: "GilroySemiBold",
		fontSize: 12,
		letterSpacing: 3,
		color: 'rgba(255, 255, 255, 0.36)',
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


const LandingPageStyles = StyleSheet.create({
	container: {
		width: maxWidth,
		height: maxHeight,
	},
	tabBarContainer: {
		// alignItems: 'center',
		marginLeft: '10%',
		marginTop: '0%',
		marginBottom: '10%',
		width: '80%',
		height: '6%',
		color: 'white'
	},
	tabBar: {
		width: '100%',
		fontFamily: 'GilroyLight'
	},
	inactiveTab: {
		width: 154,
		paddingBottom: 16,
		borderBottomColor: 'rgba(238, 238, 238, 0.25)',
		borderBottomWidth: 3,
	},
	activeTab: {
		width: 154,
		paddingBottom: 16,
		borderBottomColor: "#EEEEEE",
		borderBottomWidth: 3,
	},
	activeText: {
		fontFamily: "GilroyBold",
		fontSize: 12,
		letterSpacing: 3,
		color: "#EEEEEE",
		textAlign: 'center'
	},
	inactiveText: {
		fontFamily: "GilroyBold",
		fontSize: 12,
		letterSpacing: 3,
		color: 'rgba(238, 238, 238, 0.25)',
		textAlign: 'center'
	}
})

export {
	LandingStyles,
	LogoStyles,
	SignInBoxStyles,
	ButtonStyles,
	LandingPageStyles
};