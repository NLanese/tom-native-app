import React from 'react'
import { View, Text, Button } from 'react-native'
import { CreateOrAddStyle } from '../../../Styles/ReportAnAccidentStyles'
import { useHistory } from 'react-router-native'

const CreateAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={CreateOrAddStyle.caaContainer}>
            <Button 
                onPress={() => {
                    history.push('/reportanaccident')
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