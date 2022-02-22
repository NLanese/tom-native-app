import React from 'react'
import { View, Text, Button } from 'react-native'
import { CreateOrAddStyles } from '../../../Styles/ReportAnAccidentStyles'

const AddToAccidentButton = () => {

    return (
        <View style={CreateOrAddStyles.ataContainer}>
            <Button 
                onPress={() => {
                    console.log('Need to create AddToAccident.js')
                }}
                style={CreateOrAddStyles.caaButton}
                title='Add to Existing Accident'
                color='#ffffff'
                accessibilityLabel='Add to Accident'
            />
        </View>
    )
}

export default AddToAccidentButton