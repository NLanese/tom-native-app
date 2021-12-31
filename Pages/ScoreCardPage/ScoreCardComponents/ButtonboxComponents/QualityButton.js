import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/ScoreCardStyles";

const QualityButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.ButtonCasing}>
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
