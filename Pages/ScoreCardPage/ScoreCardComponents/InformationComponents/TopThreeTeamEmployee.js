import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const TopThreeTeamEmployees = ({driverData, key}) => {

    if (driverData.defects == null){
        driverData.defects = 0
    }
    if (driverData.customer_delivery_feedback == null){
        driverData.customer_delivery_feedback = 0
    }

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
                <Text>Customer Feedback</Text>
                <Text>{driverData.customer_delivery_feedback}</Text>
            </View>
        </View>
    )
}
export default TopThreeTeamEmployees