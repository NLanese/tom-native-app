import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let sideDistance = ((maxWidth - 300) * 1.15) / 3
let middleDistance = sideDistance * .70

//-------------

let modalSideDistance = (maxWidth - 318)
modalSideDistance = modalSideDistance / 2

//------------

let modalContentSideDistance = (326 - 243)
modalContentSideDistance = modalContentSideDistance / 2


const HomeStyles = StyleSheet.create({
	container: {
		height: '100%',
		height: '100%',
		backgroundColor: "#eaeaea",

		// borderColor: 'red',
		// borderWidth: 5,
	},	
//------------------------------------
	titleBox: {
		marginLeft: 30,
		marginTop: 30,
		width: 200,

		// borderColor: 'green',
		// borderWidth: 2,
	},
	subTitleBox: {
		marginTop: 4,
		marginLeft: 30,
		marginBottom: 34,
		width: 200,

		// borderColor: 'red',
		// borderWidth: 2,
	},
	title: {
		fontFamily: 'GilroyBold',
		color: "#444444",
		fontSize: 30
	},
	subTitle: {
		fontFamily: 'GilroySemiBold',
		fontSize: 10,
		letterSpacing: 2,
		color: '#888888'
	},
//-------------------------------------
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  },
//-------------------------------------
	weeklyNotificationModal:{
		height: 326,
		width: 318,

		// marginTop: maxHeight * 0.20
	},
	notificationModalContent:{
		width: 318,
		height: 326,

		left: modalSideDistance,

		height: maxHeight * 0.6,
		backgroundColor: "#f9f9f9",
		borderRadius: 50,
	},
//--------------------------------------
	weeklyNotificationTitleSpace:{
		marginTop: 36,
		marginBottom: 32,
		alignItems: 'center',
	},
	weeklyNotificationTitle:{
		fontFamily: 'GilroyBold',
		fontSize: 25,

		letterSpacing: -0.5,
	},
	weeklyNotificationMessage:{
		width: 243,
		height: 140,
		// borderColor: 'black',
		// borderWidth: 2,
		marginLeft: modalContentSideDistance,
	},
	messageText: {
		color: '#888888',
		fontFamily: 'GilroyMedium',
		lineHeight: 20,
	},
//---------------------------------------
	acknowledgeContainter:{
		top: maxHeight * 0.05,
		left: maxWidth * 0.1,
		width: maxWidth * 0.6,
	},
	checkBox: {
		height: 22,
		width: 22,
		
		borderColor: '#888888',
		borderWidth: 1.5,
		borderRadius: 5
	}
})
const ButtonBoxStyles = StyleSheet.create({
//-----------------------------------------
	container: {
		backgroundColor: "#eaeaea",
		width: '100%',
		height: maxHeight + 20,
		display: 'flex',
		flexDirection: 'row'
	},	
	rightContainer: {
		position: "relative",
		alignItems: 'center',

		width: 150,
		height: maxHeight * 0.8,

		marginRight: 0

		// borderColor: 'blue',
		// borderWidth: 2,		
	},
	leftContainer: {
		position: "relative",
		alignItems: 'center',

		width: 150,
		height: maxHeight * 0.8,

		marginLeft: sideDistance - 3,
		marginRight: middleDistance,

		// borderColor: 'green',
		// borderWidth: 2,		
	},
//-------------------------------------
	clickable: {
		height: maxHeight * 0.2,
		width: 150,
		marginBottom: middleDistance
	},
	buttonCard: {
		backgroundColor: 'white',

		height: 140,
		width: 150,

		borderRadius: 30,

		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 15},
		shadowOpacity: 0.05,
		shadowRadius: 20
	},
//-------------------------------------
	image: {
		alignContent: 'center',
		top: '30%',
		height: 50,
		width: 48,
		marginLeft: 52.5
	},
	label: {
		marginTop: '7%',
		textAlign: 'center',
		fontSize: 10,
		letterSpacing: 2, 
		color: '#888888', 
		fontWeight: '700'
	},
//-------------------------------------
	scorecard: {
		marginTop: '-3%',
		marginLeft: '5%'
	},
	scoreTitleBox: {
		width: '100%',
		height: 30,
		zIndex: 10,
		marginLeft: 30,
		
	},
	scoreSubTitleBox: {
		width: '100%',
		height: 40,
		zIndex: 10,
		marginLeft: 30,
	},
	scoreTitle: {
		fontFamily: 'GilroyBold',
		color: "#444444",
		fontSize: 30,
		position: 'absolute'
	},
	scoreSubTitle: {
		fontFamily: 'GilroySemiBold',
		fontSize: 10,
		letterSpacing: 2,
		color: '#888888',
		position: 'absolute',
	},
//-----------------------------------
	arrowBox: {
		position: 'absolute',
		marginTop: '85%',
		marginLeft: '83%',
	},
	arrow: {
		height: 30,
		width: 35
	},
	arrowIcon: {
		width: 20,
		height: 20,
		backgroundColor: 'red',
	},
//-----------------------------------
	bottomTouch: {
		marginTop: maxHeight * .63,
		marginLeft: 0,
		marginBottom: 20,

		height: 60,
		position: 'absolute',

		// borderColor: 'black',
		// borderWidth: 2
	},
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