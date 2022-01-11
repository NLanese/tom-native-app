import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

let cardWidth = maxWidth - (maxWidth * 0.03)
let topCardHeight = (maxHeight * 0.14)
let bottomCardHeight = (maxHeight * 0.069)


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
	},
	topThree: {
		height: maxHeight * 0.68,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	leadersTitle: {
		backgroundColor: '#F9f9f9',
		fontWeight: '600',
		marginTop: 3,
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		marginTop: (maxHeight * 0.01),
		height: maxHeight * .25,
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
	},
	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: maxWidth * 0.95,
		marginBottom: 10,
		borderWidth: 0.3,
		borderColor: 'grey'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'grey',
		borderBottomWidth: 0.3
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
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
	dcr: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},
	dar: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},
	pod: {
		alignItems: 'center',
		width: '15%',
		height: '100%',
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},
	callCompliance: {
		alignItems: 'center',
		width: '25%',
		height: '100%',
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},
	scanCompliance: {
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
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
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
		backgroundColor: '#F9f9f9',
		fontWeight: '600',
		marginTop: 3,
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		// marginTop: (maxHeight * 0.01),
		height: maxHeight * .25,
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
	},
	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: maxWidth * 0.95,
		marginBottom: 10,
		borderWidth: 0.3,
		borderColor: 'grey'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'grey',
		borderBottomWidth: 0.3
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
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
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},

	seatbeltAndSpeeding: {
		alignItems: 'center',
		width: '45%',
		height: '100%',
		borderRightWidth: 0.3,
		borderColor: 'grey',
	},

	netradyne: {
		alignItems: 'center',
		width: '35%',
		height: '90%',
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
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
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
		backgroundColor: '#F9f9f9',
		fontWeight: '600',
		marginTop: 3,
		marginLeft: maxWidth * 0.04,
		marginBottom: 6,
		fontSize: 18,
	},

	remainders: {
		// marginTop: (maxHeight * 0.01),
		height: maxHeight * .25,
		width: maxWidth,
		marginBottom: "2%",
		alignItems: 'center',
	},
	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: maxWidth * 0.95,
		marginBottom: 10,
		borderWidth: 0.3,
		borderColor: 'grey'
	},
	cardTop: {
		height: topCardHeight,
		borderBottomColor: 'grey',
		borderBottomWidth: 0.3
	},
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		left: 0,
		top: 0,
		height: '100%',
		width: '20%',
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
		borderRightWidth: 0.3,
		borderLeftWidth: 0.3,
		borderColor: 'grey',
	},
	customerFeedback: {
		alignItems: 'center',
		width: '45%',
		height: '90%',
	},
	employeeCard :{
		top: 0,
		marginBottom: 10,
		borderColor: "silver",
		borderWidth: 0.3,
		justifyContent: 'center',
		height: (maxHeight * 0.065),
		width: maxWidth - (maxWidth * 0.05)
	},

	rank: {
		backgroundColor: 'silver',
		left: maxWidth - (maxWidth * 0.99),
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
		top: -maxHeight + (maxHeight * 0.965),
	},

	employeeNameTag: {
		textAlign: 'center'
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
	}

})




export { 
    ScoreCardStyles, 
    QualityStyles, 
    SafetyAndComplianceStyles, 
	TeamStyles
}