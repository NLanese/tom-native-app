import React from 'react'
import { View, Text, Button } from 'react-native'
import { CreateOrAddStyles } from '../../../Styles/ReportAnAccidentStyles'
import { useHistory } from 'react-router-native'

const CreateAccidentButton = () => {
    let history = useHistory()

    return (
        <View style={CreateOrAddStyles.caaContainer}>
            <Button 
                onPress={() => {
                    history.push('/report_an_accident')
                }}
                style={CreateOrAddStyles.caaButton}
                title='Report a New Accident'
                color='#CCCCCC'
                accessibilityLabel='Report an Accident'
            />
        </View>
    )
}

export default CreateAccidentButton