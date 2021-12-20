import { StyleSheet } from 'react-native';

const titleStyles = StyleSheet.create({
	container: {
        paddingTop: 20,
        paddingBottom: 50,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	text: {
		color: '#F6AE2D',
		fontSize: 48,
		paddingTop: 25,
	},
	rtext: {
		color: '#95110F',
		fontSize: 72,
        fontWeight: 'bold'
	},
});

const SignInBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: '#95110F',
		height: 550,
		borderRadius: 10,
		paddingTop: 10,
	},
});

const userNameStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		backgroundColor: '#02020A',
		color: '#F7F7FF',
		height: 40,
		width: 225,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
});

const buttonStyles = StyleSheet.create({
	container: {
		paddingLeft: 25,
		paddingRight: 25,
	},
	signinButton: {
		paddingLeft: 25,
		paddingRight: 25,
		marginTop: 285
	},
	button: {
		borderRadius: 25,
	},
});

const signUpModal = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		width: 250,
		backgroundColor: '#02020A',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		marginTop: 135,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: '#F7F7FF',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		color: '#F7F7FF',
	},
	input: {
		backgroundColor: '#F7F7FF',
		color: '#02020A',
		height: 40,
		width: 225,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
});

export {
	titleStyles,
	SignInBoxStyles,
	userNameStyles,
	buttonStyles,
	signUpModal,
};