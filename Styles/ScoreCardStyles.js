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
	sortBy: {
		marginTop: maxHeight * 0.01,
		marginLeft: maxWidth * 0.02,
		borderBottomWidth: 2,
		borderBottomColor: '#E2E8F1',
		height: maxHeight * 0.05,
		justifyContent: 'center'
	},
	sortByButton: {
		left: maxWidth * 0.2,
		top: -maxHeight * 0.034,
		padding: 2,
		width: maxWidth * 0.5,
		height: maxWidth * 0.07,
		borderColor: 'grey',
		borderWidth: 1,
	},
	sortText:{
		fontSize: 20
	},
	dropArrowBox: {
		top: '-125%',
		left: maxWidth * 0.4,
		width: maxWidth * 0.089,
		height: maxWidth * 0.089,
		// backgroundColor: 'red'
	},
	leadersTitle: {
		borderBottomWidth: 0.5,
		height: maxHeight * 0.06,
		fontSize: 20,
		marginLeft: maxWidth * 0.02
	},

	remainders: {

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
		backgroundColor: '#f9f9f9',
		height: maxHeight,
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
		// borderWidth: 0.5,
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
		top: -11,
		left: 12
	},
	statsheet:{
		paddingLeft: maxWidth * 0.005,
		paddingRight: maxWidth * 0.005
	},
	sectionTitle: {
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
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#E2E8F1',
		width: maxWidth * 0.5,
		height: maxHeight * 0.3,
	},
	serviceStats:{
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#E2E8F1',
		left: maxWidth * 0.5,
		top: -maxHeight * 0.418,
		width: maxWidth * 0.5,
		height: maxHeight * 0.3,
	},
	overalls: {
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#E2E8F1',
		left: 0,
		top: -maxHeight * 0.415,
		width: maxWidth * 0.98,
		height: maxHeight * 0.15,
	},
	drivingStatsLabels: {
		textAlign: 'center',
		color: "grey",
		fontSize: 10
	},
	drivingStatsValue: {
		textAlign: 'center',
	},
	seatbeltLabel:{
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
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
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
		top: -maxHeight * 0.05,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	arrowIcon:{
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 1,
		height: maxHeight * 0.03,
		width: maxWidth * 0.05,
		left: '80%',
		top: '-90%'
	},
	arrowIcon2:{
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 1,
		height: maxHeight * 0.03,
		width: maxWidth * 0.05,
		left: '80%',
		top: '-45%'
	},
	speedingValue:{
		top: -maxHeight * 0.05,
		left: '52%',
		width: '47%',
		height: maxHeight * 0.03,
	},
	distractionLabel:{
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
		top: -maxHeight * 0.03,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	distractionValue:{
		top: -maxHeight * 0.03,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	followingLabel:{
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
		top: -maxHeight * 0.09,
		width: '45%',
		height: maxHeight * 0.03,
	},
	followValue:{
		top: -maxHeight * 0.09,
		width: '45%',
		height: maxHeight * 0.03,
	},
	signalLabel:{
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
		top: -maxHeight * 0.07,
		width: '45%',
		height: maxHeight * 0.03,
	},
	signalValue:{
		top: -maxHeight * 0.07,
		width: '45%',
		height: maxHeight * 0.03,
	},
	ficoLabel:{
		borderBottomColor: '#E2E8F1',
		borderBottomWidth: 1,
		top: -maxHeight * 0.13,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	ficoValue:{
		top: -maxHeight * 0.13,
		left: '53%',
		width: '45%',
		height: maxHeight * 0.03,
	},
	scLabel: {
		height: maxHeight * 0.03,
		borderBottomColor: '#E2E8F1',
		top: maxHeight * 0.009,
		width: '90%',
		left: '5%',
		borderBottomWidth: 1,
	},
	scValue: {
		top: maxHeight * 0.0132,
	},
	podLabel: {
		height: maxHeight * 0.03,
		borderBottomColor: '#E2E8F1',
		top: maxHeight * 0.00,
		width: '90%',
		left: '5%',
		borderBottomWidth: 1,
	},
	podValue: {
		top: maxHeight * 0.00,
	},
	cdfLabel: {
		height: maxHeight * 0.03,
		borderBottomColor: '#E2E8F1',
		top: -maxHeight * 0.0089,
		width: '90%',
		left: '3%',
		borderBottomWidth: 1,
	},
	cdfValue: {
		top: -maxHeight * 0.0089,
	},
	completionLabel: {
		borderBottomColor: '#E2E8F1',
		marginLeft: maxWidth * 0.025,
		top: maxHeight * 0.01,
		width: maxWidth * 0.29,
		borderBottomWidth: 1
	},
	completionValue: {
		marginLeft: maxWidth * 0.025,
		top: maxHeight * 0.01,
		width: maxWidth * 0.29,
		// borderBottomWidth: 0.5
	},
	totalLabel:{
		borderBottomColor: '#E2E8F1',
		height: maxHeight * 0.03,
		width: maxWidth * 0.29,
		borderBottomWidth: 1,
		top: -maxHeight * 0.05,
		left: maxWidth * 0.33
	},
	totalValue: {
		width: maxWidth * 0.29,
		top: -maxHeight * 0.05,
		left: maxWidth * 0.32
	},
	tierLabel:{
		borderBottomColor: '#E2E8F1',
		height: maxHeight * 0.03,
		width: maxWidth * 0.29,
		borderBottomWidth: 1,
		top: -maxHeight * 0.11,
		left: maxWidth * 0.64
	},
	tierValue: {
		width: maxWidth * 0.29,
		top: -maxHeight * 0.11,
		left: maxWidth * 0.64
	},
	buttonBox: {
		top: maxHeight * 0.22,
		left: maxWidth * 0.2,
		width: maxWidth * 0.6,
		height: maxHeight * 0.1,
		justifyContent: 'center',
		// borderWidth: 0.3
	}
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