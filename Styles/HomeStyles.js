import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const HomeStyles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		height: '100%',
	},	
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  },
	weeklyNotificationModal:{
		width: maxWidth * 0.8,
		left: maxWidth * 0.1
	},
	notificationModalContent:{
		width: maxWidth * 0.8,
		height: maxHeight * 0.6,
		backgroundColor: "#f9f9f9",
		borderRadius: 50,
	},
	weeklyNotificationTitleSpace:{
		width: maxWidth * 0.6,
		left: maxWidth * 0.1,
		paddingTop: maxHeight * 0.03,
		paddingBottom: maxHeight * 0.01,
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 4,
		alignItems: 'center',
	},
	weeklyNotificationTitle:{
		fontSize: 16,
	},
	weeklyNotificationMessage:{
		borderWidth: 1,
		width: maxWidth * 0.7,
		height: maxHeight * 0.35,
		left: maxWidth * 0.05,
		top: maxHeight * 0.02
	},
	acknowledgeContainter:{
		top: maxHeight * 0.05,
		left: maxWidth * 0.1,
		width: maxWidth * 0.6,
		// borderWidth: 1,
	},
	acknowledgeCheck:{

	}
})
const ButtonBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: "#eaeaea",
		width: '100%',
		height: '100%',
		display: 'flex',
	},
	
	rightContainer: {
		position: "absolute",
		right: maxWidth * 0.07,
		marginTop: maxHeight * 0.02,
		width: maxWidth * 0.45,
		height: maxHeight * 0.8,
	},

	leftContainer: {
		position: "absolute",
		left: maxWidth * -0.00,
		marginTop: maxHeight * 0.02,
		width: maxWidth * 0.45,
		height: maxHeight * 0.8,
		// borderWidth: 2
	},

	clickable: {
		height: maxHeight * 0.2,
		width: '96%',
		marginLeft: '9%',
		marginBottom: maxHeight * 0.09
	},

	buttonCard: {
		backgroundColor: 'white',

		height: maxHeight * 0.26,
		width: maxHeight * 0.24,

		borderRadius: 30
	},

	image: {
		alignContent: 'center',
		top: '20%',
		height: '40%',
		width: '42%',
		marginLeft: '29%'
	},

	label: {
		textAlign: 'center', 
		color: 'grey', 
		fontWeight: '700'
	}

})

const ScoreCardButtonStyles = StyleSheet.create({
	container: {
		height: 160,
		width: 160,
		shadowOpacity: 0,
		borderWidth: 1,
		borderColor: '#f1f1f1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 12,
		marginBottom: 12
	},

	CardContent: {
		textAlign: 'center',
		top: 11,
		fontSize: 16,
		lineHeight: 20
	},

	image: {
		height: 110,
		width: 160,
		backgroundColor: '#afbed3',
	},
	button: {
		
	}
})

export {
    HomeStyles,
	ButtonBoxStyles,
	ScoreCardButtonStyles
}