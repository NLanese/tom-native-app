import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { GETDRIVERSFORDPSFORSAFETYANDCOMPLIANCE } from "../../../GraphQL/operations";
 
import EmployeeSafetyAndCompliance from "./InformationComponents/EmployeeSafetyAndCompliance";

const SafetyAndCompliance = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORDPSFORSAFETYANDCOMPLIANCE)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForDspForSafetyAndCompliance)
        }
    }, [data])

    console.log(queryData)
    
    // some function to go through all drivers and determine the top three
    // Employee Safety Ratings. It will then return one <EmployeeSafetyAndCompliance />
    // component for each

    let topThree = [{key: 1}, {key: 2}, {key: 3}]

    function renderTopThree(topThreeSafetyAndComplianceDrivers){
        let i = 0
        return topThreeSafetyAndComplianceDrivers.map( (driverData) => {
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
                <View>
                    <Text>Safety and Compliance</Text>
                    {renderTopThree(topThree)}
                </View>
            </View>
        )
    }
}

export default SafetyAndCompliance