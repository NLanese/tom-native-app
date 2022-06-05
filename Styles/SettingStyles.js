import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height


const SettingsStyles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    }
})

const AccountInformationStyles = StyleSheet.create({
	title: {
        fontFamily: "GilroyBold",
        fontSize: 30,
        letterSpacing: -0.5,
        color: "#444"
    },
    subtitle: {
        fontFamily: "GilroyBold",
        fontSize: 10,
        letterSpacing: 2,
        color: "#888"
    },
    valName: {
        fontFamily: "GilroyMedium",
        color: "#444",
        fontSize: 10,
        marginTop: 20
    },
    val: {
        fontFamily: "GilroyBold",
        fontSize: 20,
        letterSpacing: -0.42,
        color: "#444",
        marginTop: 5
    },
    buttonBox: {
        marginLeft: 30,
        marginTop: 30,
        width: maxWidth - 60
    },
    buttonText: {
        color: "white",
        fontFamily: "GilroySemiBold",
        fontSize: 13,
        textAlign: 'center'
    }
})


const EditAccountInformationStyles = StyleSheet.create({
    container: {
		justifyContent: 'center',
		alignItems: 'center',
    },
    InputsField: {
        justifyContent: 'center',
        width: maxWidth * .90,
        height: '90%',
        top: -10
    },
    button: {
        marginTop: 15,
        backgroundColor: 'white'
    }
})

const UpdateFieldStyles = StyleSheet.create({
    Input: {
        flex: 1,
        marginTop: 3,
        backgroundColor: '#f1f1f1'
    }
})

const ViewAccidentsStyles = StyleSheet.create({

})  

export {
    SettingsStyles,
    AccountInformationStyles,
    EditAccountInformationStyles,
    ViewAccidentsStyles,
    UpdateFieldStyles
}