import { StyleSheet } from 'react-native';

const CommunicationStyles = StyleSheet.create({ 

    container: {
        flex: 7,
        // flexDirection: 'column',
        marginRight: 2,
        marginLeft: 2,
        // borderWidth: 20,
        // borderColor: 'green'
    },

    thread:{
        flex: 6,
        // borderColor: 'red',
        // borderWidth: 2
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