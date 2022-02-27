import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const RAACollisionInfoStyles = StyleSheet.create({
    button: {
        width: 80, 
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
    },
//--------------------------------------------------
    buttonBox: {
        flexDirection: 'row',
        // borderWidth: 1,
        marginLeft: 30,
        marginTop: 20,
    },
    buttonContainer: {
        // borderWidth: 1
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
    }
// ------------------

})

export {
    RAACollisionInfoStyles
}