import React from "react";
import { View, Text,  } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper';
import { TeamStyles } from "../../../../Styles/ScoreCardStyles";

const TeamEmployees = ({driverData, rank}) => {
    return(
        <Card style={TeamStyles.employeeCard}>
            <View style={TeamStyles.rank}>
                <Text>{rank}</Text>
            </View>
            <View style={TeamStyles.employeeNameplate}>
                <Text>{driverData.firstname} {driverData.lastname}</Text>
            </View>
        </Card>
    )
}
export default TeamEmployees