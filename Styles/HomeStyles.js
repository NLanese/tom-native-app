import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const HomeStyles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		backgroundColor: '#F9f9f9',
		height: '100%',
	},	
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  }
})

const ButtonBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: '#F9f9f9',
		width: '100%',
		height: '100%',
		display: 'flex',
	},

	cardContainer:{
		// flex: 1,
		height: maxHeight * 0.3,
		width: maxWidth * 0.44,
		marginBottom: maxWidth * 0.06
	},

	card: {
		position: 'relative',
		display: 'flex',
		height: maxHeight * 0.1,
		width: '100%',
	},

	image: {
		position: 'relative',
		display: 'flex',
		height: '70%',
		width: "100%",
	},
	
	rightContainer: {
		position: "absolute",
		right: maxWidth * 0.03,
		marginTop: maxHeight * 0.1,
		width: maxWidth * 0.45,
		height: maxHeight * 0.7,
		// borderWidth: 2
	},
	leftContainer: {
		position: "absolute",
		left: maxWidth * 0.03,
		marginTop: maxHeight * 0.1,
		width: maxWidth * 0.45,
		height: maxHeight * 0.7,
		// borderWidth: 2
	},

	homeButtons:{
		marginTop: maxWidth * 0.03,
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