import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Title, Paragraph } from 'react-native-paper';


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

            <View>
                <View>
                    <Text>{data.firstname} {data.lastname}</Text>
                </View>
                <View>
                    <Text>Imagine an Icon was Here</Text>
                    {/* Icon Here */}
                </View>
            </View>
            <View>
                <Text>DCR</Text>
                <Text>{data.delivery_completion_rate}</Text>
            </View>
            <View>
                <Text>DAR</Text>
                <Text>{data.delivered_and_recieved}</Text>
            </View>
            <View>
                <Text>POD</Text>
                <Text>{data.photo_on_delivery}</Text>
            </View>
            <View>
                <Text>Call Compliance</Text>
                <Text>{data.call_compliance}</Text>
            </View>
            <View>
                <Text>Scan Compliance</Text>
                <Text>{data.scan_compliance}</Text>
            </View>

        </Card>
    )
}
export default EmployeeQuality