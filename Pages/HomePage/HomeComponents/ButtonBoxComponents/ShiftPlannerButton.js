import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../../Styles/HomeStyles"

const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/shiftplanner")}}
				title='Shift Planner'
				color='#CCCCCC'
				accessibilityLabel='Shift Planner'
            />
        </View>
    )
}

export default ShiftPlannerButton
