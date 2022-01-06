import React from "react";
import { View, Text, ScrollView } from 'react-native'

const EmployeeQuality = ({driverData}) => {


    return(
        <View style={SafetyAndComplianceStyles.topThreeEmployeeCard}>

            <View>
                <View>
                    <Text>{driverData.firstname} {driverData.lastname}</Text>
                </View>
                <View>
                    <Text>Imagine an Icon was Here</Text>
                    {/* Icon Here */}
                </View>
            </View>
            <View>
                <Text>DCR</Text>
                <Text>{driverData.delivery_completion_rate}</Text>
            </View>
            <View>
                <Text>DAR</Text>
                <Text>{driverData.delivered_and_recieved}</Text>
            </View>
            <View>
                <Text>POD</Text>
                <Text>{driverData.photo_on_delivery}</Text>
            </View>
            <View>
                <Text>Call Compliance</Text>
                <Text>{driverData.photo_on_delivery}</Text>
            </View>
            <View>
                <Text>Scan Compliance</Text>
                <Text>{driverData.photo_on_delivery}</Text>
            </View>

        </View>
    )
}
export default EmployeeQuality