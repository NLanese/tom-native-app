import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height


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

const SortingStyles = StyleSheet.create({
	sortByContainer: {
		// position: 'absolute',
		marginTop: '2.5%',
		marginLeft: '68%',
	},
	sortBy: {
		marginTop: maxHeight * 0.01,
		marginLeft: maxWidth * 0.02,
		borderBottomWidth: 2,
		borderBottomColor: '#E2E8F1',
		height: maxHeight * 0.05,
		justifyContent: 'center'
	},
	touchable: {
		height: maxHeight * 0.08,
		marginTop: -maxHeight * 0.04
	},
	sortText:{
		marginTop: maxHeight * 0.01,
		fontSize: 16,
		fontWeight: '600',
		color: 'grey'
	},
	sortIcon:{
		// position: 'relative',
		marginLeft: maxWidth * 0.12,
		marginTop: maxHeight * 0.0
	},
	modal: {
		backgroundColor: 'white',
		top: -maxHeight * 0.045,
		left: maxWidth * 0.4,
		width: maxWidth * 0.6,
		paddingTop: maxHeight * 0.01
	},

	propDrop: {
		// height: '5%',
		paddingLeft: maxWidth * 0.02,
		paddingBottom: maxHeight * 0.01,
		paddingTop: maxHeight * 0.01,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	},
	activePropDrop: {
		// height: '5%',
		backgroundColor: '#dedede',
		paddingLeft: maxWidth * 0.02,
		paddingBottom: maxHeight * 0.01,
		paddingTop: maxHeight * 0.01,
		borderBottomWidth: 1,
		borderColor: '#E2E8F1',
	}
})

const QualityStyles = StyleSheet.create({

//-----------------------------
	container: {
		marginTop: 10,
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	listContainer: {
		width: maxWidth * .88,
		marginLeft: maxWidth * 0.06,
	},
//-----------------------------
	titleBox: {
		marginTop: maxHeight * -0.07,
		marginLeft: maxWidth * 0.07,
		marginBottom: maxHeight * 0.03,
		width: maxWidth * 0.6,
	},	
	mainTitle: {
		fontSize: 30,
		fontFamily: 'GilroyBold'
	},
	subTitle: {
		fontFamily: 'GilroyLight',
		color: '#0a0a0a'
	},
//-----------------------------
	topThreeEmployeeCard: {	
		height: maxHeight * 0.24,
		width: maxWidth * 0.90,

		paddingLeft: 20,
		borderRadius: 40,

		marginBottom: 20,

		shadowOpacity: 0,
	},
	cardTop: {
		height: '45%',
	},
	cardBottm: {
		borderColor: '#E2E8F1',
		borderTopWidth: 3,

		backgroundColor: 'white',
		flexDirection: "row",
		marginTop: '1%',
		height: '50%',
		width: '90%'
	},
//---------------------------------
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',

		position: 'absolute',

		left: '20%',
		top: '8%',
		height: '100%',
		width: '20%',
	},
	nameSpace: {
		position: 'absolute',
		top: '45%',
		height: '40%',
		left: '40%',
		alignItems: 'center',
	},
	employeeName: {
		fontSize: 18,
		fontFamily: 'GilroySemiBold'
		},
	topRank: {
		borderColor: '#E2E8F1',
		borderWidth: 4,
		borderRadius: 100,

		alignItems: 'center',
		justifyContent: 'center',

		width: '13%',
		height: '57%',

		top: '26%',
		left: '3%',
	},
})

const StatStyles = StyleSheet.create({
	statTitle: {
		fontSize: 14,
		fontFamily: 'GilroySemiBold',
		color: "grey",
		marginTop: 0,
		marginLeft: 20

	},
	statValue:{
		marginTop: maxHeight * 0.030,
		fontFamily: 'GilroyBold',
		fontSize: 22,
		marginLeft: 20

	},
	stat: {
		padding: 5,
		height: '100%',

		marginRight: 15,

		alignItems: 'flex-start',
	},

	divider: {
		borderLeftWidth: 3,
		width: 2,
		marginRight: maxWidth * 0.05,
		top: '-80%',
		height: '80%',
		borderColor: '#E2E8F1'
	}

})
const TeamStyles = StyleSheet.create({

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
	},
})
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
		// borderBottomWidth: 0.3
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
		left: maxWidth * 0.50,
		top: -maxHeight * 0.418,
		width: maxWidth * 0.48,
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
		height: maxHeight * 0.03,
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
	SortingStyles,
	StatStyles,
    QualityStyles, 
	TeamStyles,
	ButtonBox,
	PersonalLeaderboardStyles,
	
}