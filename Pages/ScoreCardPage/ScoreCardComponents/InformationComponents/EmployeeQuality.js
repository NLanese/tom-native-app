import React from "react";
import { View, Text, ScrollView } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles";

const EmployeeQuality = ({driverData}) => {

    if (driverData.delivery_completion_rate == null){
        driverData.delivery_completion_rate = 0
    }
    if (driverData.delivered_and_recieved == null){
        driverData.delivered_and_recieved = 0
    }
    if (driverData.photo_on_delivery == null){
        driverData.photo_on_delivery = 0
    }
    if (driverData.call_compliance == null){
        driverData.call_compliance = 0
    }
    if (driverData.scan_compliance == null){
        driverData.scan_compliance = 0
    }

    return(
        <View style={QualityStyles.topThreeEmployeeCard}>

            <View>
                <View>
                    <Text>{driverData.firstname} {driverData.lastname}</Text>
                </View>
                <View>
                    <Text>Imagine an Icon was Here</Text>
                    {/* Icon Here */}
                </View>
            </View>
            <View>
                <Text>DCR</Text>
                <Text>{driverData.delivery_completion_rate}</Text>
            </View>
            <View>
                <Text>DAR</Text>
                <Text>{driverData.delivered_and_recieved}</Text>
            </View>
            <View>
                <Text>POD</Text>
                <Text>{driverData.photo_on_delivery}</Text>
            </View>
            <View>
                <Text>Call Compliance</Text>
                <Text>{driverData.call_compliance}</Text>
            </View>
            <View>
                <Text>Scan Compliance</Text>
                <Text>{driverData.scan_compliance}</Text>
            </View>

        </View>
    )
}
export default EmployeeQuality