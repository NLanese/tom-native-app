import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, IconButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import dateObj from "../../../Hooks/handleDateTime";
import nameObj from '../../../Hooks/handleNameCaseChange'
import colorTextBasedOnValue from "../../../Hooks/colorTextBasedOffValue";
import Banner from "../../../Global/Banner";
import { PersonalLeaderboardStyles } from "../../../Styles/ScoreCardStyles";
import { useRecoilState } from 'recoil'
import { userState } from "../../../Recoil/atoms";

const PersonalScoreCard = () => {
    const navigation = useNavigation()

    const [user, setUser] = useRecoilState(userState);


    // Colors and Local Dynamic Styles
    const textColors ={
        fantastic: '#116530',
        good: '#21B6A8',
        fair: '#FF8300',
        subpar: '#BA0F30'
    }
    const Styles = (value, name=null, startAtTop=null) =>  StyleSheet.create({
        coloredLabel:{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 16,
            color: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors)
        },
        coloredLine:{
            textAlign: 'center',
            borderColor: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors),
            borderBottomWidth: 0.5
        }
    })
    const colors = (color) => StyleSheet.create({
        dot: {
            height: 6,
            width: 6,
            borderRadius: 100,
            backgroundColor: color
        }
    })
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
        return (<Text style={{textAlign: 'center', color: color, fontWeight: '600', fontSize: 16,}}>{tier}</Text>)
    }


    // Sets up the DSP Limits
    const ficoLims = user.dsp.ficoLimits
    const seatbeltLims = user.dsp.seatbeltLimits
    const speedingLims = user.dsp.speedingLimits
    const distractionLims = user.dsp.distractionLimits
    const followLims = user.dsp.followLimits
    const signalLims = user.dsp.signalLimits
    const dcrLims = user.dsp.deliveryCompletionRateLimits
    const scanLims = user.dsp.scanComplianceLimits
    const dspPreferences = {
        fico: ficoLims,
        seatbelt: seatbeltLims,
        speeding: speedingLims,
        distraction: distractionLims,
        follow: followLims,
        signal: signalLims,
        dcr: dcrLims,
        scan_compliance: scanLims,
    }


    // In charge of rendering the arrows that indicate progression/regression
    const renderArrowIcon = (thisWeek, lastWeek, asc) => {
        let icon = ""
        thisWeek = parseFloat(thisWeek, 10)
        lastWeek = parseFloat(lastWeek, 10)

        if (asc){
            if (thisWeek > lastWeek){
                if (thisWeek > (1.65 * lastWeek)){
                }
                else if (thisWeek > (1.4 * lastWeek)){
                    icon="chevron-double-up"
                }
                else if (thisWeek > (1.1 * lastWeek)){
                    icon="chevron-up"
                }
                else{
                    icon=""
                }
                return (<IconButton icon={icon} color='green' size={15}/>)
            }
            else{
                if (lastWeek > 1.65 * thisWeek){
                    icon="chevron-triple-down"
                }
                else if (thisWeek > 1.4 * lastWeek){
                    icon="chevron-double-down"
                }
                else{
                    icon="chevron-down"
                }
                return (<IconButton icon={icon} color='green' size={15}/>)
            }
        } else {
            if (thisWeek < lastWeek){
                if (thisWeek * 1.65  < lastWeek){
                    icon="chevron-triple-up"
                }
                else if (thisWeek * 1.4 < lastWeek){
                    icon="chevron-double-up"
                }
                else{
                    icon="chevron-up"
                }
                return (<IconButton icon={icon} color='green' size={15}/>)
            }
            else{
                if (thisWeek > 1.65 * lastWeek){
                    icon="chevron-triple-down"
                }
                else if (thisWeek > 1.4 * lastWeek){
                    icon="chevron-double-down"
                }
                else{
                    icon="chevron-down"
                }
                return (<IconButton icon={icon} color='red' size={15} />)
            }
        }
    }

    // Sets up the user and user's last week scores
    const userData = user.weeklyReport[user.weeklyReport.length - 1]
    let lastWeekData = null
    if (user.weeklyReport.length >= 2){
        lastWeekData = user.weeklyReport[user.weeklyReport.length - 2]
    }
    else{
        lastWeekData = userData
    }


    const names = {...nameObj(user.firstname, user.lastname)}


    console.log(userData)


    return(
        <View>
        <Banner />
        <View style={PersonalLeaderboardStyles.scoreContainer}>
            <View style={PersonalLeaderboardStyles.namePlate}>
                <View style={PersonalLeaderboardStyles.nametag}>
                    <Text style={PersonalLeaderboardStyles.nameText}>{names.first} {names.last}</Text>
                </View>
                <View style={PersonalLeaderboardStyles.createdAt}>
                    <Text style={PersonalLeaderboardStyles.createdAtText}>Driving Since             {dateObj(user.createdAt).month}-{dateObj(user.createdAt).day}  {dateObj(user.createdAt).year}</Text>
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
                            <Text style={Styles(userData.seatbelt, 'seatbelt', false).coloredLabel}>{userData.seatbeltOffRate}%</Text>
                            <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.seatbeltOffRate, lastWeekData.seatbeltOffRate, false)}</View>
                        </View>
                        <View style={PersonalLeaderboardStyles.speedingLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Speedings</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.speedingValue}>
                            <Text style={Styles(userData.speeding, 'speeding', false).coloredLabel}>{userData.speedingEventRate}%</Text>
                            <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.speedingEventRate, lastWeekData.speedingEventRate, false)}</View>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.distractionLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Distracted</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.distractionValue}>
                        <Text style={Styles(userData.distractions_rate, 'distraction', false).coloredLabel}>{userData.distractionsRate}%</Text>
                        <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.distractionsRate, lastWeekData.distractionsRate, false)}</View>
                    </View>
                    <View style={PersonalLeaderboardStyles.followingLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Close Follows</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.followValue}>
                        <Text style={Styles(userData.following_distance_rate, 'follow', false).coloredLabel}>{userData.following_distance_rate}%</Text>
                        <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.following_distance_rate, lastWeekData.following_distance_rate, false)}</View>
                    </View>
                    <View style={PersonalLeaderboardStyles.signalLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Signal Violation</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.signalValue}>
                        <Text style={Styles(userData.signal_violations_rate, 'signal', false).coloredLabel}>{userData.signal_violations_rate}%</Text>
                        <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.signal_violations_rate, lastWeekData.signal_violations_rate, false)}</View>
                    </View>
                    <View style={PersonalLeaderboardStyles.ficoLabel}>
                        <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>FICO</Text>
                    </View>
                    <View style={PersonalLeaderboardStyles.ficoValue}>
                        <Text style={Styles(userData.fico, 'fico', true).coloredLabel}>{userData.fico}</Text>
                        <View style={PersonalLeaderboardStyles.arrowIcon}>{renderArrowIcon(userData.fico, lastWeekData.fico, true)}</View>
                    </View>
                    <View style={PersonalLeaderboardStyles.serviceStats}>
                        <Text style={PersonalLeaderboardStyles.sectionTitle}>Service Statistics</Text>
                        <View style={PersonalLeaderboardStyles.scLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Scan Compliance</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.scValue}>
                            <Text style={Styles(userData.scan_compliance, 'scan_compliance', true).coloredLabel}>{userData.scan_compliance}%</Text>
                            <View style={PersonalLeaderboardStyles.arrowIcon2}>{renderArrowIcon(userData.scan_compliance, lastWeekData.scan_compliance, false)}</View>
                        </View>
                        <View style={PersonalLeaderboardStyles.podLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Photo on Delivery Rate</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.podValue}>
                            <Text style={Styles(userData.photo_on_delivery, 'dcr', true).coloredLabel}>{userData.photo_on_delivery}%</Text>
                            <View style={PersonalLeaderboardStyles.arrowIcon2}>{renderArrowIcon(userData.photo_on_delivery, lastWeekData.photo_on_delivery, false)}</View>
                        </View>
                        <View style={PersonalLeaderboardStyles.cdfLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Customer Feedback</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.cdfValue}>
                            <Text style={Styles(userData.customer_delivery_feedback, 'dcr', true).coloredLabel}>{userData.customer_delivery_feedback}%</Text>
                            <View style={PersonalLeaderboardStyles.arrowIcon2}>{renderArrowIcon(userData.customer_delivery_feedback, lastWeekData.customer_delivery_feedback, false)}</View>
                        </View>
                    </View>
                    <View style={PersonalLeaderboardStyles.overalls}>
                        <Text style={PersonalLeaderboardStyles.sectionTitle}>Weekly Report Card</Text>
                        <View style={PersonalLeaderboardStyles.completionLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Completion</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.completionValue}>
                            <Text style={Styles(userData.delivery_completion_rate, 'dcr', true).coloredLabel}>{userData.delivery_completion_rate}%</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.totalLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Total Deliveries</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.totalValue}>
                            <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 16,}}>{userData.deliveries}</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.tierLabel}>
                            <Text style={PersonalLeaderboardStyles.drivingStatsLabels}>Overall Tier</Text>
                        </View>
                        <View style={PersonalLeaderboardStyles.tierValue}>
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




export default PersonalScoreCard