import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let cardWidth = maxWidth - (maxWidth * 0.03)
let topCardHeight = (maxHeight * 0.14)
let bottomCardHeight = (maxHeight * 0.063)


const ScoreCardStyles = StyleSheet.create({
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

	rightContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		marginRight: 15,
		marginLeft: 150,
	},
    
	leftContainer: {
		flex: 1,
		position: 'absolute',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 15,
	},

    image: {
		height: 110,
		width: 160,
		backgroundColor: '#afbed3',
	},

    CardContent: {
		textAlign: 'center',
		top: 11,
		fontSize: 16,
		lineHeight: 20
	},


})

const QualityStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		// borderWidth: 5
	},

	topThree: {
		flex: 3,
		marginTop: "3%",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		// borderWidth: 5
	},

	remainders: {
		flex: 2,
		marginTop: "3%",
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: 350,
		marginBottom: 2,
		borderWidth: 1,
		borderColor: 'black'
	},

	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'black',
		borderBottomWidth: 0.5
	},

	iconSpace: {
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
		borderWidth: 1,
		borderColor: 'pink',
	},

	nameSpace: {
		position: 'absolute',
		marginLeft: '20%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},

	employeeName: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '300'
	},

	cardBottm: {
		height: bottomCardHeight,
		flexDirection: "row"
		// flex: 1
	},

	dcr: {
		alignItems: 'center',
		width: '10%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},
	dar: {
		alignItems: 'center',
		width: '10%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},

	pod: {
		alignItems: 'center',
		width: '10%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},

	callCompliance: {
		alignItems: 'center',
		width: '35%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},

	scanCompliance: {
		alignItems: 'center',
		width: '35%',
		height: '100%',
	}

})

const SafetyAndComplianceStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},

	topThree: {
		flex: 3,
		marginTop: "3%",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},

	remainders: {
		flex: 2,
		marginTop: "3%",
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: 350,
		marginBottom: 2,
		borderWidth: 1,
		borderColor: 'black'
	},

	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'black',
		borderBottomWidth: 0.5
	},

	iconSpace: {
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
		borderWidth: 1,
		borderColor: 'pink',
	},

	nameSpace: {
		position: 'absolute',
		marginLeft: '20%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},

	employeeName: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '300'
	},

	cardBottm: {
		height: bottomCardHeight,
		flexDirection: "row"
	},

	fico: {
		alignItems: 'center',
		width: '20%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},

	seatbeltAndSpeeding: {
		alignItems: 'center',
		width: '45%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},

	netradyne: {
		alignItems: 'center',
		width: '35%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},
})

const TeamStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},

	topThree: {
		flex: 3,
		marginTop: "3%",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},

	remainders: {
		flex: 2,
		marginTop: "3%",
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: 350,
		marginBottom: 2,
		borderWidth: 1,
		borderColor: 'black'
	},

	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'black',
		borderBottomWidth: 0.5
	},

	iconSpace: {
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
		borderWidth: 1,
		borderColor: 'pink',
	},

	nameSpace: {
		position: 'absolute',
		marginLeft: '20%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},

	employeeName: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: '300'
	},

	cardBottm: {
		height: bottomCardHeight,
		flexDirection: "row"
	},

	defect: {
		alignItems: 'center',
		width: '30%',
		height: '100%',
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderColor: 'black',
	},

	customerFeedback: {
		alignItems: 'center',
		width: '45%',
		height: '100%',
		borderRightWidth: 1,
		borderColor: 'black',
	},
})




export { 
    ScoreCardStyles, 
    QualityStyles, 
    SafetyAndComplianceStyles, 
	TeamStyles
}