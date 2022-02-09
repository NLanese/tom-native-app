import react from "react";
import { render } from "react-dom";
import { ScrollView, Text } from 'react-native'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";
import AdminDriverShiftCard from "./AdminDriverShiftCard";

const AdminShiftPlanner = () => {
    // const { loading, error, data, refetch } = useQuery(GETSCHEDULE)

    // Takes the list of drivers and turns each one into a component
    const renderDrivers = (list) => {
        let i = 0
        return list.map( (driver) => {
            i++
            return <AdminDriverShiftCard driverData={driver} key={i} />
        })
    }

    return(
        <ScrollView>
            {renderDrivers(data)}
        </ScrollView>
    )
}
export default AdminShiftPlanner