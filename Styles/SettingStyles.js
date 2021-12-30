import { shouldInclude } from '@apollo/client/utilities';
import { StyleSheet } from 'react-native';

const settings = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1a2c3d',
        justifyContent: 'center'
    },

    informationContainer :{
        position: 'absolute',
        width: "80%",
        left: "10%"
    },

    text: {
        color: 'white'
    },

    header: {
        marginTop: 40,
        position: "absolute",
        backgroundColor: "grey",
        width: '100%',
        textAlign: 'center'
    },

    buttonBox: {
        marginTop: 50,
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 500,
		width: '90%',
		display: 'flex'
    },
    button: {
        marginBottom: 55
    }
})

export {
    settings
}