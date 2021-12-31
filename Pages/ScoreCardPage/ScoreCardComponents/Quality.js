import React from "react";
import { View, Text, ScrollView } from 'react-native'
import NavBar from "../../../Global/NavBar";


const Quality = () => {

    function renderTopThree(topThreeQualityDrivers){
        let i = 0
        return topThreeQualityDrivers.map( (driverData) => {
            i++
            return <EmployeeSafetyAndCompliance driverData={driverData} rank={i} />
        })
    }

    return(
        <View>
            <NavBar />
        </View>
    )
}

export default Quality