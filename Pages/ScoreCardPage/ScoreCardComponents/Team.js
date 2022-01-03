import React from "react";
import { View, Text, ScrollView } from 'react-native'
import NavBar from "../../../Global/NavBar";
import TeamEmployees from "./InformationComponents/TeamEmployee";
import TopThreeTeamEmployees from "./InformationComponents/TopThreeTeamEmployee";

const Team = () => {

    function sortTeamEmployees(teamEmployees){
        //sort the array
        //split the array into two. New array will look like...
            // [ [top, three, teamEmployees], [other, teamEmployees]]
            return [ [1, 2, 3], [4, 5, 6]]
    }

    let topThreeAndOthers = sortTeamEmployees()

    function renderTeamEmployees(topThreeAndOthers, arr){
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

    return(
        <View>
            <Text>Team</Text>
            <View>
                {renderTeamEmployees(topThreeAndOthers, 0)}
            </View>
            <View>
                {renderTeamEmployees(topThreeAndOthers, 0)}
            </View>
        </View>

    )
}
export default Team