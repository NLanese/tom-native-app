import { StyleSheet } from 'react-native';

const CreateOrAddStyles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
    },
    titleContainer: {
        marginTop: 70,
        paddingLeft: 25,
        paddingRight: 25,
        height: 50,
        width: 368,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    caaContainer: {
        marginTop: 140,
        height: 50,
        width: 320,
        backgroundColor: '#02020A',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ataContainer: {
        marginTop: 20,
        height: 50,
        width: 320,
        backgroundColor: '#02020A',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 24, 
        flexWrap: 'wrap' 
    },
    caaButton: {
        width: 150,
        height: 50,
    }
})

const ReportAnAccidentStyles = StyleSheet.create({
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
        color: '#ffffff',
        fontSize: 36,  
    },
})

const SubmitStyles = StyleSheet.create({
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

const ButtonFieldStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const BeforeWeBeginStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50
    },
    subContainer: {
        marginTop: 25
    },
    text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24
	},
})

const MedicalAttentionStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50
    },
    text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24
	},
})

const LeadershipNotifiedStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50
    },
    text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24
	},
})

const PoliceContactedStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50
    },
    text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24
	},
})

const PleaseRememberStyles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50
    },
    text: {
		color: '#F7F7FF',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 24
	},
})

export {
    CreateOrAddStyles,
    ReportAnAccidentStyles,
    SubmitStyles,
    ButtonFieldStyles,
    BeforeWeBeginStyles,
    MedicalAttentionStyles,
    LeadershipNotifiedStyles,
    PoliceContactedStyles,
    PleaseRememberStyles
}