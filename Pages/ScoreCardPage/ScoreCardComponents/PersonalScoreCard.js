import React, { useEffect, useState, useRef } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useQuery } from "@apollo/client";
import dateObj from "../../../Hooks/handleDateTime";
import nameObj from '../../../Hooks/handleNameCaseChange'
import colorTextBasedOnValue from "../../../Hooks/colorTextBasedOffValue";
import Banner from "../../../Global/Banner";
import { PersonalLeaderboardStyles } from "../../../Styles/ScoreCardStyles";

const PersonalScoreCard = () => {

    const fakeQuery = {
        "data": {
          "getDriver": {
            "fico": null,
            "firstname": "DWYANE",
            "lastname": "WADE",
            "createdAt": "2022-01-12T19:23:14.022Z",
            "seatbelt": "0.02",                           // good
            "speeding": "0.42",                           // good
            "distractions_rate": "0.17",                  // good
            "following_distance_rate": "0.06",            // good
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

    const userData = fakeUser

    const names = {...nameObj(fakeUser.firstname, fakeUser.lastname)}

    return(
        <View>
        <Banner />
        <View style={PersonalLeaderboardStyles.scoreContainer}>
            <View style={PersonalLeaderboardStyles.namePlate}>
                <View style={PersonalLeaderboardStyles.nametag}>
                    <Text style={PersonalLeaderboardStyles.nameText}>{names.first} {names.last}</Text>
                </View>
                <View style={PersonalLeaderboardStyles.createdAt}>
                    <Text style={PersonalLeaderboardStyles.createdAtText}>Driving Since             {dateObj(fakeUser.createdAt).month}-{dateObj(fakeUser.createdAt).day}  {dateObj(fakeUser.createdAt).year}</Text>
                </View>
            </View>
            <View style={PersonalLeaderboardStyles.statsheet}>
                <View style={PersonalLeaderboardStyles.drivingStats}>
                    <Text style={PersonalLeaderboardStyles.sectionTitle}>Driving and Safety Statisticss</Text>
                    {/* <View style={{borderWidth: 2, borderColor: '#E2E8F1', width: '80%', marginLeft: '10%'}} /> */}
                    <View>
                        <View style={PersonalLeaderboardStyles.seatbeltLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Seatbelt Off</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.seatbeltValue}>
                            <Text style={Styles(userData.seatbelt, 'seatbelt', false).coloredLabel}>{fakeUser.seatbelt}</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.speedingLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Speedings</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.speedingValue}>
                            <Text style={Styles(userData.speeding, 'speeding', false).coloredLabel}>{fakeUser.speeding}</Text>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.distractionLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Distracted</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.distractionValue}>
                        <Text style={Styles(userData.distractions_rate, 'distraction', false).coloredLabel}>{fakeUser.distractions_rate}</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.followingLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Close Follows</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.followValue}>
                        <Text style={Styles(userData.following_distance_rate, 'follow', false).coloredLabel}>{fakeUser.following_distance_rate}</Text>
                    </View>
                </View>
            </View>
        </View>
        </View>
    )
}

const dspPreferences = {
    ficoScores: {fantastic: 800, good: 700, fair: 600},
    seatbelt: {fantastic: 0.05, good: 0.15, fair: 0.3},
    speeding: {fantastic: 0.05, good: .15, fair: 0.3},
    distraction: {fantastic: 0.05, good: .15, fair: 0.3},
    follow: {fantastic: 0.05, good: .15, fair: 0.3},
    signal: {fantastic: 0.05, good: .15, fair: 0.3},
}

const textColors ={
    fantastic: '#116530',
    good: '#21B6A8',
    fair: '#FF8300',
    subpar: '#BA0F30'
}

const Styles = (value, name, startAtTop) =>  StyleSheet.create({
    coloredLabel:{
        textAlign: 'center',
        color: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors)
    }
})

export default PersonalScoreCard