import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const SafetyAndComplianceButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/safetyandcompliance")}}
				title='Safety and Compliance'
				color='#CCCCCC'
				accessibilityLabel='safetyandcompliance'
            />
        </View>
    )
}

export default SafetyAndComplianceButton
