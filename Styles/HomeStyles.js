import { StyleSheet } from 'react-native';

const home = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1a2c3d',
		flex: 1,
		width: '100%'
	},
	text: {
		color: 'white',
	},
	navbar: {
		height: 4000
	}
});

const card = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#F7F7FF',
		width: 400,
		borderRadius: 6,
		backgroundColor: '#292929',
		marginTop: 5
		// justifyContent: 'center',
		// alignItems: 'center',
		// flexDirection: 'row',
		// flex: 1
	},
	titleContainer: {
		alignItems: 'center',
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		// alignItems: 'center',
		// justifyContent: 'flex-start',
	},
	image: {
		width: 398,
		height: 300,
		borderRadius: 3,
		// borderBottomLeftRadius: 6,
		// borderBottomRightRadius: 6,
		marginTop: 3
	},
	text: {
		color: '#F7F7FF',
	},
	titleText: {
		color: '#F7F7FF',
		fontSize: 30,
	},
	postedByText: {
		color: '#F7F7FF',
		justifyContent: 'flex-start',
	},
});

export {
    home,
	card
}