import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { Button, IconButton } from "react-native-paper";

import { useNavigation } from '@react-navigation/native';

import dateObj from "../../../Hooks/handleDateTime";
import nameObj from '../../../Hooks/handleNameCaseChange'
import colorTextBasedOnValue from "../../../Hooks/colorTextBasedOffValue";
import numberToMonth from "../../ShiftPlannerPage/numberToMonth";
import handlePicture from "../../../Hooks/handlePicture";

import Banner from "../../../Global/Banner";
import Gradient from "../../../Components/Gradient";

import { ShiftPlannerStyles } from "../../../Styles/ShiftPlannerStyles";
import { ScoreCardStyles } from "../../../Styles/ScoreCardStyles";
import { AccountInformationStyles } from "../../../Styles/SettingStyles";

import { useRecoilState } from 'recoil'
import { userState } from "../../../Recoil/atoms";

const PersonalScoreCard = () => {
///////////////////////////////////////
///                                 ///
///          BASIC SETUP            ///
///                                 ///
///////////////////////////////////////

    const navigation = useNavigation()

    // User Recoil
    const [user, setUser] = useRecoilState(userState);

    // Sets up the DSP Limits ////////////////////////////////////////
    const ficoLims = user.dsp.ficoLimits                            //
    const seatbeltLims = user.dsp.seatbeltLimits                    //
    const speedingLims = user.dsp.speedingLimits                    //
    const distractionLims = user.dsp.distractionLimits              //
    const followLims = user.dsp.followLimits                        //
    const signalLims = user.dsp.signalLimits                        //
    const dcrLims = user.dsp.deliveryCompletionRateLimits           //
    const cdfLims = user.dsp.customerDeliveryFeedbackLimits         //
    const dspPreferences = {                                        //
        fico: ficoLims,                                             //
        seatbelt: seatbeltLims,                                     
        speeding: speedingLims,
        distraction: distractionLims,
        follow: followLims,
        signal: signalLims,
        dcr: dcrLims,
        cdf: cdfLims
    }                                                               //
    //////////////////////////////////////////////////////////////////

    // Sets up the user and user's last week scores
    const userData = user.weeklyReport[user.weeklyReport.length - 1]
    let lastWeekData = null
    if (user.weeklyReport.length >= 2){
        lastWeekData = user.weeklyReport[user.weeklyReport.length - 2]
    }
    else{
        lastWeekData = userData
    }

    // This sets the name up to not be capitalized
    const names = {...nameObj(user.firstname, user.lastname)}


///////////////////////////////////////
///                                 ///
///     RANKING COLOR FUNCTIONS     ///
///                                 ///
///////////////////////////////////////

    // This holds the color values for the different ranks. 
    // In the next update, these colors should be able to customized in the DSP Settings
    const textColors ={
        fantastic: '#00B800',
        good: '#21B6A8',
        fair: '#FF8300',
        subpar: '#BA0F30'
    }

    // This determines the text styles (using the method above for color)
    const Styles = (value, name=null, startAtTop=null) =>  StyleSheet.create({
        coloredLabel:{
            textAlign: 'center',
            fontFamily: 'GilroyBold',
            letterSpacing: -0.5,
            fontSize: 25,
            color: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors)
        },
        coloredLine:{
            textAlign: 'center',
            borderColor: colorTextBasedOnValue(value, name, startAtTop, dspPreferences, textColors),
            borderBottomWidth: 0.5
        }
    })

    // Likely going to be irrelevant
    const colors = (color) => StyleSheet.create({
        dot: {
            height: 6,
            width: 6,
            borderRadius: 100,
            backgroundColor: color
        }
    })



///////////////////////////////////////
///                                 ///
///       RENDERINGR FUNCTIONS      ///
///                                 ///
///////////////////////////////////////

    // Small time method. This renders the style / color of the Overall Tier Value alone
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




