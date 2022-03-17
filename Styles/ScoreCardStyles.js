import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height



const SortingStyles = StyleSheet.create({
	sortByContainer: {
		position: 'absolute',
		paddingLeft: 6,
		marginTop: maxHeight * 0.030 ,
		marginLeft: maxWidth * .64,
		zIndex: 3,

		// borderColor: 'red',
		// borderWidth: 2
	},
	touchable: {
		height: maxHeight * 0.08,
		width: '40%',

		marginLeft: '68%',
		marginTop: '-19%',

		// borderColor: 'blue',
		// borderWidth: 2
	},
	sortTitleBox:{
		marginLeft: 10
	},
	sortText:{
		marginTop: maxHeight * 0.01,
		fontSize: 11,
		fontWeight: '600',
		color: '#BBBBBB'
	},
	sortIcon:{
		height: 19,
		width: 19,
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
		marginTop: 30,
		// marginLeft: 30,
		marginBottom: maxHeight * 0.03,
		width: maxWidth * 0.6,
	},	
	mainTitle: {
		fontSize: 30,
		letterSpacing: -0.5,
		fontFamily: 'GilroyBold',
		color: "#444444"
	},
	subTitle: {
		lineHeight: 16,
		fontSize: 10,
		letterSpacing: 2,
		fontFamily: 'GilroyBold',
		color: '#888888'
	},
//-----------------------------
	topThreeEmployeeCard: {	
		height: maxHeight * 0.24,
		width: maxWidth * 0.90,

		paddingLeft: 20,
		borderRadius: 28,

		marginBottom: 15,

		backgroundColor: 'white',

		shadowColor: '#000000',
		shadowOffset: {width: 0, height: 15},
		shadowOpacity: 0.05,
		shadowRadius: 20
	},
	smallCard: {	
		height: maxHeight * 0.10,
		width: maxWidth * 0.90,

		paddingLeft: 20,
		borderRadius: 14,

		marginBottom: 15,
	},
//-----------------------------
	cardTop: {
		height: '45%',
	},
	smallCardTop: {
	},
	cardBottm: {
		borderColor: '#DDDDDD',
		borderTopWidth: 1,

		backgroundColor: 'white',
		flexDirection: "row",
		marginTop: '1%',
		height: '50%',
		left: '7.5%',
		width: '85%'
	},
//---------------------------------
	iconSpace: {
		alignItems: 'center',
		justifyContent: 'center',

		position: 'absolute',

		left: '14%',
		top: '6%',
		height: '100%',
		width: '20%',
	},
	smallIconSpace: {
		alignItems: 'center',
		justifyContent: 'center',

		position: 'absolute',

		left: '14%',
		top: '39%',
		height: '100%',
		width: '20%',
	},
// ----------------------------------
	nameSpace: {
		position: 'absolute',
		top: '45%',
		height: '40%',
		left: '34%',
		alignItems: 'center',
	},
	smallNameSpace: {
		position: 'absolute',
		top: '75%',
		height: '40%',
		left: '34%',
		alignItems: 'center',
	},
	employeeName: {
		fontSize: 14,
		fontFamily: 'GilroyBold',
		color: '#444444'
		},
// --------------------------------
	topRank: {
		borderColor: 'transparent',
		borderWidth: 4,
		borderRadius: 100,

		alignItems: 'center',
		justifyContent: 'center',

		width: '13%',
		height: '57%',

		top: '26%',
		left: '2.2%',
	},
	smallTopRank: {
		borderColor: 'transparent',
		borderWidth: 4,
		borderRadius: 100,

		alignItems: 'center',
		justifyContent: 'center',

		width: '13%',
		height: '57%',

		top: '56%',
		left: '3%',
	},
// ----------------------------------
	gradientCover: {
		marginLeft: 0,
		marginTop: 0,
		backgroundColor: 'white',
		borderRadius: 100,
		height: 27,
		width: 27,
	},
	gradient: {
		position: 'absolute',
		width: 35,
		height: 35,
		borderRadius: 0
	},
	rankPos: {
		width: '100%',
		marginTop: '13%',
	},
})

const StatStyles = StyleSheet.create({
	statTitle: {
		fontSize: 10,
		fontFamily: 'GilroySemiBold',
		color: "#888888",
		marginTop: 0,

	},
	statValue:{
		marginTop: maxHeight * 0.03,
		height: '38%',
		fontFamily: 'GilroyBold',
		fontSize: 25,
		letterSpacing: -0.5,
		color: "#444444"
		// backgroundColor: 'green'

	},
	stat: {
		// padding: 5,
		height: '100%',

		marginRight: 15,

		alignItems: 'flex-start',
	},

	divider: {
		borderLeftWidth: 1,
		width: 1,
		marginRight: 18,
		top: '20%',
		height: '60%',
		borderColor: '#DDDDDD'
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

const ScoreCardStyles = StyleSheet.create({
	keyContainer: {
		marginTop: 30
	},
	keyTitle: {
		color: "#888",
		letterSpacing: 2,
		fontSize: 10,
		fontFamily: "GilroyBold",
		textAlign: 'center'
	},
	keyBox: {
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,

		borderWidth: 1,
		borderColor: "#ddd",

		width: maxWidth - 120,
		height: 50,
		flexDirection: 'row'
	},
	keyValueBox: {
		width: ((maxWidth - 120) / 4),
		height: 50, 
		paddingTop: 16,
		textAlign: 'center',
		borderWidth: 0.5,
		borderColor: "#ddd",

		fontFamily: 'GilroyBold',
		fontSize: 11,
	}
})



export { 
    ScoreCardStyles, 
	SortingStyles,
	StatStyles,
    QualityStyles, 
	TeamStyles,
	ButtonBox,
	
}