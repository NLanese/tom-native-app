import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const CommunicationStyles = StyleSheet.create({ 

    container: {
        height: maxHeight - 75,
        display: "flex",
        flexDirection: 'column',
        // borderWidth: 20,
        // borderColor: 'green'
    },

    thread:{
        flex: 1,
        borderColor: 'red',
        borderWidth: 2
    },

    newMessageAddress: {
        backgroundColor: "#eff7fa"
    },

    createMessage: {
        borderTopWidth: 3,
        height: 75,
        bottom: 0
    }
})

export{
    CommunicationStyles
}