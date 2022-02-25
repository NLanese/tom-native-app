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
