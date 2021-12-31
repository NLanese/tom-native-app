import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../Styles/HomeStyles"

const ThatsMeButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/create_or_add")}}
				title='Thats me!'
				color='#ffffff'
				accessibilityLabel='Thats me'
            />
        </View>
    )
}

export default ThatsMeButton