import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { TeamStyles } from "../../../../Styles/ScoreCardStyles";
import Team from "../Team";

const TopThreeTeamEmployees = ({driverData, key, rank}) => {

    let color = ""
    if (rank == 1){
        color = 'green'
    }
    else if (rank == 2){
        color = "yellow"
    }
    else if (rank == 3){
        color = "red"
    }

    let data = {...driverData}

    if (data.defects == null){
        data.defects = 0
    }
    if (data.customer_delivery_feedback == null){
        data.customer_delivery_feedback = 0
    }

    return(
        <Card style={TeamStyles.topThreeEmployeeCard}>

        <View style={TeamStyles.cardTop}>
            <View style={TeamStyles.iconSpace}>
                <Text >Imagine an Icon was Here</Text>
                {/* Icon Here */}
            </View>
            <View style={TeamStyles.nameSpace}>
                <Text style={TeamStyles.employeeName}>{data.firstname} {data.lastname}</Text>
            </View>
        </View>
        <View style={TeamStyles.cardBottm}>
            <View style={{
                width: '25%',
                height: '100%',
                backgroundColor: color
            }}>

            </View>
            <View style={TeamStyles.defect}>
                <Text>Defects</Text>
                <Text>{data.seatbelt_and_speeding}</Text>
            </View>
            <View style={TeamStyles.customerFeedback}>
                <Text>Customer Feedback</Text>
                <Text>{data.netradyne}</Text>
            </View>
        </View>
    </Card>
    )
}
export default TopThreeTeamEmployees