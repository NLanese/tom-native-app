import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		backgroundColor: '#F9f9f9',
		height: '100%'
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
		marginTop: 10,
		width: '100%',
		display: 'flex',
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