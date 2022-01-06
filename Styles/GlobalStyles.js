import { StyleSheet } from 'react-native';

const DropdownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        padding: 20, 
        position: 'absolute', 
        top: 50, 
        right: 0, 
        margin: 0, 
        width: 180,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 7
        // alignItems: 'center'
    },
    titleText: {
        textAlign: 'center'
    },
    titleName: {
        textAlign: 'center',
        fontWeight: '700'
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1.25,
        marginTop: 5,
    },
    accountInformationButton: {
        height: 50,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: 5,
        height: 30
    },
    accountInformationButtonText: {
        color: 'black',
        fontSize: 10,
    }
})

export {
    DropdownStyles
}