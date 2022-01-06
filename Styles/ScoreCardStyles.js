import { StyleSheet } from "react-native";

const ScoreCardStyles = StyleSheet.create({
    container: {
		height: 160,
		width: 160,
		shadowOpacity: 0,
		borderWidth: 1,
		borderColor: '#f1f1f1',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 12,
		marginBottom: 12
	},

	rightContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		marginRight: 15,
		marginLeft: 150,
	},
    
	leftContainer: {
		flex: 1,
		position: 'absolute',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginLeft: 15,
	},

    image: {
		height: 110,
		width: 160,
		backgroundColor: '#afbed3',
	},

    CardContent: {
		textAlign: 'center',
		top: 11,
		fontSize: 16,
		lineHeight: 20
	},


})

const QualityStyles = StyleSheet.create({

})

const SafetyAndComplianceStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		// borderWidth: 5
	},

	topThree: {
		flex: 4,
		marginTop: "3%",
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		// borderWidth: 5
	},

	remainders: {
		flex: 2,
		marginTop: "3%",
		display: "flex",
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	topThreeEmployeeCard: {
		flex: 2,
		position: "relative",
		height: 270,
		width: 350,
		marginBottom: 2,
		borderWidth: 1,
		borderColor: 'black'
	}
})

const EmployeeSafetyAndComplianceStyles = StyleSheet.create({

})


export { 
    ScoreCardStyles, 
    QualityStyles, 
    SafetyAndComplianceStyles, 
    EmployeeSafetyAndComplianceStyles, 
}