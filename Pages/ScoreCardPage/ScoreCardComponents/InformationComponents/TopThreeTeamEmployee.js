import React from "react";
import { View, Text } from 'react-native'
import { Card, Avatar } from 'react-native-paper';
import { TeamStyles } from "../../../../Styles/ScoreCardStyles";
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'


const TopThreeTeamEmployees = ({driverData, rank}) => {

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
        data.customer_delivery_feedback = "No Reviews"
    }

    data.firstname = data.firstname[0] + data.firstname.slice(1).toLowerCase()
    data.lastname = data.lastname[0] + data.lastname.slice(1).toLowerCase()

    return(
        <Card style={TeamStyles.topThreeEmployeeCard}>

        <View style={TeamStyles.cardTop}>
            <View style={TeamStyles.iconSpace}>
            <Avatar.Image
                source={SomeDudesFace}
                size={80}
              />
            </View>
            <View style={TeamStyles.nameSpace}>
                <Text style={TeamStyles.employeeName}>{data.firstname} {data.lastname}</Text>
            </View>
        </View>
        <View style={TeamStyles.cardBottm}>
            <View style={{
                width: '25%',
                height: '100%',
                borderBottomLeftRadius: 3,
                backgroundColor: color,
            }}>

            </View>
            <View style={TeamStyles.defect}>
                <Text style={TeamStyles.statTitle}>Defects</Text>
                <Text style={TeamStyles.statValue}>{data.defects}</Text>
            </View>
            <View style={TeamStyles.customerFeedback}>
                <Text style={TeamStyles.statTitle}>Customer Feedback</Text>
                <Text style={TeamStyles.statValue}>{data.customer_delivery_feedback}</Text>
            </View>
            <View style={TeamStyles.topRank}>
                <Text style={{fontWeight: '800'}}>{rank}</Text>
            </View>
        </View>
    </Card>
    )
}
export default TopThreeTeamEmployees