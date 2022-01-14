import React from "react"
import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const AnalyticsButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.AnalyticsButton}>
            <Button 
                onPress={() => {navigation.navigate("analytics")}}
				title='Analytics'
				color='#ffffff'
				accessibilityLabel='Analytics'
            />
        </View>
    )
}

export default AnalyticsButton
