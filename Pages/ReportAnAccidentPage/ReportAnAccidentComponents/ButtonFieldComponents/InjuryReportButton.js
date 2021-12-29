import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const InjuryReportButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/reportinjuryreport")}}
				title='Injury Report'
				color='#CCCCCC'
				accessibilityLabel='Injury Report'
            />
        </View>
    )
}

export default InjuryReportButton
