import { StyleSheet } from 'react-native';

const SettingsStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    }
})

const AccountInformationStyles = StyleSheet.create({
	container: {
		marginTop: 0,
        paddingBottom: 15,
        borderBottomColor: "navy",
        borderBottomWidth: 5,
        backgroundColor: '#09ABE1'
	},
    buttonBox: {
        marginTop: 15,
    }
})

const AdminAndUserInformationStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#02020A',
        justifyContent: 'center'
    },
    text: {
        color: '#02020A',
        marginTop: 7,
        fontSize: 16,
        fontWeight: "400"
    },
    BigText: {
        color: 'darkblue',
        marginTop: 7,
        fontSize: 20,
        fontWeight: "700"
    },
    header: {
        marginBottom: 10,
        position: "relative",
        backgroundColor: "navy",
        color: '#ffffff',
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "600"
    }
})

const EditAccountInformationStyles = StyleSheet.create({
    container: {
		justifyContent: 'center',
		alignItems: 'center',
    },
    InputsField: {
        justifyContent: 'center',
        width: '100%',
        height: '90%'
    }
})

const UpdateFieldStyles = StyleSheet.create({
    Input: {
        flex: 1,
        marginTop: 8,
        backgroundColor: '#f1f1f1'
    }
})

const ViewAccidentsStyles = StyleSheet.create({

})  

export {
    SettingsStyles,
    AccountInformationStyles,
    AdminAndUserInformationStyles,
    EditAccountInformationStyles,
    ViewAccidentsStyles,
    UpdateFieldStyles
}