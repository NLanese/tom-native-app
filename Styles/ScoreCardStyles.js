import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let cardWidth = maxWidth - (maxWidth * 0.03)
let topCardHeight = (maxHeight * 0.14)
let bottomCardHeight = (maxHeight * 0.069)


const ScoreCardStyles = StyleSheet.create({
	container: {
		width: "100%",
		height: maxHeight * 0.20,
		position: 'relative',
		marginTop: maxWidth * 0.01
	},

	CardContent: {
		textAlign: 'center',
		fontSize: 15
	},
})

const QualityStyles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	topThree: {
		height: maxHeight * 0.68,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	leadersTitle: {
		fontWeight: '600',
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		marginTop: (maxHeight * 0.01),
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
		marginBottom: 30
	},
	topThreeEmployeeCard: {
		height: topCardHeight + bottomCardHeight,
		width: maxWidth * 0.95,
		marginBottom: 10,
		shadowOpacity: 0,
		// borderWidth: 1,
		borderColor: '#E2E8F1'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1
	},
	topRank: {
		backgroundColor: '#E2E8F1',
		left: -(maxWidth * 0.93),
		top: -(maxHeight * 0.135),
		width: (maxHeight * 0.065) * 0.7,
		height: (maxHeight * 0.065) * 0.7,
		borderRadius: 100,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: maxWidth * 0.06,
		top: 0,
		height: '100%',
		width: '20%',
	},
	nameSpace: {
		position: 'absolute',
		marginLeft: '25%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},
	employeeName: {
		textAlign: 'center',
		justifyContent: 'center',
		fontSize: 25,
		marginLeft: 10,
		fontWeight: '300'
	},
	cardBottm: {
		height: bottomCardHeight,
		flexDirection: "row"
	},
	dcr: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	dar: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	pod: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	callCompliance: {
		alignItems: 'center',
		width: '25%',
		height: '100%',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	scanCompliance: {
		borderColor: '#E2E8F1',
		borderBottomWidth: 1,
		alignItems: 'center',
		width: '30%',
		height: '100%',
	},
	statTitle: {
		fontSize: 10,
		color: "grey",
		marginTop: 4
	},
	statValue:{
		marginTop: 3,
		fontWeight: '600',
		fontSize: 16,
	}
})

const SafetyAndComplianceStyles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	topThree: {
		height: maxHeight * 0.68,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	leadersTitle: {
		fontWeight: '600',
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		marginTop: (maxHeight * 0.01),
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
		marginBottom: 30
	},
	topThreeEmployeeCard: {
		height: topCardHeight + bottomCardHeight,
		width: maxWidth * 0.95,
		marginBottom: 10,
		shadowOpacity: 0,
		// borderWidth: 1,
		borderColor: '#E2E8F1'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1
	},
	topRank: {
		backgroundColor: '#E2E8F1',
		left: -(maxWidth * 0.93),
		top: -(maxHeight * 0.135),
		width: (maxHeight * 0.065) * 0.7,
		height: (maxHeight * 0.065) * 0.7,
		borderRadius: 100,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: maxWidth * 0.06,
		top: 0,
		height: '100%',
		width: '20%',
	},
	nameSpace: {
		position: 'absolute',
		marginLeft: '25%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},
	employeeName: {
		textAlign: 'center',
		justifyContent: 'center',
		fontSize: 25,
		fontWeight: '300',
		marginLeft: 10,
		// borderWidth: 3

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
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},

	seatbeltAndSpeeding: {
		alignItems: 'center',
		width: '45%',
		height: '100%',
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},

	netradyne: {
		alignItems: 'center',
		width: '35%',
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
		height: '100%',
	},
	statTitle: {
		fontSize: 10,
		color: "grey",
		marginTop: 4
	},
	statValue:{
		marginTop: 3,
		fontWeight: '600',
		fontSize: 18
	}
})

const TeamStyles = StyleSheet.create({
	container: {
		marginTop: 10,
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	topThree: {
		height: maxHeight * 0.68,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	leadersTitle: {
		fontWeight: '600',
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		marginTop: (maxHeight * 0.01),
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
		marginBottom: 30
	},
	topThreeEmployeeCard: {
		height: topCardHeight + bottomCardHeight,
		width: maxWidth * 0.95,
		marginBottom: 10,
		shadowOpacity: 0,
		// borderWidth: 1,
		borderColor: '#E2E8F1'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1
	},
	topRank: {
		backgroundColor: '#E2E8F1',
		left: -(maxWidth * 0.93),
		top: -(maxHeight * 0.135),
		width: (maxHeight * 0.065) * 0.7,
		height: (maxHeight * 0.065) * 0.7,
		borderRadius: 100,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: maxWidth * 0.06,
		top: 0,
		height: '100%',
		width: '20%',
	},
	nameSpace: {
		position: 'absolute',
		marginLeft: '25%',
		top: '30%',
		height: '70%',
		alignItems: 'center',
	},
	employeeName: {
		textAlign: 'center',
		justifyContent: 'center',
		fontSize: 25,
		marginLeft: 10,
		fontWeight: '300',
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
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	customerFeedback: {
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
		alignItems: 'center',
		width: '45%',
		height: '100%',
	},
	employeeCard :{
		top: 0,
		marginBottom: 10,
		borderColor: "#E2E8F1",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		justifyContent: 'center',
		height: (maxHeight * 0.065),
		width: maxWidth - (maxWidth * 0.05),
		shadowOpacity: 0,

	},

	rank: {
		backgroundColor: '#E2E8F1',
		left: maxWidth * .02,
		top: maxHeight - (maxHeight * .994),
		width: (maxHeight * 0.065) * 0.7,
		height: (maxHeight * 0.065) * 0.7,
		borderRadius: 100,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},

	employeeNameplate: {
		// left: maxWidth - (maxWidth * 0.68),
		top: 0 - (maxHeight * 0.025),
	},

	employeeNameTag: {
		left: maxWidth * 0.29
		// textAlign: 'center'
	},

	statTitle: {
		fontSize: 10,
		color: "grey",
		marginTop: 4
	},
	statValue:{
		marginTop: 3,
		fontSize: 20,
		fontWeight: '600'
	},

	smallIcon: {
		top: 0 - (maxHeight * 0.063),
		left: maxWidth * 0.15
	}

})

const ButtonBox = StyleSheet.create({
	container: {
		width: 340,	
		height: 169
	},
	button: {
		height: 169,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: 5,
		borderWidth: 0.5,
		borderColor: "grey",
		color: 'black'
	},
	text:{
		color: 'black',
		fontSize: 14
	}
})


// const LeaderboardStyles = StyleSheet.create({

// }),

const PersonalLeaderboardStyles = StyleSheet.create({
	scoreContainer: {
		borderWidth: 0.1
	},
	namePlate: {
		height: maxHeight * 0.1
	},
	nametag: {
		position: 'absolute',
		height: maxHeight * 0.1,
		width: maxWidth * 0.5,
		justifyContent: 'center',
		paddingLeft: maxWidth * 0.02,
	},
	nameText: {
		fontSize: 18,
	},
	createdAt: {
		position: 'absolute',
		top: 0,
		left: maxWidth * 0.52,
		height: maxHeight * 0.1,
		width: maxWidth * 0.48,
		paddingRight: maxWidth * 0.02,
		justifyContent: 'center',
	},
	createdAtText:{
		textAlign: 'right',
		fontSize: 18,
	},
	keys: {
		height: maxHeight * .1,
		padding: maxWidth * 0.02,
		borderWidth: 0.5,
	},
	keyTitle: {
		width: maxWidth * 0.10,
		borderBottomWidth: 0.5
	},
	keyContent:{
		marginTop: maxHeight * 0.02,
		display: 'flex'
	},
	fantasticContent:{
		width: maxWidth * 0.25,
		height: maxHeight * 0.04
	},
	goodContent:{
		width: maxWidth * 0.25,
		left: maxWidth * 0.3,
		top: -maxHeight * 0.04
	},
	fairContent:{
		width: maxWidth * 0.25,
		left: maxWidth * 0.58,
		top: -maxHeight * 0.075,

	},
	subparContent: {
		width: maxWidth * 0.25,
		left: maxWidth * 0.8,
		top: -maxHeight * 0.109,
	},
	keyText:{
		// borderWidth: 0.5,
		top: -11,
		left: 12
	},
	statsheet:{
		// top: maxHeight * 0.1,
		paddingLeft: maxWidth * 0.005,
		paddingRight: maxWidth * 0.005
	},
	sectionTitle: {
		// borderWidth: 3,
		paddingTop: maxHeight * 0.005,
		paddingBottom: maxHeight * 0.04,
		marginBottom: maxHeight * 0.01,
		width: '100%',
		height: '9%',
		backgroundColor: '#E2E8F1',
		textAlign: 'center',
		fontWeight: '600'
	},
	drivingStats: {
		backgroundColor: '#e9e9e9',
		borderWidth: 2,
		borderColor: '#E2E8F1',
		width: maxWidth * 0.5,
		height: maxHeight * 0.3,
	},
	serviceStats:{
		backgroundColor: '#e9e9e9',
		borderWidth: 2,
		borderColor: '#E2E8F1',
		left: maxWidth * 0.5,
		top: -maxHeight * 0.418,
		width: maxWidth * 0.5,
		height: maxHeight * 0.3,
	},
	drivingStatsLabels: {
		textAlign: 'center'
	},
	drivingStatsValue: {
		textAlign: 'center',
	},
	seatbeltLabel:{
		borderBottomWidth: 0.5,
		top: maxHeight * 0.01,
		width: '45%',
		height: maxHeight * 0.03,
	},
	seatbeltValue:{
		top: maxHeight * 0.01,
		width: '45%',
		height: maxHeight * 0.03,
	},
	speedingLabel:{
		borderBottomWidth: 0.5,
		top: -maxHeight * 0.05,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	speedingValue:{
		// position: 'absolute',
		// borderWidth: 0.5,
		top: -maxHeight * 0.05,
		left: '53%',
		width: '47%',
		height: maxHeight * 0.03,
	},
	distractionLabel:{
		// position: 'absolute',
		borderBottomWidth: 0.5,
		top: -maxHeight * 0.03,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	distractionValue:{
		// position: 'absolute',
		// borderWidth: 0.5,
		top: -maxHeight * 0.03,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	followingLabel:{
		// position: 'absolute',
		borderBottomWidth: 0.5,
		top: -maxHeight * 0.09,
		width: '45%',
		height: maxHeight * 0.03,
	},
	followValue:{
		// position: 'absolute',
		// borderWidth: 0.5,
		top: -maxHeight * 0.09,
		width: '45%',
		height: maxHeight * 0.03,
	},
	signalLabel:{
		// position: 'absolute',
		borderBottomWidth: 0.5,
		top: -maxHeight * 0.07,
		width: '45%',
		height: maxHeight * 0.03,
	},
	signalValue:{
		// position: 'absolute',
		// borderWidth: 0.5,
		top: -maxHeight * 0.07,
		width: '45%',
		height: maxHeight * 0.03,
	},
	ficoLabel:{
		// position: 'absolute',
		borderBottomWidth: 0.5,
		top: -maxHeight * 0.13,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	ficoValue:{
		// position: 'absolute',
		// borderWidth: 0.5,
		top: -maxHeight * 0.13,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	dcrLabel: {
		top: maxHeight * 0.0132,
		width: '90%',
		left: '5%',
		borderBottomWidth: 0.5,
	},
	dcrValue: {
		top: maxHeight * 0.01,
	},
	podLabel: {
		top: maxHeight * 0.042,
		width: '90%',
		left: '5%',
		borderBottomWidth: 0.5,
	},
	podValue: {
		top: maxHeight * 0.042,
		// top: maxHeight * 0.01,
	},
	cdfLabel: {
		top: maxHeight * 0.07,
		width: '90%',
		left: '5%',
		borderBottomWidth: 0.5,
	},
	cdfValue: {
		top: maxHeight * 0.07,
		// top: maxHeight * 0.01,
	},
})


export { 
    ScoreCardStyles, 
    QualityStyles, 
    SafetyAndComplianceStyles, 
	TeamStyles,
	ButtonBox,
	// LeaderboardStyles,
	PersonalLeaderboardStyles
}