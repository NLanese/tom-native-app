import { StyleSheet } from 'react-native';

const SettingsStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    },
    navBar: {
        top: '0%'
    },
    informationContainer :{
        position: 'absolute',
        width: "80%",
        left: "10%"
    },
    text: {
        color: '#ffffff'
    },
    header: {
        marginTop: 40,
        position: "absolute",
        backgroundColor: "#CCCCCC",
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
		marginTop: 0,
        paddingBottom: 15,
        borderBottomColor: "#CCCCCC",
        borderBottomWidth: 5
	},
    buttonBox: {
        marginTop: 15,

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
        color: '#ffffff',
        marginTop: 7,
        fontSize: 16
    },
    header: {
        marginBottom: 10,
        position: "relative",
        backgroundColor: "#CCCCCC",
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "600"
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

const EditAccountInformationStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
    },
})

const ViewAccidentsStyles = StyleSheet.create({

})  

export {
    SettingsStyles,
    AccountInformationStyles,
    AdminAndUserInformationStyles,
    EditAccountInformationStyles,
    ViewAccidentsStyles
}