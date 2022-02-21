import React from "react"
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image, Text } from 'react-native'
// import { userState } from '../../Recoil/atoms';
// import { useRecoilState } from 'recoil';
import { ButtonBoxStyles } from "../../../../Styles/HomeStyles"



const ShiftPlannerButton = () => {
    const navigation = useNavigation()
    // const [user, setUser] = useRecoilState(userState)


    return (
        <View style={ButtonBoxStyles.clickable}>
            <TouchableOpacity onPress={() => {navigation.navigate("shift_planner")}}>
                <View style={ButtonBoxStyles.buttonCard}>
                    <Image 
                        style={ButtonBoxStyles.image}
                        source={require('../../../../assets/shift-planner-icon.png')}/>
                </View> 
                <View style={{ marginTop: '-30%' }}>
                    <Text style={ButtonBoxStyles.label}>SHIFT PLANNER</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ShiftPlannerButton
