import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const ReportAnAccidentButton = () => {
    let maxWidth= Dimensions.get('window').width
    let maxHeight= Dimensions.get('window').height
    const navigation = useNavigation()


    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("leadership_notified")}}>
            <View style={ButtonBoxStyles.buttonCard}>
                <Image 
                    style={ButtonBoxStyles.image}
                    source={require('../../../../assets/reporting-icon.png')}/>
            </View> 
            <View style={{ marginTop: '-30%' }}>
                <Text style={ButtonBoxStyles.label}>REPORT AN ACCIDENT</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default ReportAnAccidentButton