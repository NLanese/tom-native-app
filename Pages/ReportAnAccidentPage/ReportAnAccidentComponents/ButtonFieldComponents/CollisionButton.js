import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const CollisionButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/reportcollision")}}
				title='I hit another vehicle'
				color='#ffffff'
				accessibilityLabel='Third Party Report'
            />
        </View>
    )
}

export default CollisionButton
