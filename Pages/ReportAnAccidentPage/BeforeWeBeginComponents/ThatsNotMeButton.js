import React from "react"
import { View, Button } from 'react-native'
import { buttonBox } from "../../../Styles/HomeStyles"

const ThatsNotMeButton = () => {

    return (
        <View style={buttonBox.scoreCardButton}>
            <Button 
                onPress={() => { console.log('make modal saying to contact admin')}}
				title='Thats not me!'
				color='#CCCCCC'
				accessibilityLabel='Thats not me'
            />
        </View>
    )
}

export default ThatsNotMeButton