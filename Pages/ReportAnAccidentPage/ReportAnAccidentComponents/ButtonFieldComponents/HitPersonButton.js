import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const HitPersonButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/reporthitperson")}}
				title='I hit a pedestrain'
				color='#CCCCCC'
				accessibilityLabel='HitPerson'
            />
        </View>
    )
}

export default HitPersonButton
