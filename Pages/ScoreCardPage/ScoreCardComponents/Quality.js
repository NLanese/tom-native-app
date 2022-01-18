import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useQuery } from "@apollo/client";
import { QualityStyles } from '../../../Styles/ScoreCardStyles'
import { SortingStyles } from "../../../Styles/ScoreCardStyles";
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
import { ActivityIndicator } from "react-native-paper";
import EmployeeQuality from "./InformationComponents/EmployeeQuality";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import Banner from "../../../Global/Banner";
import SortbyButton from "./ButtonboxComponents/SortByButton";

const Quality = () => {

    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    // Add a Query for DSP PReferences
    const [queryData, setQueryData] = useState({})
    const [sortBy, setSortBy] = useState("FICO")
    const [dropVisibility, setDropVisibility] = useState(false)


    const fakeDspPreferences = ({
        topCards: 30,
        stopAt: 20,
        fico: {fantastic: 800, good: 700, fair: 600},
        seatbelt: {fantastic: 0.05, good: 0.15, fair: 0.3},
        speeding: {fantastic: 0.05, good: .15, fair: 0.3},
        distraction: {fantastic: 0.05, good: .15, fair: 0.3},
        follow: {fantastic: 0.05, good: .15, fair: 0.3},
        signal: {fantastic: 0.05, good: .15, fair: 0.3},
        dcr: {fantastic: 95, good: 90, fair: 80},
        scan_compliance: {fantastic: 95, good: 90, fair: 85},
    })
    

    // Returns all of the drivers sorted by a specific parameter
    const returnSortedList = (allDrivers, sortBy) => {
        if (sortBy == 'fico' || sortBy == 'scanCompliance' || sortBy == 'deliveries' || sortBy == 'customerDeliveryFeedback' || 'deliveryCompletionRate'){
            return allDrivers.sort( (a, b) => {
                b[sortBy] - a[sortBy]
            } )
        }
        else{
            return allDrivers.sort( (a, b) => {
                b[sortBy] - a[sortBy]
            } )
        }
    }
    
    // Runs after query is recieved completely
    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForScorecardQuality)
        }
    }, [data])

    // Takes DSP Preferences and renders x amount of top cards, stopping at y cards total
    // allDrivers = array of drivers
    // topNum is the top amount of cards
    // stopAt is the limit of how many cards you will allow to render
    const renderTopAndOthers = (allDrivers, topNum=3, stopAt) => {
        let i = 0
        const topCards = (
            <View style={QualityStyles.topThree}>
                {allDrivers.slice(0, topNum).map( (driver) => {
                    i++
                    return <EmployeeQuality driverData={driver} sortBy={sortBy} key={i} rank={i} />
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

    const handleDropDownClick = () => {
        setDropVisibility(!dropVisibility)
    }

    // If the data is not yet loaded
    if (!queryData[0]) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
                <ActivityIndicator animating={true} size='large' color={'#570de4'} />
            </View>
        )
    } 
    // If the data IS loaded
    else {
        return(
            <View style={{flex: 0, backgroundColor: "#f9f9f9"}}>
                <Banner />
                <View style={SortingStyles.sortBy}>
                    <SortbyButton dropVisibility={dropVisibility} handleDropDownClick={handleDropDownClick} sortBy={sortBy} setSortBy={setSortBy}/>
                </View>
                <ScrollView bounces={false}>
                    {renderTopAndOthers(queryData, fakeDspPreferences.topCards, fakeDspPreferences.stopAt)}
                </ScrollView>
            </View>
        )
    }
}

export default Quality