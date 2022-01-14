import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, } from 'react-native'
import { useQuery } from "@apollo/client";
import dateObj from "../../../Hooks/handleDateTime";
import { PersonalLeaderboardStyles } from "../../../Styles/ScoreCardStyles";
import nameObj from '../../../Hooks/handleNameCaseChange'

const PersonalScoreCard = () => {

    const fakeQuery = {
        "data": {
          "getDriver": {
            "fico": null,
            "firstname": "DWYANE",
            "lastname": "WADE",
            "createdAt": "2022-01-12T19:23:14.022Z",
            "seatbelt": null,
            "speeding": 
            "distractions_rate": null,
            "following_distance_rate": null,
            "signal_violations_rate": null,
            "delivery_completion_rate": null,
            "photo_on_delivery": null,
            "scan_compliance": null,
            "call_compliance": null,
            "netradyne": null,
            "defects": null,
            "customer_delivery_feedback": null,
            "delivered_and_recieved": null,
            "attended_delivery_accuracy": null,
            "dnr": null
          }
        }
    }

    const fakeUser = fakeQuery.data.getDriver


    return(
        <View style={PersonalLeaderboardStyles.container}>
            <View style={PersonalLeaderboardStyles.namePlate}>
                <View style={PersonalLeaderboardStyles.nametag}>
                    <Text style={PersonalLeaderboardStyles.nameText}>{nameObj(fakeUser.firstname).first} {nameObj(fakeUser.lastname).last}</Text>
                </View>
                <View style={PersonalLeaderboardStyles.createdAt}>
                    <Text style={PersonalLeaderboardStyles.createdAtText}>Driving Since {dateObj(fakeUser.createdAt).month} /  {dateObj(fakeUser.createdAt).day}  {dateObj(fakeUser.createdAt).year}</Text>
                </View>
            </View>
            <View style={PersonalLeaderboardStyles.statsheet}>
                <View style={PersonalLeaderboardStyles.drivingStats}>
                    <View style={PersonalLeaderboardStyles.seatAndSpeed}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Seatbelt/Speedings</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PersonalScoreCard