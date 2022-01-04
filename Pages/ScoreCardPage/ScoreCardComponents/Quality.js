import React from "react";
import { View, Text, ScrollView } from 'react-native'
 


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
            
            <Text>Quality Page</Text>
        </View>
    )
}

export default Quality