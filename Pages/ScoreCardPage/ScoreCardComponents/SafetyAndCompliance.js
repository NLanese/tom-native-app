import React from "react";
import { View, Text, ScrollView } from 'react-native'
import NavBar from "../../../Global/NavBar";
import EmployeeSafetyAndCompliance from "./InformationComponents/EmployeeSafetyAndCompliance";

const SafetyAndCompliance = () => {

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

    return(
        <View>
            <NavBar />
            <View>
                {renderTopThree(topThree)}
            </View>
        </View>
    )
}

export default SafetyAndCompliance