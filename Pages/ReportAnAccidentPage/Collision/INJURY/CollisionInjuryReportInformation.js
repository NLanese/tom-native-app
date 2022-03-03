import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import { Toggle, Input, CheckBox } from '@ui-kitten/components';

import Banner from "../../../../Global/Banner"
import ContinueButton from "../../../../Global/Buttons/ContinueButton";
import Gradient from "../../../../Components/Gradient";


import { DRIVERCREATECOLLISIONACCIDENT } from "../../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { collisionDataState, collisionIdState, injuryDataState } from "../../../../Recoil/atoms";
import { useRecoilState } from "recoil";


import Template from "../../../../Styles/RAA/RAATemplateStyles"
import {RAACollisionInfoStyles} from "../../../../Styles/RAA/RAACollisionInfo"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionInjuryReportInformation = ({collision}) => {

//--------------------------------------------------//
//                                                  //
//          Preliminary States and Recoil           //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    const [injuryData, setInjuryData] = useRecoilState(injuryDataState)

    const [medicalCheck, setMedicalCheck] = useState(false)
    const [immediateCheck, setImmediateCheck] = useState(false)

    const [isActive, setActive] = useState("none")

//--------------------------------------------------\\
//                                                  \\
//                  Button Handlers                 \\
//                                                  \\
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    const onMedicalAttentionChange = (isChecked) => {
        setMedicalCheck(isChecked);

        setInjuryData({
            ...injuryData,
            medical_attention: !medicalCheck
        })
    };

    const onImmediateMedicalChange = (isChecked) => {
        setImmediateCheck(isChecked);

        setInjuryData({
            ...injuryData,
            immediate_attention: !immediateCheck
        })
    };


//--------------------------------------------------//
//                                                  //
//              Conditional Styling                 //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    // Determines Whether a Text Input is styled Active or Not
    const determineStyle = (type) => {
        if (isActive == type) {
            return{
                style: Template.activeInput,
                color: 'white'
            }
        }
        else {
            return{
                style: Template.inactiveInput,
                color: '#adadad'
            }
        }
    }

    let initQ1 = "none"
    let initQ2 = "none"

    if (injuryData){
        if (injuryData.medical_attention != null){
            if (injuryData.medical_attention){
                initQ1 = "yes"
            }
            else{
                initQ1 = "no"
            }
        }
        if (injuryData.immediate_attention != null){
            if (injuryData.immediate_attention){
                initQ2 = "yes"
            }
            else{
                initQ2 = "no"
            }
        }
    }

    // Tracks state for which yes / no buttons are pressed
    const [q1, setQ1] = useState("None")
    const [q2, setQ2] = useState("None")

    // Self explanatory
    const determineOutline = (yesNo, num) => {
        if (num == 1){
            if (yesNo == q1){
                if (yesNo == "yes"){
                    return ({ borderColor: "#0052A2", borderWidth: 4, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
                }
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        else{
            if (yesNo == q2){
                if (yesNo == "yes"){
                    return ({ borderColor: "#0052A2", borderWidth: 4, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
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
        else{
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

    let initLeg = false
    let initKnee = false
    let initFoot = false
    
    let initArms = false
    let initElbows = false
    let initHands = false

    if (injuryData.injury){
        let injuryInfo = injuryData.injury
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
//                    Main Render                   //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    console.log(injuryData)

    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: 1500}}>
            <Text style={Template.questionText}>Was nedical attention needed?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("yes")
                            onMedicalAttentionChange(true)
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
                            onMedicalAttentionChange(false)
                        }}
                    >
                        <View style={determineOutline("no", 1)}>
                            <Gradient 
                                colorOne="#DE0000" 
                                colorTwo="#DE0000" 
                                style={determineSize("no", 1)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            {/* <Toggle checked={medicalCheck} onChange={onMedicalAttentionChange} /> */}

            <Text style={Template.questionText}>Was there immediate medical attention needed?</Text>
            <View style={RAACollisionInfoStyles.buttonBox}>

                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ2("yes")
                            onImmediateMedicalChange(true)
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
                            onImmediateMedicalChange(false)
                        }}
                    >
                        <View style={determineOutline("no", 2)}>
                            <Gradient 
                                colorOne="#DE0000" 
                                colorTwo="#DE0000" 
                                style={determineSize("no", 2)}
                            >
                                <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                            </Gradient>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
            {/* <Toggle checked={immediateCheck} onChange={onImmediateMedicalChange} /> */}

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
                                    injury: {...injuryData.injury, head: !head}
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
                                    injury: {...injuryData.injury, neck: !neck}
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
                                    injury: {...injuryData.injury, shoulder: !shoulder}
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
                            checked={chest} 
                            onChange={async() => {
                                await setChest(!chest)
                                await setInjuryData({
                                    ...injuryData,
                                    injury: {...injuryData.injury, chest: !chest}
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
                                    injury: {...injuryData.injury, stomach: !stomach}
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
                                    injury: {...injuryData.injury, groin: !groin}
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
                                    injury: {...injuryData.injury, leg: !leg}
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
                                    injury: {...injuryData.injury, knee: !knee}
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
                                    injury: {...injuryData.injury, foot: !foot}
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
                                    injury: {...injuryData.injury, arm: !arm}
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
                                    injury: {...injuryData.injury, elbow: !elbow}
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
                                    injury: {...injuryData.injury, hand: !hand}
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
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                            onPressIn={() => setActive("first")}
                            style={determineStyle("first").style}
                            size={'large'}
                            placeholder={`Please Enter The injured Partys Firstname`}
                            placeholderTextColor={determineStyle("first").color}
                            textStyle={{color: determineStyle("first").color, fontSize: 18}}
                            onChangeText={firstname => {
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
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                            onPressIn={() => setActive("last")}
                            style={determineStyle("last").style}
                            size={'large'}
                            placeholder={`Please Enter The Injured Partys Firstname`}
                            placeholderTextColor={determineStyle("last").color}
                            textStyle={{color: determineStyle("last").color, fontSize: 18}}
                            onChangeText={lastname => {
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
                        <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                            <Input
                                onPressIn={() => setActive("phone")}
                                style={determineStyle("phone").style}
                                size={'large'}
                                placeholder={`Please Enter The Injured Partys Firstname`}
                                placeholderTextColor={determineStyle("phone").color}
                                textStyle={{color: determineStyle("phone").color, fontSize: 18}}
                                onChangeText={phone_number => {
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
                    <View style={{marginLeft: 30, width: maxWidth - 60, marginTop: 20}}>
                        <Input
                                onPressIn={() => setActive("addy")}
                                style={determineStyle("addy").style}
                                size={'large'}
                                placeholder={`Please Enter The Injured Partys Address`}
                                placeholderTextColor={determineStyle("addy").color}
                                textStyle={{color: determineStyle("addy").color, fontSize: 18}}
                                onChangeText={address => {
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

                {injuryData.contact_info.firstname !== null && injuryData.contact_info.lastname !== null && injuryData.contact_info.phone_number !== null && injuryData.contact_info.address !== null ? 
                (
                    <View style={{marginLeft: 30, marginTop: 40}}>
                        <ContinueButton nextPage={'collision-injury-report-extra-info'} buttonText={'Done'} pageName={'collision-injury-report-information-continue-button'}/>
                    </View>
                ) : null}
            </ScrollView>
        </View>
    )
}

export default CollisionInjuryReportInformation