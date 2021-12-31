import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/ScoreCardStyles";

const SafetyAndComplianceButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.ButtonCasing}>
            <Button 
                onPress={() => {history.push("/safetyandcompliance")}}
				title='Safety and Compliance'
				color='#ffffff'
				accessibilityLabel='safetyandcompliance'
            />
        </View>
    )
}

export default SafetyAndComplianceButton
