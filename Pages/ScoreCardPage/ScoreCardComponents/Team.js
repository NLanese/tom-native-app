import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import { GETDRIVERSFORDSPFORTEAM } from "../../../GraphQL/operations";
import { useQuery } from "@apollo/client";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import TopThreeTeamEmployees from "./InformationComponents/TopThreeTeamEmployee";

const Team = () => {
    const { loading, error, data, refetch } = useQuery(GETDRIVERSFORDSPFORTEAM)
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (!loading && data) {
            setQueryData(data.getDriversForDspForTeam)
        }
    }, [data])

    console.log(queryData)

    const sortTeamEmployees = (teamEmployees) => {
        //sort the array
        //split the array into two. New array will look like...
            // [ [top, three, teamEmployees], [other, teamEmployees]]
            return [ [1, 2, 3], [4, 5, 6]]
    }

    let topThreeAndOthers = sortTeamEmployees()

    const renderTeamEmployees = (topThreeAndOthers, arr) => {
        let component = null
        let i = 1
        return topThreeAndOthers[index].map( (driver) => {
            if (arr = 0){
                component = <TopThreeTeamEmployees driverData={driver} rank={i}/>
            }
            else {
                component = <TeamEmployees driverData={dirver} rank={i}/>
            }
            i++
            return(
                component
            )
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
                <Text>Team</Text>
                <View>
                    {/* {renderTeamEmployees(topThreeAndOthers, 0)} */}
                </View>
                <View>
                    {/* {renderTeamEmployees(topThreeAndOthers, 0)} */}
                </View>
            </View>
    
        )
    }

}
export default Team