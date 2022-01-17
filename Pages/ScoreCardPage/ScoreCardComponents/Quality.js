import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native'
import { useQuery } from "@apollo/client";
import { QualityStyles } from '../../../Styles/ScoreCardStyles'
import { GETDRIVERSFORSCORECARDQUALITY } from "../../../GraphQL/operations";
import { ActivityIndicator, Icon, Button} from "react-native-paper";
import EmployeeQuality from "./InformationComponents/EmployeeQuality";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import Banner from "../../../Global/Banner";
import colorTextBasedOnValue from "../../../Hooks/colorTextBasedOffValue";

const Quality = () => {

    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORSCORECARDQUALITY)
    // Query for DSP PReferences

    const [queryData, setQueryData] = useState({})
    const [sortBy, setSortBy] = useState("fico")


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
    
    const textColors = {
        fantastic: '#116530',
        good: '#21B6A8',
        fair: '#FF8300',
        subpar: '#BA0F30'
    }

    const returnSortedList = (allDrivers, sortBy) => {
        if (sortBy == 'fico' || sortBy == 'scan_compliance' || sortBy == 'deliveries' || sortBy == 'customer_delivery_feedback' || 'delivery_completion_rate'){
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
                <View style={QualityStyles.sortBy}>
                    <Text style={QualityStyles.sortText}>Sort By</Text>
                    <TouchableWithoutFeedback >
                        <View style={QualityStyles.sortByButton}>
                            <Text style={{fontSize: 16}}>{sortBy}</Text>
                            <Button style={QualityStyles.dropArrowBox} icon='arrow-down-bold-box-outline' color='black' size={50}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView bounces={false}>
                    {renderTopAndOthers(queryData, fakeDspPreferences.topCards, fakeDspPreferences.stopAt)}
                </ScrollView>
            </View>
        )
    }
}

export default Quality