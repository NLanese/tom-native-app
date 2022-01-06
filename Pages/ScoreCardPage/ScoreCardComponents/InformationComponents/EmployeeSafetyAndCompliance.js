import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import { SafetyAndComplianceStyles } from "../../../../Styles/ScoreCardStyles";

const EmployeeSafetyAndCompliance = ({driverData}) => {


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
                <Text>FICO</Text>
                <Text>{driverData.fico}</Text>
            </View>
            <View>
                <Text>Seatbelt and Speedings</Text>
                <Text>{driverData.seatbelt_and_speeding}</Text>
            </View>
            <View>
                <Text>Netradyne</Text>
                <Text>{driverData.netradyne}</Text>
            </View>

        </View>
    )
}
export default EmployeeSafetyAndCompliance