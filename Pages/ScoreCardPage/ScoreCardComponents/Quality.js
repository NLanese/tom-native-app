import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
 


const Quality = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    console.log(queryData)

    function renderTopThree(topThreeQualityDrivers){
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeSafetyAndCompliance driverData={driverData} rank={i} />
        })
    }

    if (!queryData[0]) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    } else {
        return(
            <View>
                <Text>Quality</Text>
            </View>
    
        )
    }
}

export default Quality