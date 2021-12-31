import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const QualityButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/quality")}}
				title='Quality'
				color='#ffffff'
				accessibilityLabel='quality'
            />
        </View>
    )
}

export default QualityButton
