import { StyleSheet } from 'react-native';

const SettingsStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    },

    informationContainer :{
        position: 'absolute',
        width: "80%",
        left: "10%"
    },

    text: {
        color: 'white'
    },

    header: {
        marginTop: 40,
        position: "absolute",
        backgroundColor: "grey",
        width: '100%',
        textAlign: 'center'
    },

    buttonBox: {
        marginTop: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 500,
		width: '90%',
		display: 'flex'
    },
    button: {
        marginBottom: 55
    }
})

const AccountInformationStyles = StyleSheet.create({
	container: {
		marginTop: 75
	}
})

const AdminAndUserInformationStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    },

    informationContainer :{
        position: 'absolute',
        width: "80%",
        left: "10%"
    },

    text: {
        color: 'white'
    },

    header: {
        marginBottom: 10,
        position: "relative",
        backgroundColor: "grey",
        width: '100%',
        textAlign: 'center'
    },

    buttonBox: {
        marginTop: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 500,
		width: '90%',
		display: 'flex'
    },
    button: {
        marginBottom: 55
    }
})

export {
    SettingsStyles,
    AccountInformationStyles,
    AdminAndUserInformationStyles
}