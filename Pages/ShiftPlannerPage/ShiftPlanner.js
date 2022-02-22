import react, {useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { DRIVERSGETSHIFTPLANNER } from "../../GraphQL/operations";
import Banner from '../../Global/Banner'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";
import dateObj from "../../Hooks/handleDateTime";
import { userState } from "../../Recoil/atoms";
import ShiftInfo from "../ScrappedPages/ShiftInfo";
import Loading from "../../Global/Loading";
import NoShifts from "./NoShifts";

const ShiftPlanner = () => {
    const [shiftPlannerData, setShiftPlannerData] = useState()
    // const [{ loading, error, data, refetch }] = useQuery(DRIVERSGETSHIFTPLANNER)

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

    // Gets the current date
    const d = new Date();
    let year = d.getUTCFullYear
    let month = d.getUTCMonth();
    let day = d.getUTCDate();

 
    console.log(user.shiftPlanners)
    // Redirects if there are no current ShiftPlanner Tables populated
    if (user.shiftPlanners === null){
        console.log("null")
        return(<NoShifts />)
    }
    else if (user.shiftPlanners.length < 1){
        console.log("Not null")
        return(<NoShifts />)
    }
    else {

        return (
            <View>
                <Banner />
                <View style={ShiftPlannerStyles.dateContainer}>
                    <Text>Today's Date {`${year}-${month}-${day}`}</Text>
                </View>
                <View style={ShiftPlannerStyles.shiftInfo}>
                    <ScrollView>
                        <ShiftInfo name="Sunday Date" value={user.shiftPlanners.sundayDate} />
                        <ShiftInfo name="Sunday Hours" value={user.shiftPlanners.sundayHours} />
                        <ShiftInfo name="Monday Date" value={user.shiftPlanners.mondayDate} />
                        <ShiftInfo name="Monday Hours" value={user.shiftPlanners.mondayHours} />
                        <ShiftInfo name="Tuesday Date" value={user.shiftPlanners.tuesdayDate} />
                        <ShiftInfo name="Tuesday Hours" value={user.shiftPlanners.tuesdayHours} />
                        <ShiftInfo name="wednesday Date" value={user.shiftPlanners.wednesdayDate} />
                        <ShiftInfo name="wednesday Hours" value={user.shiftPlanners.wednesdayHours} />
                        <ShiftInfo name="Thursday Date" value={user.shiftPlanners.thursdayDate} />
                        <ShiftInfo name="Thursday Hours" value={user.shiftPlanners.thursdayHours} />
                        <ShiftInfo name="Friday Date" value={user.shiftPlanners.fridayDate} />
                        <ShiftInfo name="Friday Hours" value={user.shiftPlanners.fridayHours} />
                        <ShiftInfo name="Saturday Date" value={user.shiftPlanners.saturdayDate} />
                        <ShiftInfo name="Saturday Hours" value={user.shiftPlanners.saturdayHours} />
                        <ShiftInfo name="Phone ID Number" value={user.shiftPlanners.phoneId} />
                        <ShiftInfo name="Device ID Number" value={user.shiftPlanners.deviceId} />
                        <ShiftInfo name="CX Number" value={user.shiftPlanners.cxNumber} />
                        <ShiftInfo name="Vehicle Number" value={user.shiftPlanners.vehicleId} />
                    </ScrollView>
                </View>
                <View>
                    <View>
                        <Text>Daily Message:</Text>
                    </View>
                    <View>
                        <Text>{data.message}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default ShiftPlanner