import { StyleSheet, Dimensions } from "react-native";

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const Template = StyleSheet.create({
    button: {
        width: 80, 
        height: 80,
        borderRadius: 40,
        justifyContent: 'center'
    },
    lgButton: {
        marginTop: 10,
        width: 100, 
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000000',
		shadowOffset: {width: 0, height: 25},
		shadowOpacity: 0.20,
		shadowRadius: 20,
    },
//--------------------------------------------------
    buttonBox: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 20,
    },
    buttonContainer: {

    },
    noButtonContainer: {
        marginLeft:  60,
    },
    buttonText: {
        color: "#FFFFFF",
        fontFamily: "GilroyBold",
        textAlign: 'center',
        fontSize: 20
    },
// ---------------------
    questionText: {
        marginLeft: 30,
        width: maxWidth - 60,
        marginTop: 30,
        fontSize: 24,
        fontFamily: "GilroyBold",
        color: "#444444"
    },
    title: {
        marginLeft: 30,
        width: maxWidth - 60,
        marginTop: 30,
        fontSize: 24,
        fontFamily: "GilroyBold",
        color: "#444444"
    },
    subTitle: {
        marginLeft: 30,
        marginBottom: 5,
        fontFamily: 'GilroyBold',
        fontSize: 10,
        letterSpacing: 2,
        color: '#888888'
    },

    subTitle2: {
        marginLeft: 30,
        marginBottom: 5,
        fontFamily: 'GilroyBold',
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 20,
        color: '#888888'
    },
// -------------------------
    activeInput: {
        backgroundColor: "#ccc",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15,
    },
    inactiveInput: {
        backgroundColor: "#ccc",
        borderColor: "#ccc",
        borderWidth: 3,
        borderRadius: 15,
    },
    neutralInput: {
        backgroundColor: "#ccc",
        borderColor: "#534FFF",
        borderWidth: 3,
        borderRadius: 15,
    },
// --------------------------
    stackedCheck : {
        marginTop: 10
    },
    checkRow: {
        flexDirection: 'row',
        marginLeft: 30,
        width: maxWidth - 60,
        marginTop: 15
    },
    rowCheck: {
        width: 110,
        marginRight: 0
    },
// -------------------------
    inactiveTextStyle: {
        color: '#bbb',
        fontFamily: 'GilroyRegular',
        fontSize: 14,
        paddingLeft: 8
    },
    activeTextStyle: {
        color: '#444',
        fontFamily: 'GilroyRegular',
        fontSize: 14,
        paddingLeft: 8
    },
    body: {
        fontFamily: "GilroyMedium",
        fontSize: 13,
        lineHeight: 20,
        color: "#888888",
        letterSpacing: 0.5
    }
})

export default Template