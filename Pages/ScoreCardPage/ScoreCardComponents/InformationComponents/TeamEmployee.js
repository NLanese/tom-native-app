import React from "react";
import { View, Text, ScrollView } from 'react-native'

const TeamEmployees = ({driverData}) => {


    return(
        <View>
            <View>
                <Text>{driverData.firstname} {driverData.lastname}</Text>
            </View>
            <View>
                <Text>Imagine an Icon was Here</Text>
                {/* Icon Here */}
            </View>
            <View>
                {/* Color Bar */}
            </View>
            <View>
                <Text>Defects</Text>
                <Text>{driverData.defects}</Text>
            </View>
            <View>
                <Text>POD</Text>
                <Text>{driverData.customer_delivery_feedback}</Text>
            </View>
        </View>
    )
}
export default TeamEmployees