///////////////////////////////////////
///                                 ///
///           MIAN RENDER           ///
///                                 ///
///////////////////////////////////////
    return(
        <View>
        <Banner />
        <ScrollView contentContainerStyle={{height: 1200}}>
            <View style={{...ShiftPlannerStyles.shiftInfo, marginTop: 30, height: 800}}>

                {/* Shift Profile */}
                <View style={{...ShiftPlannerStyles.shiftProfile}}>
                    
                    {/* FICO Rank */}
                    <View style={{marginTop: 25, marginLeft: "12%", marginRight: "5%"}}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 36,
                                width: 36,
                                borderRadius: 18
                            }}
                            hollow={true}
                            hollowColor={"white"}
                            hollowBorderSize="large"
                            hollowStyles={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={ShiftPlannerStyles.ficoRank}>4</Text>
                        </Gradient>
                    </View>

                    {/* PFP */}
                    <Gradient
                        colorOne="#534FFF"
                        colorTwo="#15A1F1"
                        style={{
                            height: 86,
                            width: 86,
                            borderRadius: 43
                        }}
                        hollow={true}
                        hollowColor={"white"}
                        hollowBorderSize="medium"
                        hollowStyles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {handlePicture(user.profilePick, 75)}
                    </Gradient>


                    {/* Msg Button */}
                    <View style={{marginTop: 25, marginLeft: '5%'}}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 36,
                                width: 36,
                                borderRadius: 18
                            }}
                            hollow={true}
                            hollowColor={"white"}
                            hollowBorderSize="large"
                            hollowStyles={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                        </Gradient>
                    </View>
                    

                </View>

                {/* Name and Driving Since */}
                <View style={ShiftPlannerStyles.nameAndHours}>
                    <Text style={ShiftPlannerStyles.nameText}>
                        {user.firstname} {user.lastname}
                    </Text>
                    <Text style={{...ScoreCardStyles.keyTitle, marginTop: 8}}>
                        DRIVING SINCE
                    </Text>
                    <Text style={ShiftPlannerStyles.hoursText}>
                        {numberToMonth(dateObj(user.createdAt).month)}, {dateObj(user.createdAt).day}  {dateObj(user.createdAt).year}
                    </Text>
                </View>

                {/* Key */}
                <View>
                    <View style={ScoreCardStyles.keyContainer}>
                        <Text style={ScoreCardStyles.keyTitle}>KEY</Text>
                    </View>
                    <View style={ScoreCardStyles.keyBox}>
                            <Text style={{...ScoreCardStyles.keyValueBox, color: textColors.fantastic}}>Fantastic</Text>
                            <Text style={{...ScoreCardStyles.keyValueBox, color: textColors.good}}>Good</Text>
                            <Text style={{...ScoreCardStyles.keyValueBox, color: textColors.fair}}>Fair</Text>
                            <Text style={{...ScoreCardStyles.keyValueBox, color: textColors.subpar}}>Subpar</Text>
                    </View>
                </View>


                {/* Numeric Values and Titles */}
                <View style={{...ShiftPlannerStyles.valueBox, marginTop: 20}}>

                    <Text style={{...ScoreCardStyles.keyTitle, marginBottom: 10}}>DRIVING SAFETY STATISTICS</Text>

                    {/* Row One */}
                    <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.seatbeltOffRate, 'seatbelt', false).coloredLabel}>{userData.seatbeltOffRate}%</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Seatbelt Off</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.speedingEventRate, 'speeding', false).coloredLabel}>{userData.speedingEventRate}%</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Speedings</Text>
                        </View>

                    </View>

                    {/* Row Two */}
                    <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.distractionsRate, 'distraction', false).coloredLabel}>{userData.distractionsRate}%</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Distracted</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.followingDistanceRate, 'follow', false).coloredLabel}>{userData.followingDistanceRate}%</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Close Follows</Text>
                        </View>

                    </View>

                    {/* Row Three */}
                    <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.signalViolationsRate, 'signal', false).coloredLabel}>{userData.signalViolationsRate}%</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>Signal Violations</Text>
                        </View>

                        <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                        <View style={ShiftPlannerStyles.cell}>
                            <Text style={Styles(userData.fico, 'fico', true).coloredLabel}>{userData.fico}</Text>
                            <Text style={ShiftPlannerStyles.valTitle}>FICO</Text>
                        </View>

                    </View>

                        <Text style={{...ShiftPlannerStyles.subtitle2, textAlign: 'center', marginTop: 40, marginBottom: 10}}>
                            SERVICE STATISTICS
                        </Text>

                        {/* Row Four */}
                        <View style={ShiftPlannerStyles.valRow}>

                        <View style={ShiftPlannerStyles.cell}>
                                <Text style={{textAlign: 'center', fontFamily: 'GilroyBold', etterSpacing: -0.5, fontSize: 25,}}>{userData.delivered}</Text>
                                <Text style={ShiftPlannerStyles.valTitle}>Total Deliveries</Text>
                            </View>

                            <View style={{height: 30, width: 1, backgroundColor: "#DDD", marginTop: 10}} />

                            <View style={ShiftPlannerStyles.cell}>
                                <Text style={Styles(userData.photoOnDelivery, 'dcr', true).coloredLabel}>{userData.photoOnDelivery}%</Text>
                                <Text style={ShiftPlannerStyles.valTitle}>Photo Rate</Text>
                            </View>

                        </View>

                        {/* <Text style={{...ShiftPlannerStyles.subtitle2, textAlign: 'center', marginTop: 40, marginBottom: 10}}>
                            WEEKLY REPORT
                        </Text> */}

                    </View>

                </View>

                <View style={{marginTop: 90}}>
                    <TouchableOpacity onPress={() => {
                            navigation.navigate("leaderboard")
                        }}>
                        <Gradient
                            colorOne={"#534FFF"}
                            colorTwo={"#15A1F1"}
                            style={{
                                height: 50,
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{...AccountInformationStyles.buttonText, letterSpacing: 1.5}}>TEAM LEADERBOARD</Text>
                        </Gradient>
                    </TouchableOpacity>
                </View>

        </ScrollView>
        </View>
    )
}




export default PersonalScoreCard