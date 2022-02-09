import React from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { QualityStyles } from "../../../../Styles/ScoreCardStyles";
import { Card, Avatar } from 'react-native-paper';
import SomeDudesFace from '../../../../assets/SomeDudesFace.jpeg'
import colorTextBasedOnValue from "../../../../Hooks/colorTextBasedOffValue";
import BottomCard from "./BottomCard";
import { LinearGradient } from 'expo-linear-gradient'





const EmployeeQuality = ({driverData, sortBy, rank}) => {

    let data = {...driverData}

    if (data.deliveryCompletionRate == null){
        data.deliveryCompletionRate = 0
    }
    if (data.deliveredAndRecieved == null){
        data.deliveredAndRecieved = 0
    }
    if (data.photoOnDelivery == null){
        data.photoOnDelivery = 0
    }
    if (data.callCompliance == null){
        data.callCompliance = 0
    }
    if (data.scanCompliance == null){
        data.scanCompliance = 0
    }

    data.firstname = data.firstname[0] + data.firstname.slice(1).toLowerCase()
    data.lastname = data.lastname[0] + data.lastname.slice(1).toLowerCase()


    return(
        <Card style={QualityStyles.topThreeEmployeeCard}>

            <View style={QualityStyles.cardTop}>
                <View style={QualityStyles.iconSpace}>
                    <Avatar.Image
                        source={SomeDudesFace}
                        size={45}
                    />
                </View>
                <View style={QualityStyles.topRank}>
                    <View style={QualityStyles.gradient}>
                        <LinearGradient pointerEvents={"none"} start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#15A1F1', '#534FFF']} style={{height: '100%', width: '100%', borderRadius: 22}} /> 
                    </View>
                    <View style={QualityStyles.gradientCover}>
                        <View style={QualityStyles.rankPos}><Text style={{fontFamily: "GilroyMedium", color: '#534FFF', fontSize: 24, textAlign: 'center'}}>{rank}</Text></View>
                    </View>
                </View>
                <View style={QualityStyles.nameSpace}>
                    <Text style={QualityStyles.employeeName}>{data.firstname} {data.lastname}</Text>
                </View>
            </View>

            <View style={QualityStyles.cardBottm}>
                <BottomCard sortBy={sortBy} rawData={data.weeklyReport} />
            </View>

        </Card>
    )
}
export default EmployeeQuality
