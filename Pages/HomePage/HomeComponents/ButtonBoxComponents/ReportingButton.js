import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ReportingButton = () => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.homeButtons}>
            <Button 
                onPress={() => {navigation.navigate("reporting")}}
				title='Reporting'
				color='#ffffff'
				accessibilityLabel='Reporting'
            />
        </View>
    )
}

export default ReportingButton
