import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import { Toggle, Input, CheckBox } from '@ui-kitten/components';

import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import Gradient from "../../../../Components/Gradient";
import DynamicInput from "../../../../Components/DynamicInput";


import { DRIVERCREATECOLLISIONACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { collisionDataState, injuryDataState, userState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";


import Template from "../../../../Styles/RAA/RAATemplateStyles"
import {RAACollisionInfoStyles} from "../../../../Styles/RAA/RAACollisionInfo"

let maxWidth = Dimensions.get('window').width

const CollisionInjuryReportInformation = ({collision}) => {
    let route = "collision-injury-report-extra-info"
    let site = "Collision Injury Extra Information"
    if (!collision){
        route = "injury-report-extra-info"
        site = "Injury Extra Information"
    }

//--------------------------------------------------//
//                                                  //
//          Preliminary States and Recoil           //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)

    const [user, setUser] = useRecoilState(userState)

//--------------------------------------------------\\
//                                                  \\
//                  Button Handlers                 \\
//                                                  \\
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    const onMedicalAttentionChange = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                medical_attention: isChecked
            }
        })
    };

    const onFatalityChange = (isChecked) => {
        if (isChecked == "yes"){
            setInjuryData({
                ...injuryData,
                injury_report: {
                    medical_attention: "yes",
                    fatal: "yes",
                    fracture: "Fatal",
                    concussion: "Fatal",
                    loss_of_con: "Fatal",
                    prior: injuryData.prior,
                    life_threatening: "Fatal"
                }
            })
        }
        else{
            setInjuryData({
                ...injuryData,
                injury_report: {
                    ...injuryData.injury_report,
                    fatal: isChecked,
                    fracture: null,
                    concussion: null,
                    loss_of_con: null,
                    prior: injuryData.prior,
                    life_threatening: null

                }
            })
        }
    };

    const onFractureChange = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                fracture: isChecked
            }
        })
    }

    const onConcussionChange = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                concussion: isChecked
            }
        })
    }

    const onLossOfConChange = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                loss_of_con: isChecked
            }
        })
    }

    const onPriorChange  = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                prior: isChecked
            }
        })
    }

    const onLifeThreateningChange  = (isChecked) => {
        setInjuryData({
            ...injuryData,
            injury_report: {
                ...injuryData.injury_report,
                life_threatening: isChecked
            }
        })
    }


