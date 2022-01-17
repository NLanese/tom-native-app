import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, } from 'react-native'
import { useQuery } from "@apollo/client";
import { QualityStyles } from '../../../Styles/ScoreCardStyles'
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import EmployeeQuality from "./InformationComponents/EmployeeQuality";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import Banner from "../../../Global/Banner";

const Quality = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    const [queryData, setQueryData] = useState({})
    // query for dsp preferences


    const fakeDspPreferences = ({
        topCards: 5,
        stopAt: 20
    })

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    const renderTopAndOthers = (allDrivers, topNum=3, stopAt) => {
        let i = 0
        const topCards = (
            <View style={QualityStyles.topThree}>
                {allDrivers.slice(0, topNum).map( (driver) => {
                    i++
                    return <EmployeeQuality driverData={driver} key={i} rank={i} />
                })}
            </View>
        )
        const otherCards =(
                <View>
                    {allDrivers.slice(topNum, (stopAt - topNum)).map( (driver) => {
                        i++
                        return <TeamEmployees driverData={driver} key={i} rank={i} />
                    })}
                </View>
        )
        return (
            <View style={QualityStyles.container}>
                <View style={{width: '100%'}}>
                    <Text style={QualityStyles.leadersTitle}>Top {topNum} Leaders</Text>
                </View> 
                {topCards}
                <View style={{width: '100%'}}>
                    <Text style={QualityStyles.leadersTitle}>Employees</Text>
                </View> 
                {otherCards}
            </View>
        )
    }

    if (!queryData[0]) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} />
            </View>
        )
    } else {
        return(
            <View style={{flex: 0, backgroundColor: "#f9f9f9"}}>
            <Banner />

            <ScrollView bounces={false}>
                {renderTopAndOthers(queryData, fakeDspPreferences.topCards, fakeDspPreferences.stopAt)}
            </ScrollView>
            </View>
        )
    }
}

export default Quality