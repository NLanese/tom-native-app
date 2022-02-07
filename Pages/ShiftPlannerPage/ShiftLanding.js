import react, {useState} from "react";
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
import { useQuery } from "@apollo/client";
import Banner from '../../Global/Banner'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";
import { userState } from "../../Recoil/atoms";

import ShiftPlanner from "./ShiftPlanner";

const ShiftLanding = () => {

    const rawUser = useRecoilState(userState)
    const user = rawUser[0]

    const determineShiftScreen = () => {
        if (user.role === 'USER'){
            return <ShiftPlanner /> 
        }
        else {
            return 
        }
    }

    return (
        <View>
            <Banner />
        </View>
    )
}

export default ShiftLanding