//--------------------------------------------------//
//                                                  //
//              Conditional Styling                 //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//


    let initQ1 = null         // Medical Attention?
    let initQ2 = "none"         // Fatal?
    let initQ3 = "none"         // Fracture?
    let initQ4 = "none"         // Concussion?
    let initQ5 = "none"         // Loss of Conscientiousness
    let initQ6 = "none"         // Any Prior?
    let initQ7 = "none"         // Life Threatening?
    

    // Determines ALL the initial values if this page was returned to
    if (injuryData){


        // MEDICAL ATTN
        if (injuryData.injury_report.medical_attention != null){
            if (injuryData.injury_report.medical_attention == "yes"){
                initQ1 = "yes"
            }
            else{
                initQ1 = "no"
            }
        }
        ////////////////////////////////////////////////////////


        // FATAL
        if (injuryData.injury_report.fatal != null){
            if (injuryData.injury_report.fatal == "yes"){
                initQ2 = "yes"
                initQ3 = "Fatal"
                initQ4 = "Fatal"
                initQ5 = "Fatal"
                initQ7 = "Fatal"
            }
            else{
                initQ2 = "no"
            }
        }
        ////////////////////////////////////////////////////////


        // FRACTURE
        if (injuryData.injury_report.fracture != null){
            if (injuryData.injury_report.fracture == "yes"){
                initQ3 = "yes"
            }
            else if (injuryData.injury_report.fatal != "yes"){
                initQ3 = "no"
            }
        }
        ////////////////////////////////////////////////////////


        // CONCUSSION
        if (injuryData.injury_report.concussion != null){
            if (injuryData.injury_report.concussion == "yes"){
                initQ4 = "yes"
            }
            else if (injuryData.injury_report.fatal != "yes"){
                initQ4 = "no"
            }
        }
        ////////////////////////////////////////////////////////


        // LOSS_OF_CON 
        if (injuryData.injury_report.loss_of_con != null){
            if (injuryData.injury_report.loss_of_con == "yes"){
                initQ5 = "yes"
            }
            else if (injuryData.injury_report.fatal != "yes"){
                initQ5 = "no"
            }
        }
        ////////////////////////////////////////////////////////

        // PRIOR 
        if (injuryData.injury_report.prior != null){
            if (injuryData.injury_report.prior == "yes"){
                initQ6 = "yes"
            }
            else{
                initQ6 = "no"
            }
        }
        ////////////////////////////////////////////////////////

        // LIFE_THREATENING 
        if (injuryData.injury_report.life_threatening != null){
            if (injuryData.injury_report.life_threatening == "yes"){
                initQ7 = "yes"
            }
            else if (injuryData.injury_report.fatal != "yes"){
                initQ7 = "no"
            }
        }
        ////////////////////////////////////////////////////////
    }

    // Tracks state for which yes / no buttons are pressed
    const [q1, setQ1] = useState(initQ1)
    const [q2, setQ2] = useState(initQ2)
    const [q3, setQ3] = useState(initQ3)
    const [q4, setQ4] = useState(initQ4)
    const [q5, setQ5] = useState(initQ5)
    const [q6, setQ6] = useState(initQ6)
    const [q7, setQ7] = useState(initQ7)


    // Self explanatory
    const determineOutline = (yesNo, num) => {
        if (num == 1){
            if (yesNo == q1){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 2){
            if (yesNo == q2){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 3){
            if (yesNo == q3){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 4){
            if (yesNo == q4){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 5){
            if (yesNo == q5){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 6){
            if (yesNo == q6){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 7){
            if (yesNo == q7){
                if (yesNo == "yes"){
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
    }

    // Self explanatory
    const determineSize = (yesNo, num) => {
        if (num == 1){
            if (yesNo == q1){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 2){
            if (yesNo == q2){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 3){
            if (yesNo == q3){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 4){
            if (yesNo == q4){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 5){
            if (yesNo == q5){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 6){
            if (yesNo == q6){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 7){
            if (yesNo == q7){
                if (yesNo == "yes"){
                    return (RAACollisionInfoStyles.buttonPressed)
                }
                else{
                    return (RAACollisionInfoStyles.buttonPressed)
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        
    }


//--------------------------------------------------//
//                                                  //
//            Injury Checkbox States                //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//


    let initHead = false
    let initNeck = false
    let initShoulder = false

    let initChest = false
    let initStomach = false
    let initGroin = false

    let initHips = false
    let initWaist = false
    let initLowerBack = false

    let initLeg = false
    let initKnee = false
    let initFoot = false
    
    let initArms = false
    let initElbows = false
    let initHands = false

    // assigns saved values
    if (injuryData.injured_areas){
        let injuryInfo = injuryData.injured_areas
        if (injuryInfo.head){
            initHead = injuryInfo.head
        }
        if (injuryInfo.neck){
            initNeck = injuryInfo.neck
        }
        if (injuryInfo.shoulder){
            initShoulder = injuryInfo.shoulder
        }
        if (injuryInfo.chest){
            initChest = injuryInfo.chest
        }
        if (injuryInfo.stomach){
            initStomach = injuryInfo.stomach
        }
        if (injuryInfo.hips){
            initHips = injuryInfo.hips
        }
        if (injuryInfo.waist){
            initWaist = injuryInfo.waist
        }
        if (injuryInfo.lowerBack){
            initLowerBack = injuryInfo.lowerBack
        }        
        if (injuryInfo.groin){
            initGroin = injuryInfo.groin
        }
        if (injuryInfo.leg){
            initLeg = injuryInfo.leg
        }
        if (injuryInfo.knee){
            initKnee = injuryInfo.knee
        }
        if (injuryInfo.foot){
            initFoot= injuryInfo.foot
        }
        if (injuryInfo.elbow){
            initElbows = injuryInfo.elbow
        }
        if (injuryInfo.arm){
            initArms = injuryInfo.arm
        }
        if (injuryInfo.hand){
            initHands = injuryInfo.hand
        }
    }

    const [head, setHead] = useState(initHead)
    const [neck, setNeck] = useState(initNeck)
    const [shoulder, setShoulder] = useState(initShoulder)

    const [hips, setHips] = useState(initHips)
    const [waist, setWaist] = useState(initWaist)
    const [lowerBack, setLowerBack] = useState(initLowerBack)

    const [chest, setChest] = useState(initChest)
    const [stomach, setStomach] = useState(initStomach)
    const [groin, setGroin] = useState(initGroin)    

    const [leg, setLeg] = useState(initLeg)
    const [knee, setKnee] = useState(initKnee)
    const [foot, setFoot] = useState(initFoot)

    const [arm, setArm] = useState(initArms)
    const [elbow, setElbow] = useState(initElbows)
    const [hand, setHand] = useState(initHands)


//--------------------------------------------------//
//                                                  //
//                   Minor Render                   //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

const renderOtherQuestions = () => {
    if (q2 == "no"){
        return(
            <View>
                <Text style={Template.questionText}>To your knowledge, were there any fracture(s) / broken bone(s)?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ3("yes")
                                onFractureChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 3)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 3)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ3("no")
                                onFractureChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 3)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 3)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={Template.questionText}>To your knowledge, was the individual concussed / suffered a concussion?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ4("yes")
                                onConcussionChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 4)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 4)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ4("no")
                                onConcussionChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 4)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 4)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={Template.questionText}>To your knowledge, were there any loss of conscientiousness?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ5("yes")
                                onLossOfConChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 5)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 5)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ5("no")
                                onLossOfConChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 5)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 5)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={Template.questionText}>To your knowledge, were there any prior injuries?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("yes")
                                onPriorChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 6)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 6)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("no")
                                onPriorChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 6)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 6)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={Template.questionText}>To your knowledge, was/were the injur(ies) life threatening?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ7("yes")
                                onLifeThreateningChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 7)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 7)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ7("no")
                                onLifeThreateningChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 7)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 7)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    if (q2 == "yes"){ 
        return(
            <View>
                <Text style={Template.questionText}>To your knowledge, were there any prior injuries?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("yes")
                                onPriorChange("yes")
                            }}
                        >
                            <View style={determineOutline("yes", 6)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes", 6)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("no")
                                onPriorChange("no")
                            }}
                        >
                            <View style={determineOutline("no", 6)}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("no", 6)}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}





