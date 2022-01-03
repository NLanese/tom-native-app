import { StyleSheet } from 'react-native';

const NavbarStyles = StyleSheet.create({
	container: {
		height: 75,
		width: '100%',
		backgroundColor: '#1ba8e0',
		flexDirection: 'row',
	},
	rightText: {
        flex: 1,
		fontSize: 18,
        marginRight: 10,
		marginTop: 35,
		color: '#02020A',
		fontWeight: 'bold',
	},
	leftText: {
        flex: 2,
		fontSize: 18,
		marginTop: 35,
        marginLeft: 10,
		marginRight: 100,
		color: '#02020A',
		alignSelf: 'flex-start',
		fontWeight: 'bold',
	},
});

export { NavbarStyles }