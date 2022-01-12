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

    input:{
        height: maxHeight * 0.08,
        width: maxWidth - 10,
        marginRight: 5
        // borderWidth: 1,
    }

})

export{
    CommunicationStyles
}