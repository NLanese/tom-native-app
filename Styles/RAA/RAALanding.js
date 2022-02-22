import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const RAALandingStyles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        marginLeft: 30
    },
// ---------------------------
    titleText: {
        marginTop: 23,

        fontFamily: "GilroyBold",
        fontSize: 30,
        color: "#444444",
        letterSpacing: -0.5
    },
    subtitleText: {
        marginTop: 5,

        fontFamily: "GilroyBold",
        fontSize: 10,
        letterSpacing: 2,
        color: "#888888"
    },
// ----------------------------
    card: {
        backgroundColor: 'white',

        marginTop: 32,

        width: maxWidth - 60,
        height: 350,

        borderRadius: 20,
        
        shadowColor: '#000000',
		shadowOffset: {width: 0, height: 15},
		shadowOpacity: 0.05,
		shadowRadius: 20,
    },
    namePlate: {
        marginTop: 15,
    },
    nameText: {
        textAlign: 'center',
        fontFamily: "GilroyBold",
        fontSize: 25,
        color: "#444444",
        letterSpacing: -0.5
    },
// ------------------------------
    cardBottom: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 27,
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
    },
    idContainers: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    idBox: {
        paddingRight: 50,
        paddingLeft: 50,
    },
    idVal: {
       fontSize: 25,
       fontFamily: "GilroyBold",
       letterSpacing: -0.5,

       marginTop: 14,
       textAlign: 'center',
       color: "#444444" 
    },
    idTitle: {
        marginTop: 3,
        fontFamily: 'GilroySemiBold',
        fontSize: 10,
        color: "#888888",
        textAlign: 'center',
    },
    divider: {
        marginTop: 10,
        width: 1,
        height: 40,
        backgroundColor: "#DDDDDD"
    },
// --------------------------------
    confirmationPlate: {
        marginTop: 50,
    },
    checkAndTitle: {
        flexDirection: 'row',
    },
    confirmText: {
        marginLeft: 15,
        marginTop: 5,
        fontFamily: "GilroyRegular",
        fontSize: 11,
        color: "#888888",
        letterSpacing: 3
    },
    button: {
        position: 'absolute',
        marginLeft: 220,
        marginTop: -16,

        // borderWidth: 1,
        borderRadius: 100,

        shadowColor: '#000000',
		shadowOffset: {width: 0, height: 25},
		shadowOpacity: 0.10,
		shadowRadius: 20,
    }
})

export {RAALandingStyles}