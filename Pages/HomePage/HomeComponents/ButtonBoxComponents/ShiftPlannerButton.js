import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ShiftPlannerButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/shiftplanner")}}
				title='Shift Planner'
				color='#ffffff'
				accessibilityLabel='Shift Planner'
            />
        </View>
    )
}

export default ShiftPlannerButton
