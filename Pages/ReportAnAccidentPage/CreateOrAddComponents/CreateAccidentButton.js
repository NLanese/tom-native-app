import React from 'react'
import { View, Text, Button } from 'react-native'
import { CreateOrAddStyle } from '../../../Styles/ReportAnAccidentStyles'

const CreateAccidentButton = () => {

    return (
        <View style={CreateOrAddStyle.caaContainer}>
            <Button 
                onPress={() => {
                    console.log('hit')
                }}
                style={CreateOrAddStyle.caaButton}
                title='Create an Accident'
                color='#CCCCCC'
                accessibilityLabel='Create an Accident'
            />
        </View>
    )
}

export default CreateAccidentButton