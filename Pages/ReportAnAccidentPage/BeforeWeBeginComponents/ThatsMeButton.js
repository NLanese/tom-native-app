import React from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { buttonBox } from "../../../Styles/HomeStyles"

const ThatsMeButton = () => {
    let history = useHistory()

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/create_or_add")}}
				title='Thats me!'
				color='#CCCCCC'
				accessibilityLabel='Thats me'
            />
        </View>
    )
}

export default ThatsMeButton