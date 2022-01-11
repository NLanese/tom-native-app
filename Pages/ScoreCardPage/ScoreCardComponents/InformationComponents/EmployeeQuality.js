import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Avatar } from 'react-native-paper';
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'



const EmployeeQuality = ({driverData}) => {

    let data = {...driverData}

    if (data.delivery_completion_rate == null){
        data.delivery_completion_rate = 0
    }
    if (data.delivered_and_recieved == null){
        data.delivered_and_recieved = 0
    }
    if (data.photo_on_delivery == null){
        data.photo_on_delivery = 0
    }
    if (data.call_compliance == null){
        data.call_compliance = 0
    }
    if (data.scan_compliance == null){
        data.scan_compliance = 0
    }

    return(
        <Card style={QualityStyles.topThreeEmployeeCard}>

            <View style={QualityStyles.cardTop}>
                <View style={QualityStyles.iconSpace}>
                    <Avatar.Image
                        source={SomeDudesFace}
                        size={64}
                    />
                </View>
                <View style={QualityStyles.nameSpace}>
                    <Text style={QualityStyles.employeeName}>{data.firstname} {data.lastname}</Text>
                </View>
            </View>
            <View style={QualityStyles.cardBottm}>
                <View style={QualityStyles.dcr}>
                    <Text style={QualityStyles.statTitle}>DCR</Text>
                    <Text style={QualityStyles.statValue}>{data.delivery_completion_rate}%</Text>
                </View>
                <View style={QualityStyles.dar}>
                    <Text style={QualityStyles.statTitle}>DAR</Text>
                    <Text style={QualityStyles.statValue}>{data.delivered_and_recieved}</Text>
                </View>
                <View style={QualityStyles.pod}>
                    <Text style={QualityStyles.statTitle}>POD</Text>
                    <Text style={QualityStyles.statValue}>{data.photo_on_delivery}</Text>
                </View>
                <View style={QualityStyles.callCompliance}>
                    <Text style={QualityStyles.statTitle}>Call Compliance</Text>
                    <Text style={QualityStyles.statValue}>{data.call_compliance}%</Text>
                </View>
                <View style={QualityStyles.scanCompliance}>
                    <Text style={QualityStyles.statTitle}>Scan Compliance</Text>
                    <Text style={QualityStyles.statValue}>{data.scan_compliance}%</Text>
                </View>
            </View>

        </Card>
    )
}
export default EmployeeQuality