import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { SafetyAndComplianceStyles } from '../../../Styles/ScoreCardStyles'
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
 


const Quality = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    function renderTopThree(topThreeQualityDrivers){
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeSafetyAndCompliance driverData={driverData} rank={i} />
        })
    }

    if (!queryData[0]) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} />
            </View>
        )
    } else {
        let topThree = [queryData[0], queryData[1], queryData[2]]
        
        return(
            <View style={SafetyAndComplianceStyles.container}>
                <Text>Top Three Leaders</Text> 
                <View style={SafetyAndComplianceStyles.topThree}>
                    {renderTopThree(topThree)}
                </View>
                <View style={SafetyAndComplianceStyles.remainders}>
                </View>
            </View>

        )
    }
}

export default Quality