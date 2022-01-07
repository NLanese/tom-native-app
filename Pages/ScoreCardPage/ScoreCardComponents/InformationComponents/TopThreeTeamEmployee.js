import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';

const TopThreeTeamEmployees = ({driverData, key}) => {

    let data = {...driverData}

    if (data.defects == null){
        data.defects = 0
    }
    if (data.customer_delivery_feedback == null){
        data.customer_delivery_feedback = 0
    }

    return(
        <Card>
            <View>
                <Text>{data.firstname} {data.lastname}</Text>
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
                <Text>{data.defects}</Text>
            </View>
            <View>
                <Text>Customer Feedback</Text>
                <Text>{data.customer_delivery_feedback}</Text>
            </View>
        </Card>
    )
}
export default TopThreeTeamEmployees