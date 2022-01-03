import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#1a2c3d',
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
		alignItems: 'center',
		height: 500,
		width: '90%',
		display: 'flex'
		
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

export {
    HomeStyles,
	ButtonBoxStyles
}