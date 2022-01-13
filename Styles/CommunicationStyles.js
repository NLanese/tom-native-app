import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const CommunicationStyles = StyleSheet.create({ 

    container: {
        height: maxHeight - 75,
        flexDirection: 'column',
    },

    threadLabel: {
        height: maxHeight * 0.1,
        alignItems: 'center',
        backgroundColor: "#f9f9f9"
    },

    labelName: {
        marginTop: maxHeight * 0.005
    },

    thread:{
        top: maxWidth * 0.04,
    },

    threadContainer: {
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 0.8,
        borderColor: '#E2E8F1',
        backgroundColor: "#f1f1f1",
        height: maxHeight * 0.71
    },
    sendButton: {
        backgroundColor: "#E2E8F1",
        borderWidth: 0.7,
        borderRadius: 5,
        position: 'absolute',
        justifyContent: 'center',
        width: maxWidth * 0.15,
        height: maxHeight * 0.084,
        left: maxWidth * 0.84,
        top: maxHeight * 0.01
    }

})

export{
    CommunicationStyles
}