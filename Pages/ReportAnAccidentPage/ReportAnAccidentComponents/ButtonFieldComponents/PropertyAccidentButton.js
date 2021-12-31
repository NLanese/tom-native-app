import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'

const PropertyAccidentButton = () => {
    let history = useHistory()

    return (
        <View>
            <Button 
                onPress={() => {history.push("/reportpropertyaccident")}}
				title='I hit someones property'
				color='#ffffff'
				accessibilityLabel='Property Accident'
            />
        </View>
    )
}

export default PropertyAccidentButton
