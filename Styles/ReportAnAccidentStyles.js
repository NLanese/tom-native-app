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

const ReportAnAccidentStyle = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%'
    },
    titleContainer: {
        marginTop: 70,
        height: 50,
        width: 368,
        alignContent: 'flex-start',
        alignItems: 'center',
    },
    inputFieldContainer: {
        height: 368,
        width: '90%',
        // backgroundColor: 'green'
    },
    titleText: {
        color: '#CCCCCC',
        fontSize: 36,  
    },
})

const SubmitStyle = StyleSheet.create({
	container: {
        display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 15
	},
	titleText: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24,
		marginLeft: 70
	},
	input: {
		backgroundColor: '#F7F7FF',
		color: '#02020A',
		height: 40,
		width: 275,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
	},
});

export {
    CreateOrAddStyle,
    ReportAnAccidentStyle,
    SubmitStyle
}