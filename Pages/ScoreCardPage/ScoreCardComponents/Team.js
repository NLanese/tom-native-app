import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from 'react-native'
import { GETDRIVERSFORDSPFORTEAM } from "../../../GraphQL/operations";
import { useQuery } from "@apollo/client";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import TopThreeTeamEmployees from "./InformationComponents/TopThreeTeamEmployee";
import { ActivityIndicator } from "react-native-paper";
import { TeamStyles } from "../../../Styles/ScoreCardStyles";
import Banner from "../../../Global/Banner";

const Team = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORDSPFORTEAM)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForDspForTeam)
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

    const renderTopThree = (topThreeTeam) => {
        let i = 0
        return topThreeTeam.map( (driverData) => {
            i++
            return <TopThreeTeamEmployees driverData={driverData} key={i} rank={i} />
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
            <View style={TeamStyles.container}>
                <View style={{width: '100%'}}>
                    <Text style={TeamStyles.leadersTitle}>Top Three Leaders</Text>
                </View> 
                <View style={TeamStyles.topThree}>
                    {renderTopThree(topThree)}
                </View>
                <View style={{width: '100%'}}>
                    <Text style={TeamStyles.leadersTitle}>Employees</Text>
                </View> 
                <View contentContainerStyle={TeamStyles.remainders}>
                        <View>{renderOthers(others)}</View>
                </View>
            </View>
            </ScrollView>
            </View>
    
        )
    }

}
export default Team