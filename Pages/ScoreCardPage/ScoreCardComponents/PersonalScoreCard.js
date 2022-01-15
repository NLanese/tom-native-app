import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { useQuery } from "@apollo/client";
import dateObj from "../../../Hooks/handleDateTime";
import nameObj from '../../../Hooks/handleNameCaseChange'
import colorTextBasedOnValue from "../../../Hooks/colorTextBasedOffValue";
import Banner from "../../../Global/Banner";
import { PersonalLeaderboardStyles } from "../../../Styles/ScoreCardStyles";

const PersonalScoreCard = () => {
    const navigation = useNavigation()


    const fakeQuery = {
        "data": {
          "getDriver": {
            "fico": "802",                                 // good
            "firstname": "DWYANE",                        // good
            "lastname": "WADE",                           // good
            "createdAt": "2022-01-12T19:23:14.022Z",      // good
            "seatbelt": "0.02",                           // good
            "speeding": "0.42",                           // good
            "distractions_rate": "0.17",                  // good
            "following_distance_rate": "0.06",            // good
            "signal_violations_rate": "0.11",             // good
            "delivery_completion_rate": "100",            // good
            "scan_compliance": "95",                      // good
            "photo_on_delivery": "92",                    // good
            "customer_delivery_feedback": "78",           // good
            "deliveries": "103",
            "overall_tier": "Good",
            "dnr": null
          }
        }
    }

    const fakeUser = fakeQuery.data.getDriver

    const userData = fakeUser

    const names = {...nameObj(fakeUser.firstname, fakeUser.lastname)}

    const renderOverallTier = (tier) => {
        let color = ""
        if (tier == 'Fantastic'){
            color = '#116530'
        }
        else if (tier == 'Good'){
            color = '#21B6A8'
        }
        else if (tier == "Fair"){
            color = '#FF8300'
        }
        else {
            color = '#BA0F30'
        }
        return (<Text style={{textAlign: 'center', color: color}}>{tier}</Text>)
    }

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
            <View style={{borderWidth: 2, borderColor: '#E2E8F1', width: '80%', marginLeft: '10%'}} />
            <View style={PersonalLeaderboardStyles.keys}>
                <View style={PersonalLeaderboardStyles.keyTitle}><Text style={{textAlign: 'center'}}>Key</Text></View>
                <View style={PersonalLeaderboardStyles.keyContent}>
                    <View style={PersonalLeaderboardStyles.fantasticContent}>
                        <View style={colors('#116530').dot}/>
                        <View style={PersonalLeaderboardStyles.keyText}>
                            <Text style={{fontWeight: '400', color: '#116530'}}>Fantastic</Text>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.goodContent}>
                        <View style={colors('#21B6A8').dot}/>
                        <View style={PersonalLeaderboardStyles.keyText}>
                            <Text style={{fontWeight: '400', color: '#21B6A8'}}>Good</Text>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.fairContent}>
                        <View style={colors('#FF8300').dot}/>
                        <View style={PersonalLeaderboardStyles.keyText}>
                            <Text style={{fontWeight: '400', color: '#FF8300'}}>Fair</Text>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.subparContent}>
                        <View style={colors('#BA0F30').dot}/>
                        <View style={PersonalLeaderboardStyles.keyText}>
                            <Text style={{fontWeight: '400', color: '#BA0F30'}}>Subpar</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={PersonalLeaderboardStyles.statsheet}>
                <View style={PersonalLeaderboardStyles.drivingStats}>
                    <Text style={PersonalLeaderboardStyles.sectionTitle}>Driving Safety Statistics</Text>
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
                    <View style={PersonalLeaderboardStyles.signalLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Signal Violation</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.signalValue}>
                        <Text style={Styles(userData.signal_violations_rate, 'signal', false).coloredLabel}>{userData.signal_violations_rate}</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.ficoLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>FICO</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.ficoValue}>
                        <Text style={Styles(userData.fico, 'fico', true).coloredLabel}>{userData.fico}</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.serviceStats}>
                        <Text style={PersonalLeaderboardStyles.sectionTitle}>Service Statistics</Text>
                        <View style={PersonalLeaderboardStyles.dcrLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Scan Compliance</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.dcrValue}>
                            <Text style={Styles(userData.scan_compliance, 'scan_compliance', true).coloredLabel}>{userData.scan_compliance}%</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.podLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Photo on Delivery Rate</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.podValue}>
                            <Text style={Styles(userData.photo_on_delivery, 'dcr', true).coloredLabel}>{userData.photo_on_delivery}%</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.cdfLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Customer Feedback</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.cdfValue}>
                            <Text style={Styles(userData.customer_delivery_feedback, 'dcr', true).coloredLabel}>{userData.customer_delivery_feedback}%</Text>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.overalls}>
                        <Text style={PersonalLeaderboardStyles.sectionTitle}>Weekly Report Card</Text>
                        <View style={PersonalLeaderboardStyles.netradyneLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Completion</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.netradyneValue}>
                            <Text style={Styles(userData.delivery_completion_rate, 'dcr', true).coloredLabel}>{userData.delivery_completion_rate}%</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.defectLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Total Deliveries</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.defectValue}>
                            <Text style={{textAlign: 'center'}}>{userData.deliveries}</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.deliveryLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Overall Tier</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.deliveryValue}>
                            {renderOverallTier(userData.overall_tier)}
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                    // handleButtonLoading()
                    navigation.navigate("leaderboard")
                }}>
                    <View style={PersonalLeaderboardStyles.buttonBox}>
                        <Button 
                            mode="contained"
                            height={'100%'}
                            color={'#E2E8F1'}
                            style={{justifyContent: 'center', shadowOpacity: 0}}
                            titleStyle={{color: "white"}}
                            onPress={() => {
                                // handleButtonLoading()
                                navigation.navigate("quality")
                            }}
                        >
                            <Text>Team Leaderboards</Text>
                        </Button>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

const dspPreferences = {
    fico: {fantastic: 800, good: 700, fair: 600},
    seatbelt: {fantastic: 0.05, good: 0.15, fair: 0.3},
    speeding: {fantastic: 0.05, good: .15, fair: 0.3},
    distraction: {fantastic: 0.05, good: .15, fair: 0.3},
    follow: {fantastic: 0.05, good: .15, fair: 0.3},
    signal: {fantastic: 0.05, good: .15, fair: 0.3},
    dcr: {fantastic: 95, good: 90, fair: 80},
    scan_compliance: {fantastic: 95, good: 90, fair: 85},
}

const textColors ={
    fantastic: '#116530',
    good: '#21B6A8',
    fair: '#FF8300',
    subpar: '#BA0F30'
}

const Styles = (value, name=null, startAtTop=null) =>  StyleSheet.create({
    coloredLabel:{
        textAlign: 'center',
        color: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors)
    },
})

const colors = (color) => StyleSheet.create({
    dot: {
        height: 6,
        width: 6,
        borderRadius: 100,
        backgroundColor: color
    }
})

export default PersonalScoreCard