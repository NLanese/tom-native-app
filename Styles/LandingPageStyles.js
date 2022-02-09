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
		marginLeft: maxWidth * 0.7
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
		marginTop: -300,
		fontFamily: 'GilroyLight'
	},
	rememberToggle: {
		width: 50,
		height: 30,
		borderRadius: 30,
		backgroundColor: '#d4d4d4',

		marginTop: maxHeight * -0.084,
		marginLeft: maxWidth * 0.08,
	},
	rememberMeTextBox: {
		position: 'absolute',
		marginTop: maxHeight * -0.073,
		marginLeft: maxWidth * 0.25
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
		marginTop: '10%',
		width: '80%',
		height: '6%',
		color: 'white'
	},
	tabBar: {
		backgroundColor: 'rgba(52, 52, 52, 0.1) !important',
		width: '100%',
		fontFamily: 'GilroyLight'
	},
	loginTab: {
		borderBottomColor: "white",
		color: 'white',
	},
	signUpTab: {
		borderBottomColor: "white",
		color: 'white',
	}
})

export {
	LandingStyles,
	LogoStyles,
	SignInBoxStyles,
	ButtonStyles,
	LandingPageStyles
};