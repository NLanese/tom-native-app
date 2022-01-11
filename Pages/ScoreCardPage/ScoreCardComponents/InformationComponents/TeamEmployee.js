import React from "react";
import { View, Text,  } from 'react-native'
import { Card } from 'react-native-paper';
import { TeamStyles } from "../../../../Styles/ScoreCardStyles";

const TeamEmployees = ({driverData, rank}) => {
    return(
        <Card style={TeamStyles.employeeCard}>
            <View style={TeamStyles.rank}>
                <Text style={{fontWeight: '800'}}>{rank}</Text>
            </View>
            <View style={TeamStyles.employeeNameplate}>
                <Text style={TeamStyles.employeeNameTag}>{driverData.firstname} {driverData.lastname}</Text>
            </View>
        </Card>
    )
}
export default TeamEmployees