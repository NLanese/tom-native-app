import react from "react"
import { useHistory } from 'react-router-native';
import { View, Button } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ProductivityButton = () => {
    let history = useHistory()

    return (
        <View style={ButtonBoxStyles.scoreCardButton}>
            <Button 
                onPress={() => {history.push("/Productivity")}}
				title='Productivity'
				color='#CCCCCC'
				accessibilityLabel='Productivity'
            />
        </View>
    )
}

export default ProductivityButton
