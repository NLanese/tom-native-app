import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
	logo: {
		resizeMode: 'stretch',
		width: 200,
		height: 85,
		marginTop: 50
	  }
});

const ButtonBoxStyles = StyleSheet.create({
	container: {
		marginTop: 10,
		width: '100%',
		display: 'flex',
	},
	rightContainer: {
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		marginRight: 15
	},
	leftContainer: {
		position: 'absolute',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 15
	}
})

const ScoreCardButtonStyles = StyleSheet.create({
	container: {
		height: 180,
		width: 160,
		shadowOpacity: 0,
		borderWidth: 1,
		borderColor: '#f1f1f1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 8
	},
	image: {
		height: 130,
		width: 158,
		backgroundColor: 'black',
	},
	button: {
		backgroundColor: '#24296f'
	}
})

export {
    HomeStyles,
	ButtonBoxStyles,
	ScoreCardButtonStyles
}