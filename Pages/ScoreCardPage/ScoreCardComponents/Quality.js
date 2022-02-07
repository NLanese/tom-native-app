import React, { useState } from "react";
import { View, Text, ScrollView } from 'react-native'
import { useRecoilState } from "recoil";
import { userState } from "../../../Recoil/atoms";
import { useQuery } from "@apollo/client";
import { DRIVERSGETDRIVERSFROMDSP } from "../../../GraphQL/operations";
import { QualityStyles } from '../../../Styles/ScoreCardStyles'
import { SortingStyles } from "../../../Styles/ScoreCardStyles";
import { ActivityIndicator } from "react-native-paper";
import EmployeeQuality from "./InformationComponents/EmployeeQuality";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import Banner from "../../../Global/Banner";
import SortbyButton from "./ButtonboxComponents/SortByButton";
import Loading from "../../../Global/Loading";

const Quality = () => {

    const {loading: loading, error: error, data: queryData} = useQuery(DRIVERSGETDRIVERSFROMDSP)
    const [user, setUser] = useRecoilState(userState)
    const [sortBy, setSortBy] = useState("FICO")
    const [dropVisibility, setDropVisibility] = useState(false)

    // Sets up the DSP Limits
    const ficoLims = user.dsp.ficoLimits
    const seatbeltLims = user.dsp.seatbeltLimits
    const speedingLims = user.dsp.speedingLimits
    const distractionLims = user.dsp.distractionLimits
    const followLims = user.dsp.followLimits
    const signalLims = user.dsp.signalLimits
    const dcrLims = user.dsp.deliveryCompletionRateLimits
    const scanLims = user.dsp.scanComplianceLimits
    const cdfLims = user.dsp.customerDeliveryFeedbackLimits
    const dspPreferences = {
        fico: ficoLims,
        seatbelt: seatbeltLims,
        speeding: speedingLims,
        distraction: distractionLims,
        follow: followLims,
        signal: signalLims,
        dcr: dcrLims,
        scan_compliance: scanLims,
        cdf: cdfLims
    }

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
    
    // Runs after query is recieved completely REPAIR
    
    // useEffect(() => {
    //     if (!loading && data) {
    //         setQueryData(data.getDriversForScorecardQuality)
    //     }
    // }, [data])


    // Takes DSP Preferences and renders x amount of top cards, stopping at y cards total
    // allDrivers = array of drivers
    // topNum is the top amount of cards
    // stopAt is the limit of how many cards you will allow to render. if top cards = 2 and small = 5, stop at = 7.
    const renderTopAndOthers = (allDriversRaw, topNum=3, stopAt) => {
        let allDrivers = [...allDriversRaw.driverGetDriversFromDsp.drivers]
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
                    {allDrivers.slice(topNum, (stopAt)).map( (driver) => {
                        i++
                        return <TeamEmployees driverData={driver} key={i} rank={i} />
                    })}
                </View>
        )
        return (
            <View style={QualityStyles.container}>
                {topCards}
                {otherCards}
            </View>
        )
    }

    const handleDropDownClick = () => {
        console.log("hit")
        setDropVisibility(!dropVisibility)
    }

    // If the data is not yet loaded
    if (loading) {
        return (
            <Loading />
        )
    } 
    // If the data IS loaded
    else {
        return(
            <View style={{flex: 0, backgroundColor: "#eaeaea"}}>
                <Banner />
                <View style={SortingStyles.sortByContainer}>
                    <SortbyButton dropVisibility={dropVisibility} handleDropDownClick={handleDropDownClick} sortBy={sortBy} setSortBy={setSortBy}/>
                </View>
                <View style={QualityStyles.titleBox}>
                    <Text style={QualityStyles.mainTitle}>Scorecard</Text>
                    <Text style={QualityStyles.subTitle}>Leaderboard</Text>
                </View>
                <ScrollView bounces={false} style={QualityStyles.listContainer}>
                    {renderTopAndOthers(queryData, user.dsp.topCardLimits, (user.dsp.smallCardLimits + user.dsp.topCardLimits))}
                </ScrollView>
            </View>
        )
    }
}

export default Quality