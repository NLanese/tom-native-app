import { StyleSheet } from 'react-native';

const home = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#1a2c3d',
		flex: 1,
		width: '100%'
	},
	text: {
		color: 'white',
	},
	logo: {
		width: 300,
		height: 80,
		marginTop: 50
	  }
});

const buttonBox = StyleSheet.create({
	container: {
		marginTop: 20,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'black',
		height: 500,
		width: '90%',
		display: 'flex'
		
	},
	scoreCardButton: {
		// marginLeft: 25
	}
})

export {
    home,
	buttonBox
}