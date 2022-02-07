import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"

const InspectionButton = () => {
    let maxWidth= Dimensions.get('window').width
    let maxHeight= Dimensions.get('window').height
    const navigation = useNavigation()


    return (
    <View style={ButtonBoxStyles.clickable}>
        <TouchableOpacity onPress={() => {navigation.navigate("inspection")}}>
            <View>
                <Image 
                    style={{
                        alignContent: 'center',
                        height: maxHeight * 0.183,
                        width: '82%',
                        marginLeft: maxHeight * 0.025
                    }}
                    source={require('../../../../assets/reporting-icon.jpeg')}/>
            </View> 
            <View style={{
                width: '100%',
                // borderWidth: 2,
                textAlign: 'center',
                alignItems: 'center',
                marginTop: 8,
                left: -maxWidth * 0.035
            }}>
                <Text style={{textAlign: 'center'}}>Report an Accident</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

export default InspectionButton