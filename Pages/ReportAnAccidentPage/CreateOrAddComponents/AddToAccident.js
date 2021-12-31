import React from 'react'
import { View, Text, Button } from 'react-native'
import { CreateOrAddStyle } from '../../../Styles/ReportAnAccidentStyles'

const AddToAccidentButton = () => {

    return (
        <View style={CreateOrAddStyle.ataContainer}>
            <Button 
                onPress={() => {
                    console.log('Need to create AddToAccident.js')
                }}
                style={CreateOrAddStyle.caaButton}
                title='Add to Existing Accident'
                color='#CCCCCC'
                accessibilityLabel='Add to Accident'
            />
        </View>
    )
}

export default AddToAccidentButton