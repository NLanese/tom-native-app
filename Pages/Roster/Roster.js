import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import { useQuery } from "@apollo/client";
import { DRIVERSGETDRIVERSFROMDSP } from "../../GraphQL/operations";
import Banner from "../../Global/Banner";
import Loading from "../../Global/Loading";
import { RosterStyles } from "../../Styles/RosterStyles";
import nameObj from "../../Hooks/handleNameCaseChange";
import dateObj from "../../Hooks/handleDateTime";
import { useRecoilState } from 'recoil'
import { userState } from "../../Recoil/atoms";

const Roster = ({contacts}) => {
    const {loading: loading, error: error, data: queryData} = useQuery(DRIVERSGETDRIVERSFROMDSP)
    const [user, setUser] = useRecoilState(userState);

    
    const renderRoster = (list) => {
        let i = 0
        return list.map( (driver) => {
            i++
            const namer = nameObj(driver.firstname, driver.lastname)
            const date = dateObj(driver.createdAt, user.dsp.timezone)
            return(
                <View style={RosterStyles.card} key={i}>
                    <View><Text>Image</Text></View>
                    <View style={RosterStyles.nameView}><Text style={RosterStyles.title}>{namer.first} {namer.last} </Text></View>
                    <View style={RosterStyles.dateView}><Text style={RosterStyles.subtitle}>Driving Since {date.month}-{date.day} {date.year}</Text></View>
                    <View style={RosterStyles.divider} />
                </View>
            )
        })
    }

    if (!loading && queryData){
        let allDrivers = [...queryData.driverGetDriversFromDsp.drivers]
        return (
            <View>
                <Banner />
                <ScrollView contentContainerStyle={RosterStyles.container}>
                {renderRoster(allDrivers)}
            </ScrollView>
            </View>
        )
    }
    else{
        return(
            <Loading />
        )
    }
}
export default Roster