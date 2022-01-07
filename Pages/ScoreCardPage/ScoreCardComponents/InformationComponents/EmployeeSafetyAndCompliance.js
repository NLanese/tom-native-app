import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import { SafetyAndComplianceStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Title, Paragraph } from 'react-native-paper';



const EmployeeSafetyAndCompliance = ({driverData}) => {

    let data = {...driverData}

    if (data.fico == null){
        data.fico = 0
    }
    if (data.seatbelt_and_speeding == null){
        data.seatbelt_and_speeding = 0
    }
    if (data.netradyne == null){
        data.netradyne = 0
    }

    return(
        <Card style={SafetyAndComplianceStyles.topThreeEmployeeCard}>

        <View style={SafetyAndComplianceStyles.cardTop}>
            <View style={SafetyAndComplianceStyles.iconSpace}>
                <Text >Imagine an Icon was Here</Text>
                {/* Icon Here */}
            </View>
            <View style={SafetyAndComplianceStyles.nameSpace}>
                <Text style={SafetyAndComplianceStyles.employeeName}>{data.firstname} {data.lastname}</Text>
            </View>
        </View>
        <View style={SafetyAndComplianceStyles.cardBottm}>
            <View style={SafetyAndComplianceStyles.fico}>
                <Text>FICO</Text>
                <Text>{data.fico}</Text>
            </View>
            <View style={SafetyAndComplianceStyles.seatbeltAndSpeeding}>
                <Text>Seabelt and Speeding</Text>
                <Text>{data.seatbelt_and_speeding}</Text>
            </View>
            <View style={SafetyAndComplianceStyles.netradyne}>
                <Text>netradyne</Text>
                <Text>{data.netradyne}</Text>
            </View>
        </View>
    </Card>
    )
}
export default EmployeeSafetyAndCompliance