import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F9F9F9',
		flex: 1,
		width: '100%'
	},
	text: {
		color: '#ffffff',
	},
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  }
});

const ButtonBoxStyles = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'flex-start',
		// alignItems: 'center',
		height: 500,
		width: '90%',
		display: 'flex',
		// backgroundColor: 'black'
	},
	leftContainer: {
		position: 'relative',
		right: 90,
		display: 'flex',
		flexWrap: 'wrap',
		height: 500,
		width: '45%',
		alignContent: 'space-between',
		justifyContent: 'space-around',
	},
	rightContainer: {
		position: 'relative',
		bottom: 500,
		left: 90,
		display: 'flex',
		flexWrap: 'wrap',
		height: 500,
		width: '45%',
		alignContent: 'space-between',
		justifyContent: 'space-around'
	},
})

const scoreCardButton = StyleSheet.create({
	container: {
		height: 180,
		width: 160,
		shadowOpacity: 0,
		borderWidth: 1,
		borderColor: '#f1f1f1'
	},
	image: {
		height: 130,
		width: 158
	},
})

export {
    HomeStyles,
	ButtonBoxStyles,
	scoreCardButton
}