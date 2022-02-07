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
                <View >
                    <Image 
                        style={ButtonBoxStyles.image}
                        source={require('../../../../assets/shift-planner-icon.jpeg')}/>
                </View> 
                <View style={ButtonBoxStyles.label}>
                    <Text style={{textAlign: 'center'}}>Shift Planner</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ShiftPlannerButton
