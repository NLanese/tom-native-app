import { StyleSheet } from 'react-native';

const NavbarStyles = StyleSheet.create({
	container: {
		height: 75,
		width: '100%',
		backgroundColor: '#95110F',
		flexDirection: 'row',
	},
	rightText: {
        flex: 1,
		fontSize: 18,
        marginRight: 10,
		marginTop: 35,
		color: '#F7F7FF',
        // justifyContent: 'right',
        // alignContent: 'center'
		// alignSelf: 'flex-end',
	},
	leftText: {
        flex: 2,
		fontSize: 18,
		marginTop: 35,
        marginLeft: 10,
		marginRight: 100,
		color: '#F7F7FF',
		alignSelf: 'flex-start',
	},
});

export { NavbarStyles }