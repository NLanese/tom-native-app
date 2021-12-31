import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/leadership_notified")}}
				title='Report An Accident'
				color='#CCCCCC'
				accessibilityLabel='Report An Accident'
            />
        </View>
    )
}

export default ReportAnAccidentButton