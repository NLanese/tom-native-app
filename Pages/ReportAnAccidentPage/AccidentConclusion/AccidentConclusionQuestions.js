import React, { useState } from 'react'
import { ScrollView, View, Text, Dimensions } from 'react-native'
import { CheckBox } from '@ui-kitten/components'

import Banner from '../../../Global/Banner'
import ContinueButton from '../../../Global/Buttons/ContinueButton'

import { useRecoilState } from 'recoil'
import { accidentDataState } from '../../../Recoil/atoms'

import Template from '../../../Styles/RAA/RAATemplateStyles'



let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const AccidentConclusionQuestions = () => {
//--------------------------------------\\
//                                      \\
//       DATA AND DATA MANAGEMENT       \\
//                                      \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    const [q1, setQ1]  = useState("none")
    const [q2, setQ2]  = useState("none")
    const [q3, setQ3]  = useState("none")
    const [q4, setQ4]  = useState("none")

    const determineChecked = (act) => {
        if (act == q1){
            return true
        }
        else{
            return false
        }
    }

    const handleQ1Check = (act) => {
        setQ3("")
        setQ2("")
        setQ1(act)
    }

    const determineChecked2 = (act) => {
        if (act == q2){
            return true
        }
        else{
            return false
        }
    }

    const handleQ2Check = (act) => {
        setQ3("")
        setQ2(act)
    }

    const determineChecked3 = (act) => {
        if (act == q3){
            return true
        }
        else{
            return false
        }
    }

    const handleQ3Check = (act) => {
        setQ3(act)
    }

    const determineChecked4 = (act) => {
        if (act == q4){
            return true
        }
        else{
            return false
        }
    }

    const handleQ4Check = (act) => {
        setQ4(act)
    }
//--------------------------------------\\
//                                      \\
//               RENDERING              \\
//                                      \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//
    
const renderQ2 = () => {
    if (q1.includes("park") || q1 == "leave" || q1 == "merge"){
        return(
            <View style={{marginTop: 30, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} />
            </View>
        )
    }
    if (q1 == "right" || q1 == "left"){
        return(
            <View>
                <Text style={{...Template.title, marginBottom: 10}}>What best describes the kind of setting for the turn? </Text>

                <View>

                    <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked2("highway-to-street")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("highway-to-street")}
                        >
                            <Text>Highway to exit</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked2("street-to-highway")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("street-to-highway")}
                        >
                            <Text>Side Street to Highway</Text>
                        </CheckBox>
                    </View>

                    <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked2("street-to-street")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("street-to-street")}
                        >
                            <Text>Side Stree to Side Street</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked2("any-to-parking")}
                            style={{marginTop: 10, marginRight: 10, width: 140}}
                            onChange={() => handleQ2Check("any-to-parking")}
                        >
                            <Text>Anything to a Parking Lot</Text>
                        </CheckBox>
                    </View>
                </View>
            </View>
        )
    }
    if (q1 == "straight"){
        return(
            <View>
                <Text style={Template.title}>Was there a traffic light involved?</Text>
                <View style={{flexDirection: "row", marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked2("yes")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("yes")}
                        >
                            <Text>Yes</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked2("no")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("no")}
                        >
                            <Text>No</Text>
                        </CheckBox>
                    </View>
            </View>
        )
    }
}

const renderQ3 = () => {
    if (q2 == "yes"){
        return(
            <View>
                <Text style={Template.title}>
                    Choose the answer that best describes what happened at the light
                </Text>

                <View style={{flexDirection: "row", marginLeft: 15, marginTop: 10, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked3("Green-Red")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("Green-Red")}
                    >
                        <Text>Green Light to Red Light</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked3("street-to-highway")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("street-to-highway")}
                    >
                        <Text>Red Light to Green Light</Text>
                    </CheckBox>
                </View>

                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked3("Yellow-Red")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("Yellow-Red")}
                    >
                        <Text>Yellow Light to Red Light</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked3("Green-to-Yellow")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("street-to-highway")}
                    >
                        <Text>Green Light to Yellow Light</Text>
                    </CheckBox>
                </View>

            </View>
        )
    }
    if (q2 == "no" || q2 == "any-to-parking"){
        return (
            <View style={{marginTop: 50, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} />
            </View>
        )
    }
    if (q2.includes("street")){
        return(
            <View style={{marginTop: 15}}>
                <Text style={{...Template.title, marginBottom: 10}}>Was there a traffic light involved?</Text>
                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked3("yes")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ3Check("yes")}
                        >
                            <Text>Yes</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked3("no")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ3Check("no")}
                        >
                            <Text>No</Text>
                        </CheckBox>
                    </View>
            </View>
        )
    }
}

const renderQ4 = () => {
    if (q3.includes("-") || q3 == "no"){
        return (
            <View style={{marginTop: 50, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} />
            </View>
        )
    }
    if (q3 == "yes"){
        return(
            <View style={{marginTop: 15}}>
                <Text style={Template.title}>
                    Choose the answer that best describes what happened at the light
                </Text>

                <View style={{flexDirection: "row", marginLeft: 15, marginTop: 10, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked4("Green-Red")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("Green-Red")}
                    >
                        <Text>Green Light to Red Light</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked4("street-to-highway")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("street-to-highway")}
                    >
                        <Text>Red Light to Green Light</Text>
                    </CheckBox>
                </View>

                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked3("Yellow-Red")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("Yellow-Red")}
                    >
                        <Text>Yellow Light to Red Light</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked3("Green-to-Yellow")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("street-to-highway")}
                    >
                        <Text>Green Light to Yellow Light</Text>
                    </CheckBox>
                </View>

            </View>
        )
    }
}

const renderQ5 = () => {
    if (q4.includes("-")){
        return (
            <View style={{marginTop: 50, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} />
            </View>
        )
    }
}

    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: "130%"}}>
                <Text style={Template.title}>
                    What were you doing leading up to the accident?
                </Text>

                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked("park1")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ1Check("park1")}
                    >
                        Parked (I was in the vehicle)
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked("park2")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ1Check("park2")}
                    >
                        Parked (I was outside the vehicle)
                    </CheckBox>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, width: maxWidth - 60}}>
                   <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("right")}
                        onChange={() => handleQ1Check("right")}
                    >
                        Making a Right Turn
                    </CheckBox>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("left")}
                        onChange={() => handleQ1Check("left")}
                    >
                        Making a Left Turn
                    </CheckBox>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("straight")}
                        onChange={() => handleQ1Check("straight")}
                    >
                        Driving Straight
                    </CheckBox>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("merge")}
                        onChange={() => handleQ1Check("merge")}
                    >
                        Merging into a lane
                    </CheckBox>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, width: maxWidth - 60, marginBottom: 20}}>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("leave")}
                        onChange={() => handleQ1Check("leave")}
                    >
                        Leaving a parking spot
                    </CheckBox>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("parking")}
                        onChange={() => handleQ1Check("parking")}
                    >
                        Getting into a parking spot
                    </CheckBox>
                </View>

                {renderQ2()}

                {renderQ3()}

                {renderQ4()}

                {renderQ5()}

            </ScrollView>
        </View>
    )
}

export default AccidentConclusionQuestions