//--------------------------------------------------//
//                                                  //
//                    Main Render                   //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//
    console.log(injuryData)
    console.log(user.token)
    console.log(collisionData.id)
    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: 2500}}>
            <Text style={Template.questionText}>Was nedical attention needed?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("yes")
                            onMedicalAttentionChange("yes")
                        }}
                    >
                        <View style={determineOutline("yes", 1)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("yes", 1)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={RAACollisionInfoStyles.noButtonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("no")
                            onMedicalAttentionChange("no")
                        }}
                    >
                        <View style={determineOutline("no", 1)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("no", 1)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <Text style={Template.questionText}>Did a Fatality Occur?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ2("yes")
                            onFatalityChange("yes")
                        }}
                    >
                        <View style={determineOutline("yes", 2)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("yes", 2)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={RAACollisionInfoStyles.noButtonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ2("no")
                            onFatalityChange(false)
                        }}
                    >
                        <View style={determineOutline("no", 2)}>
                            <Gradient 
                                colorOne="#534FFF" 
                                colorTwo="#15A1F1" 
                                style={determineSize("no", 2)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            {renderOtherQuestions()}

            <View style={{ marginTop: "0%" }}>
                <Text style={Template.questionText}>What part(s) of the injured person was hurt?</Text>
                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20, flexDirection: 'row'}}>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={head} 
                            onChange={async() => {
                                await setHead(!head)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, head: !head}
                                })
                            }}
                        >
                            Head
                        </CheckBox>
                    </View>
                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={neck} 
                            onChange={async() => {
                                await setNeck(!neck)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, neck: !neck}
                                })
                            }}
                        >
                            Neck
                        </CheckBox>
                    </View>
                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={shoulder} 
                            onChange={async() => {
                                await setShoulder(!shoulder)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, shoulder: !shoulder}
                                })
                            }}
                        >
                            Shoulder
                        </CheckBox>
                    </View>
                    
                </View>

                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 5, flexDirection: 'row'}}>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={hips} 
                            onChange={async() => {
                                await setHips(!hips)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, hips: !hips}
                                })
                            }}
                        >
                            Hip(s)
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={waist} 
                            onChange={ async () => {
                                await setWaist(!waist)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, waist: !waist}
                                })
                            }}
                        >
                            Waist
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox
                            checked={lowerBack}
                            onChange={async () => {
                                await setLowerBack(!lowerBack)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, lowerBack: !lowerBack}
                                })
                            }}
                        >
                            Lower Back
                        </CheckBox>
                    </View>

                </View>
                
                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 5, flexDirection: 'row'}}>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={chest} 
                            onChange={async() => {
                                await setChest(!chest)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, chest: !chest}
                                })
                            }}
                        >
                            Chest
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={stomach} 
                            onChange={ async () => {
                                await setStomach(!stomach)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, stomach: !stomach}
                                })
                            }}
                        >
                            Stomach
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={groin}
                            onChange={async () => {
                                await setGroin(!groin)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, groin: !groin}
                                })
                            }}
                        >
                            Groin
                        </CheckBox>
                    </View>

                </View>

                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 5, flexDirection: 'row'}}>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={leg} 
                            onChange={async() => {
                                await setLeg(!leg)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, leg: !leg}
                                })
                            }}
                        >
                            Leg(s)
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={knee} 
                            onChange={async () => {
                                await setKnee(!knee)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, knee: !knee}
                                })
                            }}
                        >
                            Knee(s)
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={foot} 
                            onChange={async () => {
                                await setFoot(!foot)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, foot: !foot}
                                })
                            }}
                        >
                            Foot
                        </CheckBox>
                    </View>

                </View>

                <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 5, flexDirection: 'row'}}>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={arm} 
                            onChange={async () => {
                                await setArm(!arm)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, arm: !arm}
                                })
                            }}
                        >
                            Arm(s)
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={elbow} 
                            onChange={async () => {
                                await setElbow(!elbow)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, elbow: !elbow}
                                })
                            }}
                        >
                            Elbow(s)
                        </CheckBox>
                    </View>

                    <View style={{width: 100}}>
                        <CheckBox 
                            checked={hand} 
                            onChange={ async() => {
                                await setHand(!hand)
                                await setInjuryData({
                                    ...injuryData,
                                    injured_areas: {...injuryData.injured_areas, hand: !hand}
                                })
                            }}
                        >
                            Hand(s)
                        </CheckBox>
                    </View>

                </View>

            </View>

                <View style={{ marginTop: 30}}>
                    <Text style={Template.questionText}>What was the injured party's First Name?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
                        <DynamicInput 
                            activeColorOne="#534FFF" 
                            activeColorTwo="#15A1F1"
                            activeTextStyle={Template.activeTextStyle}

                            height={50}
                            width={maxWidth - 60}

                            borderLeftRightWidth={6}
                            borderTopBottomWidth={6}
                            borderRadius={20}

                            inactiveColor="#ddd" 
                            inactiveTextStyle={Template.inactiveTextStyle}

                            placeholder={"John"}
                            value={injuryData.contact_info.firstname}
                            onChange={firstname => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        firstname: firstname
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10}}>
                    <Text style={Template.questionText}>What was the injured party's Last Name?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
                        <DynamicInput 
                            activeColorOne="#534FFF" 
                            activeColorTwo="#15A1F1"
                            activeTextStyle={Template.activeTextStyle}

                            height={50}
                            width={maxWidth - 60}

                            borderLeftRightWidth={6}
                            borderTopBottomWidth={6}
                            borderRadius={20}

                            inactiveColor="#ddd" 
                            inactiveTextStyle={Template.inactiveTextStyle}

                            placeholder={"Smith"}
                            value={injuryData.contact_info.lastname}

                            onChange={lastname => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        lastname: lastname
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                              }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10}}>
                    <Text style={Template.questionText}>What was the injured party's Phone Number?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
                        <DynamicInput 
                            activeColorOne="#534FFF" 
                            activeColorTwo="#15A1F1"
                            activeTextStyle={Template.activeTextStyle}

                            height={50}
                            width={maxWidth - 60}

                            borderLeftRightWidth={6}
                            borderTopBottomWidth={6}
                            borderRadius={20}

                            inactiveColor="#ddd" 
                            inactiveTextStyle={Template.inactiveTextStyle}

                            placeholder={"123-456-7890"}
                            value={injuryData.contact_info.phone_number}
                            onChange={phone_number => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        phone_number: phone_number
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={Template.questionText}>What is the injured party's Address?</Text>
                    <View style={{ marginLeft: 30, marginTop: 15}}>
                        <DynamicInput 
                            activeColorOne="#534FFF" 
                            activeColorTwo="#15A1F1"
                            activeTextStyle={Template.activeTextStyle}

                            height={50}
                            width={maxWidth - 60}

                            borderLeftRightWidth={6}
                            borderTopBottomWidth={6}
                            borderRadius={20}

                            inactiveColor="#ddd" 
                            inactiveTextStyle={Template.inactiveTextStyle}

                            placeholder={"123 Street, Township"}
                            value={injuryData.contact_info.address}
                            onChange={address => {
                                setInjuryData({
                                    ...injuryData,
                                    contact_info: {
                                        ...injuryData.contact_info,
                                        address: address
                                    },
                                    specific_pictures: {
                                        ...injuryData.specific_pictures
                                    }
                                })
                            }}
                        />
                    </View>
                </View>

                {
                    injuryData.injury_report.medical_attention !== null &&
                    injuryData.injury_report.fatal !== null &&
                    injuryData.injury_report.fracture !== null &&
                    injuryData.injury_report.concussion !== null &&
                    injuryData.injury_report.loss_of_con !== null &&
                    injuryData.injury_report.prior !== null &&
                    injuryData.injury_report.life_threatening !== null &&
                    injuryData.contact_info.firstname !== null &&
                    injuryData.contact_info.lastname !== null &&
                    injuryData.contact_info.phone_number !== null &&
                    injuryData.contact_info.address !== null
                 ? 
                (
                    <View style={{marginLeft: 30, marginTop: 40}}>
                        <ContinueButton nextPage={route} nextSite={site} buttonText={'Done'} pageName={'collision-injury-report-information-continue-button'}/>
                    </View>
                ) : null}
            </ScrollView>
        </View>
    )
}

export default CollisionInjuryReportInformation