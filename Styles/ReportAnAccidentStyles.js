import { StyleSheet } from 'react-native';

const CreateOrAddStyle = StyleSheet.create({
    container: {
        display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // alignContent: 'flex-start',
        height: "100%",
    },
    titleContainer: {
        marginTop: 70,
        height: 50,
        width: 368,
        alignContent: 'flex-start',
        alignItems: 'center',
    },
    caaContainer: {
        marginTop: 140,
        height: 50,
        width: 320,
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ataContainer: {
        marginTop: 20,
        height: 50,
        width: 320,
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        color: '#CCCCCC',
        fontSize: 36,  
    },
    caaButton: {
        width: 150,
        height: 50,
    }

})

export {
    CreateOrAddStyle
}