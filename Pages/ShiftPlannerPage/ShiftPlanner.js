import react, {useState} from "react";
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
import { useQuery } from "@apollo/client";
import { DRIVERSGETSHIFTPLANNER } from "../../GraphQL/operations";
import Banner from '../../Global/Banner'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";
import dateObj from "../../Hooks/handleDateTime";
import { userState } from "../../Recoil/atoms";
import ShiftInfo from "./ShiftInfo";

const ShiftPlanner = () => {
    const { loading, error, data, refetch } = useQuery(DRIVERSGETSHIFTPLANNER)

    // Recoil
    const [rawUser, setRawUser] = useRecoilState(userState)

    // Handles the user data
    let user
    if (rawUser.isArray){
        user = rawUser[0]
    }
    else{
        user = {...rawUser}
    }

    let today = Date.now()
    // const todaysDate = ((today.getMonth() + 1) + "-" + today.getDate())



    return (
        <View>
            <Banner />
            <View style={ShiftPlannerStyles.dateContainer}>
                <Text>Today's Date {today}</Text>
            </View>
            <View style={ShiftPlannerStyles.shiftInfo}>
                <View>
                    <ShiftInfo name="Phone ID Number" value={1} />
                    <ShiftInfo name="Device ID Number" value={"27-D"} />
                    <ShiftInfo name="CX Number" value={"2683-001"} />
                    <ShiftInfo name="Vehicle Number" value={"PS7-83Z"} />
                </View>
            </View>
            <View>
                <View>
                    <Text>Daily Message:</Text>
                </View>
                <View>
                    <Text>This is an example daily message!</Text>
                </View>
            </View>
        </View>
    )
}

export default ShiftPlanner