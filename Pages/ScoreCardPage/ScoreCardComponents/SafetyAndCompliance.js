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

    

    if (!queryData[0]) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    } else {
        return(
            <View>
                {queryData.map((driver) => {
                    console.log(driver)
                    
                    return (
                        <View>
                        
                            <View>
                                <Text>{driver.email}</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}

export default SafetyAndCompliance