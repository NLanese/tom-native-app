import { StyleSheet } from 'react-native';

const submit = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 15
	},
	titleText: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24,
		marginLeft: 70
	},
	input: {
		backgroundColor: '#F7F7FF',
		color: '#02020A',
		height: 40,
		width: 275,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
});

const directions = StyleSheet.create({
	input: {
		// flex: 1,
		flexDirection: 'row',
		backgroundColor: '#F7F7FF',
		color: '#02020A',
		height: 40,
		width: 275,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
	button: {
	},
	text: {
		color: 'white'
	}
});

export { submit, directions };