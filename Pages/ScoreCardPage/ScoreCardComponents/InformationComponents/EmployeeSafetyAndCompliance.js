import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { SafetyAndComplianceStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Avatar} from 'react-native-paper';
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'



const EmployeeSafetyAndCompliance = ({driverData, rank}) => {

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

    data.seatbelt_and_speeding = data.seatbelt_and_speeding * 0.01
    data.firstname = data.firstname[0] + data.firstname.slice(1).toLowerCase()
    data.lastname = data.lastname[0] + data.lastname.slice(1).toLowerCase()

    return(
        <Card style={SafetyAndComplianceStyles.topThreeEmployeeCard}>

        <View style={SafetyAndComplianceStyles.cardTop}>
            <View style={SafetyAndComplianceStyles.iconSpace}>
                  <Avatar.Image
                        source={SomeDudesFace}
                        size={80}
                    />
            </View>
            <View style={SafetyAndComplianceStyles.nameSpace}>
                <Text style={SafetyAndComplianceStyles.employeeName}>{data.firstname} {data.lastname}</Text>
            </View>
        </View>
        <View style={SafetyAndComplianceStyles.cardBottm}>
            <View style={SafetyAndComplianceStyles.fico}>
                <Text style={SafetyAndComplianceStyles.statTitle}>FICO</Text>
                <Text style={SafetyAndComplianceStyles.statValue}>{data.fico}</Text>
            </View>
            <View style={SafetyAndComplianceStyles.seatbeltAndSpeeding}>
                <Text style={SafetyAndComplianceStyles.statTitle}>Seatbelt and Speeding</Text>
                <Text style={SafetyAndComplianceStyles.statValue}>{data.seatbelt_and_speeding}</Text>
            </View>
            <View style={SafetyAndComplianceStyles.netradyne}>
                <Text style={SafetyAndComplianceStyles.statTitle}>Netradyne</Text>
                <Text style={SafetyAndComplianceStyles.statValue}>{data.netradyne}</Text>
            </View>

            <View style={SafetyAndComplianceStyles.topRank}>
                <Text style={{fontWeight: '800'}}>{rank}</Text>
            </View>

        </View>
    </Card>
    )
}
export default EmployeeSafetyAndCompliance