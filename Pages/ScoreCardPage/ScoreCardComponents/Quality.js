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

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    function determineTopThree(data){
        let returnData = [...data]
        return returnData.splice(0, 3)
    } 
    function determineOthers(data){
        let returnData = [...data]
        return returnData.splice(3)
    } 

    const renderTopThree = (topThreeQualityDrivers) => {
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeQuality driverData={driverData} key={i} rank={i}/>
        })
    }

    const renderOthers = (otherEmployees) => {
        let i = 3
        return otherEmployees.map( (driverData) => {
            i++
            return <TeamEmployees driverData={driverData} key={i} rank={i} />
        })
    }

    if (!queryData[0]) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} />
            </View>
        )
    } else {
        
        let topThree = determineTopThree(queryData)
        let others = determineOthers(queryData)

        return(
            <View style={{flex: 0, backgroundColor: "#f9f9f9"}}>
            <Banner />

            <ScrollView bounces={false}>
            <View style={QualityStyles.container}>
                <View style={{width: '100%'}}>
                    <Text style={QualityStyles.leadersTitle}>Top Three Leaders</Text>
                </View> 
                <View style={QualityStyles.topThree}>
                    {renderTopThree(topThree)}
                </View>
                <View style={{width: '100%'}}>
                    <Text style={QualityStyles.leadersTitle}>Employees</Text>
                </View> 
                <View style={QualityStyles.remainders}>
                    {renderOthers(others)}            
                </View>
            </View>
            </ScrollView>
            </View>
        )
    }
}

export default Quality