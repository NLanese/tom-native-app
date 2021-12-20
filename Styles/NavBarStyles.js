import { StyleSheet } from 'react-native';

const navStyles = StyleSheet.create({
	container: {
		height: 100,
		width: 450,
		backgroundColor: '#95110F',
		flexDirection: 'row',
	},
	rightText: {
        flex: 1,
		fontSize: 18,
        marginRight: 10,
		marginTop: 55,
		color: '#F7F7FF',
        // justifyContent: 'right',
        // alignContent: 'center'
		// alignSelf: 'flex-end',
	},
	leftText: {
        flex: 2,
		fontSize: 18,
		marginTop: 55,
        marginLeft: 20,
		marginRight: 200,
		color: '#F7F7FF',
		alignSelf: 'flex-start',
	},
});

export { navStyles }