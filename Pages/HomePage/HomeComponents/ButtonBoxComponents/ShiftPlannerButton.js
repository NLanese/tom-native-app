import React from "react"
import { View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

import { useRecoilState } from "recoil";
import { websiteState } from "../../../../Recoil/atoms";

import { useNavigation } from "@react-navigation/native";

import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"


const ShiftPlannerButton = () => {
    
    let maxWidth = Dimensions.get('window').width
    let maxHeight = Dimensions.get('window').height

    const navigation = useNavigation()

    const [website, setWebsite] = useRecoilState(websiteState)

    const handleClick = () => {
        setWebsite({current: "Shift View", previous: website.current})
        navigation.navigate("shift_planner")
    }


    return (
        <View style={ButtonBoxStyles.clickable}>
            <TouchableOpacity onPress={() => {handleClick()}}>
                <View style={ButtonBoxStyles.buttonCard}>
                    <Image 
                        style={{
                            alignContent: 'center',
                            top: '30%',
                            height: 40,
                            width: 37,
                            marginLeft: 58
                        }}
                        source={require('../../../../assets/shift-planner-icon.png')}/>
                </View> 
                <View style={{ marginTop: '-32%', alignItems: 'center'}}>
                    <Text style={ButtonBoxStyles.label}>SHIFT PLANNER</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ShiftPlannerButton
