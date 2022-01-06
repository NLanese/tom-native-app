import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { QualityStyles } from '../../../Styles/ScoreCardStyles'
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import EmployeeQuality from "./InformationComponents/EmployeeQuality";
 


const Quality = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    const renderTopThree = (topThreeQualityDrivers) => {
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeQuality driverData={driverData} key={i} />
        })
    }

    if (!queryData[0]) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} />
            </View>
        )
    } else {
        let allData = [...queryData]
        let topThree = allData.splice(0, 3)
        let remainingEmployees = allData.splice(3, allData.length)
        
        return(
            <View style={QualityStyles.container}>
                <Text>Top Three Leaders</Text> 
                <View style={QualityStyles.topThree}>
                    {renderTopThree(topThree)}
                </View>
                <View style={QualityStyles.remainders}>
                </View>
            </View>

        )
    }
}

export default Quality