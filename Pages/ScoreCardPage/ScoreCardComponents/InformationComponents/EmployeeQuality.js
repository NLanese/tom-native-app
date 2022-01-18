import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Avatar } from 'react-native-paper';
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'
import colorTextBasedOnValue from "../../../../Hooks/colorTextBasedOffValue";
import BottomCard from "./BottomCard";


const dspPreferences = ({
    topCards: 5,
    stopAt: 20,
    fico: {fantastic: 800, good: 700, fair: 600},
    seatbelt: {fantastic: 0.05, good: 0.15, fair: 0.3},
    speeding: {fantastic: 0.05, good: .15, fair: 0.3},
    distraction: {fantastic: 0.05, good: .15, fair: 0.3},
    follow: {fantastic: 0.05, good: .15, fair: 0.3},
    signal: {fantastic: 0.05, good: .15, fair: 0.3},
    dcr: {fantastic: 95, good: 90, fair: 80},
    dar: {fantastic: 95, good: 90, fair: 80},
    pod: {fantastic: 95, good: 90, fair: 80},
    scan_compliance: {fantastic: 95, good: 90, fair: 85},
    call_compliance: {fantastic: 95, good: 90, fair: 85},
})

const textColors = {
    fantastic: '#116530',
    good: '#21B6A8',
    fair: '#FF8300',
    subpar: '#BA0F30'
}



const EmployeeQuality = ({driverData, sortBy, rank}) => {

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

    data.firstname = data.firstname[0] + data.firstname.slice(1).toLowerCase()
    data.lastname = data.lastname[0] + data.lastname.slice(1).toLowerCase()

    return(
        <Card style={QualityStyles.topThreeEmployeeCard}>

            <View style={QualityStyles.cardTop}>
                <View style={QualityStyles.iconSpace}>
                    <Avatar.Image
                        source={SomeDudesFace}
                        size={80}
                    />
                </View>
                <View style={QualityStyles.nameSpace}>
                    <Text style={QualityStyles.employeeName}>{data.firstname} {data.lastname}</Text>
                </View>
            </View>
            <View style={QualityStyles.cardBottm}>
                <BottomCard sortBy={sortBy} data={data} />
                <View style={QualityStyles.topRank}>
                    <Text style={{fontWeight: '800'}}>{rank}</Text>
                </View>

            </View>

        </Card>
    )
}
export default EmployeeQuality

const localStyles = (value, valName, startAtTop) => StyleSheet.create({
    statValue:{
        marginTop: 3,
		fontWeight: '600',
		fontSize: 16,
        // color: colorTextBasedOnValue(value, valName, startAtTop, dspPreferences, textColors)
    }
})