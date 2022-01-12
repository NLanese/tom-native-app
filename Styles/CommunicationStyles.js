import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const CommunicationStyles = StyleSheet.create({ 

    container: {
        height: maxHeight - 75,
        flexDirection: 'column',
    },

    thread:{
        flex: 1,
    },

    threadContainer: {
        paddingRight: 10,
        paddingLeft: 10
    },
    sendButton: {
        backgroundColor: "#E2E8F1",
        position: 'absolute',
        width: '10000000%',
    }

})

export{
    CommunicationStyles
}