import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ProductivityButton = () => {
    const navigation = useNavigation()

    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("productivity")}}>
            <View>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/productivity-icon.jpeg')}/>
            </View> 
            <View style={ButtonBoxStyles.label}>
                <Text style={{textAlign: 'center'}}>Productivity</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ProductivityButton
