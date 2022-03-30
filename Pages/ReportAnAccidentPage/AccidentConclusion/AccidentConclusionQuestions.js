import React, { useState, useEffect } from 'react'
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

    const [report, setReport] = useState({})

    console.log('\n\n\n\n\n')

    useEffect(() => {
      setReport({
        main_action: q1,
        setting1: q2,
        setting2: q3,
        specifics: q4
      })
    }, [q1, q2, q3, q4])

    useEffect(() => {
        setAccidentData({
            ...accidentData,
            before_accident_report: {...report}
        })
    }, [report])

    console.log(report)
    console.log(accidentData)

    const determineChecked = (act) => {
        if (act == q1){
            return true
        }
        else{
            return false
        }
    }

    const handleQ1Check = (act) => {
        setQ4("")
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
        setQ4("")
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
        setQ4("")
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
    if (q1.includes("park") || q1 == "leaving-parking" || q1 == "merge"){
        return(
            <View style={{marginTop: 30, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} nextPage={'distractions'} nextSite={"Concluding Questions II"}/>
            </View>
        )
    }
    if (q1 == "made-right-turn" || q1 == "made-left-turn"){
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
                            <Text>Side Street to Side Street</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked2("any-to-parking")}
                            style={{marginTop: 10, marginRight: 10, width: 140}}
                            onChange={() => handleQ2Check("any-to-parking")}
                        >
                            <Text>Anything to a Parking Lot</Text>
                        </CheckBox>
                    </View>
                    <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked2("4-way-intersection")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("4-way-intersection")}
                        >
                            <Text>4 Way Intersection</Text>
                        </CheckBox>
                        
                    </View>
                </View>
            </View>
        )
    }
    if (q1 == "driving-straight"){
        return(
            <View>
                <Text style={Template.title}>Was there a traffic light / Stop Sign involved?</Text>
                <View style={{flexDirection: "row", marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked2("trafficSignal")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("trafficSignal")}
                        >
                            <Text>Yes</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked2("noTrafficSignal")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ2Check("noTrafficSignal")}
                        >
                            <Text>No</Text>
                        </CheckBox>
                    </View>
            </View>
        )
    }
}

const renderQ3 = () => {
    if (q2 == "trafficSignal"){
        return(
            <View>
                <Text style={Template.title}>
                    Choose the answer that best describes what happened at the light / Sign
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
                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked3("stopped-at-sign")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("stopped-at-sign")}
                    >
                        <Text>I was stopped at a sign</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked3("driving-at-sign")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ3Check("driving-at-sign")}
                    >
                        <Text>I was driving after a sign</Text>
                    </CheckBox>
                </View>

            </View>
        )
    }
    if (q2 == "noTrafficSignal"){
        return(
            <View style={{marginTop: 15}}>
            <Text style={Template.title}>
                Were you avoiding any obstacles such as potholes or animals?
            </Text>

            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                <CheckBox
                    checked={determineChecked3("avoid-animal")}
                    style={{marginTop: 10, marginRight: 10, width: 160}}
                    onChange={() => handleQ3Check("avoid-animal")}
                >
                    I was avoiding an animal
                </CheckBox>
                <CheckBox
                    checked={determineChecked3("avoid-pothole")}
                    style={{marginTop: 10, marginRight: 10, width: 160}}
                    onChange={() => handleQ3Check("avoid-pothole")}
                >
                    I was avoiding a pothole
                </CheckBox>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                <CheckBox
                    checked={determineChecked3("avoid-other")}
                    style={{marginTop: 10, marginRight: 10, width: 160}}
                    onChange={() => handleQ3Check("avoid-other")}
                >
                    I was avoiding something else
                </CheckBox>

                <CheckBox
                    checked={determineChecked3("avoid-none")}
                    style={{marginTop: 10, marginRight: 10, width: 160}}
                    onChange={() => handleQ3Check("avoid-none")}
                >
                    No, I wasn't avoiding anything
                </CheckBox>
            </View>
        </View>
        )
    }
    if (q2 == "any-to-parking"){
        return (
            <View style={{marginTop: 50, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} nextPage={'distractions'} nextSite={"Concluding Questions II"}/>
            </View>
        )
    }
    if (q2.includes("street") || q2.includes("intersection")){
        return(
            <View style={{marginTop: 15}}>
                <Text style={{...Template.title, marginBottom: 10}}>Was there a traffic light / Street Sign involved?</Text>
                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                        <CheckBox
                            checked={determineChecked3("trafficSignal")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ3Check("trafficSignal")}
                        >
                            <Text>Yes</Text>
                        </CheckBox>
                        <CheckBox
                            checked={determineChecked3("noTrafficSignal")}
                            style={{marginTop: 10, marginRight: 10, width: 160}}
                            onChange={() => handleQ3Check("noTrafficSignal")}
                        >
                            <Text>No</Text>
                        </CheckBox>
                    </View>
            </View>
        )
    }
}

const renderQ4 = () => {
    if (q3.includes("-") || q3 == ("noTrafficSignal")){
        return (
            <View style={{marginTop: 50, marginLeft: 30}}>
                <ContinueButton buttonText={"Done"} nextPage={'distractions'} nextSite={"Concluding Questions II"}/>
            </View>
        )
    }
    if (q3 == "trafficSignal"){
        return(
            <View style={{marginTop: 15}}>
                <Text style={Template.title}>
                    Choose the answer that best describes what happened at the light / Street Sign
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
                        checked={determineChecked4("Yellow-Red")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("Yellow-Red")}
                    >
                        <Text>Yellow Light to Red Light</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked4("Green-to-Yellow")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("Green-to-Yellow")}
                    >
                        <Text>Green Light to Yellow Light</Text>
                    </CheckBox>
                </View>
                <View style={{flexDirection: "row", marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked4("stopped-at-sign")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("stopped-at-sign")}
                    >
                        <Text>I was stopped at a sign</Text>
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked4("driving-at-sign")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ4Check("driving-at-sign")}
                    >
                        <Text>I was driving after a sign</Text>
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
                <ContinueButton buttonText={"Done"} nextPage={'distractions'} nextSite={"Concluding Questions II"}/>
            </View>
        )
    }
}

    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: "150%"}}>
                <Text style={Template.title}>
                    What were you doing leading up to the accident?
                </Text>

                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        checked={determineChecked("parked-and-occupied")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ1Check("parked-and-occupied")}
                    >
                        Parked (I was in the vehicle)
                    </CheckBox>
                    <CheckBox
                        checked={determineChecked("parked-empty")}
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        onChange={() => handleQ1Check("parked-empty")}
                    >
                        Parked (I was outside the vehicle)
                    </CheckBox>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, width: maxWidth - 60}}>
                   <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("made-right-turn")}
                        onChange={() => handleQ1Check("made-right-turn")}
                    >
                        Making a Right Turn
                    </CheckBox>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("made-left-turn")}
                        onChange={() => handleQ1Check("made-left-turn")}
                    >
                        Making a Left Turn
                    </CheckBox>
                </View>

                <View style={{flexDirection: 'row', marginLeft: 15, width: maxWidth - 60}}>
                    <CheckBox
                        style={{marginTop: 10, marginRight: 10, width: 160}}
                        checked={determineChecked("driving-straight")}
                        onChange={() => handleQ1Check("driving-straight")}
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
                        checked={determineChecked("leaving-parking")}
                        onChange={() => handleQ1Check("leaving-parking")}
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