import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/createoradd")}}
				title='Report An Accident'
				color='#CCCCCC'
				accessibilityLabel='Report An Accident'
            />
        </View>
    )
}

export default ReportAnAccidentButton