import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let sideDistance = ((maxWidth - 300) * 1.15) / 3
let middleDistance = sideDistance * .70


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
	},
	subTitleBox: {
		marginTop: 4,
		marginLeft: 30,
		marginBottom: 34,
		width: 200,
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
		position: 'absolute',
		marginTop: -50,
		height: 226,
		width: 318,
	},
	notificationModalContent:{
		width: maxWidth - 60,
		height: 326,

		left: 0,

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
		paddingBottom: 10,
		marginBottom: 5,
		marginLeft: 38,
		// borderWidth: 2
	},
	messageText: {
		color: '#888888',
		fontFamily: 'GilroyMedium',
		lineHeight: 20,
	},
//---------------------------------------
	acknowledgeContainter:{
		left: '10%',
		width: '80%',
	},
	checkBox: {
		height: 22,
		width: 22,

		marginTop: 21,
		
		borderColor: '#888888',
		borderWidth: 2,
		borderRadius: 5
	},
	acknowledgedBox: {
		marginTop: -15,
		marginLeft: 33
	},
	acknowledgedText: {
		fontFamily: "GilroyRegular",
		fontSize: 11,
		letterSpacing: 3,
		color: "#888888",
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

		marginRight: 0	
	},
	leftContainer: {
		position: "relative",
		alignItems: 'center',

		width: 150,

		marginLeft: sideDistance - 3,
		marginRight: middleDistance,
		
	},
//-------------------------------------
	clickable: {
		height: maxHeight * 0.2,
		width: 150,
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
		marginTop: maxHeight * .025,
		height: 30,
		width: 35,
		position: 'absolute'
	},
	arrowIcon: {
		width: 20,
		height: 20,
		backgroundColor: 'red',
	},
//-----------------------------------
	bottomTouch: {
		marginTop: maxHeight * .55,
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