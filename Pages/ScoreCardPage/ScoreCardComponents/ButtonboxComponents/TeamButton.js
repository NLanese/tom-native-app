import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const TeamButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/team")}}
				title='Team'
				color='#ffffff'
				accessibilityLabel='Team'
            />
        </View>
    )
}

export default TeamButton
