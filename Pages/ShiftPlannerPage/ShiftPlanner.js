import react, {useState} from "react";
import { useRecoilState } from "recoil";
import { View, Text } from 'react-native'
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

    // Gets the current date
    const d = new Date();
    let year = d.getUTCFullYear
    let month = d.getUTCMonth();
    let day = d.getUTCDate();

    // Loading screen if not finished with querying the data
    if (loading || !data){
        return <Loading />
    }    

    // Redirects if there are no current ShiftPlanner Tables populated
    if (data.length == 0){
        return(<NoShifts />)
    }

    // Redirects if there is no shift planner data for this current day
    // Also creates several time based objects 
    let dbTime = data[data.length-1].date
    let dbDateObj = dateObj(dbTime, "UTC")
    if (`${dbDateObj.year}-${dbDateObj.month}-${dbDateObj.day}` !== `${year}-${month}-${day}`){
        return (<NoShifts />)
    }

    return (
        <View>
            <Banner />
            <View style={ShiftPlannerStyles.dateContainer}>
                <Text>Today's Date {`${year}-${month}-${day}`}</Text>
            </View>
            <View style={ShiftPlannerStyles.shiftInfo}>
                <View>
                    <ShiftInfo name="Phone ID Number" value={data.phoneId} />
                    <ShiftInfo name="Device ID Number" value={data.deviceId} />
                    <ShiftInfo name="CX Number" value={data.cxNumber} />
                    <ShiftInfo name="Vehicle Number" value={data.vehicleId} />
                </View>
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

export default ShiftPlanner