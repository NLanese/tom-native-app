import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const ReportingButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/reporting")}}
				title='Reporting'
				color='#CCCCCC'
				accessibilityLabel='Reporting'
            />
        </View>
    )
}

export default ReportingButton