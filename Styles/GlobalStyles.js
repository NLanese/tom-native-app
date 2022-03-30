//GlobalStyles.js

import { StyleSheet, Dimensions } from "react-native";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const DropdownStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        paddingTop: 20, 
        paddingBottom: 10,
        position: 'absolute', 
        top: 50, 
        right: 0, 
        margin: 0, 
        shadowOpacity: 0,
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
        height: 40,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 0,
    },
    accountInformationButtonText: {
        color: 'black',
        fontSize: 10,
    },
    notificationLabel:{
        fontSize: 12,
    },
    notificationContent:{
        flex: 1,
    },
    smallDivider: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.75,
        marginTop: 5,
    },
    notificationBox: {
        // borderWidth: 0.5,
        backgroundColor: '#E2E8F1',
        borderRadius: 10,
        padding: 4,
        height: maxHeight * 0.12,
        marginTop: maxHeight * 0.006
    },
})

export {
    DropdownStyles
}
