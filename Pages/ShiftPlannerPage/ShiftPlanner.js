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
    const { loading, error, data, refetch } = useQuery(DRIVERSGETSHIFTPLANNER)
    const [shiftPlannerData, setShiftPlannerData] = useState()

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

    useEffect(() => {
        refetch()
    }, [])

    useEffect(() => {
        if (!loading && data) {
            console.log(data.driverGetShiftPlanner)
            setShiftPlannerData(data.driverGetShiftPlanner)
        }
    }, [data])

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
    // let dbTime = data[data.length-1].date
    // let dbDateObj = dateObj(dbTime, "UTC")
    // if (`${dbDateObj.year}-${dbDateObj.month}-${dbDateObj.day}` !== `${year}-${month}-${day}`){
    //     return (<NoShifts />)
    // }
    console.log(data.driverGetShiftPlaner[0])
    return (
        <View>
            <Banner />
            <View style={ShiftPlannerStyles.dateContainer}>
                <Text>Today's Date {`${year}-${month}-${day}`}</Text>
            </View>
            <View style={ShiftPlannerStyles.shiftInfo}>
                <ScrollView>
                    <ShiftInfo name="Sunday Date" value={data.driverGetShiftPlaner[0].sundayDate} />
                    <ShiftInfo name="Sunday Hours" value={data.driverGetShiftPlaner[0].sundayHours} />
                    <ShiftInfo name="Monday Date" value={data.driverGetShiftPlaner[0].mondayDate} />
                    <ShiftInfo name="Monday Hours" value={data.driverGetShiftPlaner[0].mondayHours} />
                    <ShiftInfo name="Tuesday Date" value={data.driverGetShiftPlaner[0].tuesdayDate} />
                    <ShiftInfo name="Tuesday Hours" value={data.driverGetShiftPlaner[0].tuesdayHours} />
                    <ShiftInfo name="wednesday Date" value={data.driverGetShiftPlaner[0].wednesdayDate} />
                    <ShiftInfo name="wednesday Hours" value={data.driverGetShiftPlaner[0].wednesdayHours} />
                    <ShiftInfo name="Thursday Date" value={data.driverGetShiftPlaner[0].thursdayDate} />
                    <ShiftInfo name="Thursday Hours" value={data.driverGetShiftPlaner[0].thursdayHours} />
                    <ShiftInfo name="Friday Date" value={data.driverGetShiftPlaner[0].fridayDate} />
                    <ShiftInfo name="Friday Hours" value={data.driverGetShiftPlaner[0].fridayHours} />
                    <ShiftInfo name="Saturday Date" value={data.driverGetShiftPlaner[0].saturdayDate} />
                    <ShiftInfo name="Saturday Hours" value={data.driverGetShiftPlaner[0].saturdayHours} />
                    <ShiftInfo name="Phone ID Number" value={data.driverGetShiftPlaner[0].phoneId} />
                    <ShiftInfo name="Device ID Number" value={data.driverGetShiftPlaner[0].deviceId} />
                    <ShiftInfo name="CX Number" value={data.driverGetShiftPlaner[0].cxNumber} />
                    <ShiftInfo name="Vehicle Number" value={data.driverGetShiftPlaner[0].vehicleId} />
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

export default ShiftPlanner