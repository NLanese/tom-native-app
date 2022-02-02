import react from "react";
import { View, Text } from 'react-native'
import { ShiftPlannerStyles } from "../../Styles/ShiftPlannerStyles";

const AdminDriverShiftCard = ({driverData}) => {

    return(
        <View>
            <View>
                {driverData.firstname} {driverData.lastname}
            </View>
            <View>
                <View>
                    {/* Phone number... not like a phonenumber but the integer number associated with the phone. More of a phoneId. Add to Schema */}
                </View>
                <View>
                    {/* Device ID */}
                </View>
                <View>
                    {/* Vehicle ID */}
                    {driverData.vehicle.id}
                </View>
                <View>
                    {/* CX# ... not at all sure what that is or where it comes from */}
                </View>
            </View>
        </View>
    )
}

export default AdminDriverShiftCard