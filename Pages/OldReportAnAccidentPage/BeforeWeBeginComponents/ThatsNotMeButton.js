import React from "react"
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../Styles/HomeStyles"

const ThatsNotMeButton = () => {

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => { console.log('make modal saying to contact admin')}}
				title='Thats not me!'
				color='#ffffff'
				accessibilityLabel='Thats not me'
            />
        </View>
    )
}

export default ThatsNotMeButton