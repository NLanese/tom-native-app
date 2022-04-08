import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { CheckBox } from "@ui-kitten/components";

import { useRecoilState } from "recoil";
import { selfInjuryDataState, accidentDataState } from "../../../Recoil/atoms";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo";

import Banner from "../../../Global/Banner";
import Gradient from "../../../Components/Gradient"
import ContinueButton from "../../../Global/Buttons/ContinueButton"


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const UserInjuryInformation = ({accident}) => {
//--------------------------------------------------//
//                                                  //
//          Preliminary States and Recoil           //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//


    // handles the continue route
    let route = 'user-injury-extra-information'
    let site = "Self Injury Extra Information"
    if (accident){
        site = "Self Injury from Accident Exta Info"
        route = 'user-accident-injury-extra-information'
    }

    const determineRouteAndSite = () =>  {
        if (q4 == "yes"){
            return(
                {route: "animal", site: "Animal Incident Details"}
            )
        }
        else {
            return(
                {route: route, site: site}
            )
        }   
    }

    // Tracks the self injury data
    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)
    const [accidentData, setAccidentData] = useRecoilState(accidentDataState)

    console.log(selfInjuryData)

    // All of the possible injury areas, values for checkboxes and object data
    const possibleInjuries = [
        "Head", "Neck", "Shoulder(s)", 
        "Chest", "Stomach", "Back", 
        "Hips", "Waist", "Groin", 
        "Arm[s]", "Hand[s]", "Elbow[s]", 
        "Leg[s]", "Knee[s]", "Foot",
    ]

    // Tracks the selected injuries
    const [injuriesSelected, setInjuriesSelected] = useState(selfInjuryData.injuries)

    console.log(injuriesSelected)

    // Tracks how nany injuries are selected. You need at least one to continue
    const [count, setCount] = useState(0)

    if (count < 0){
        setCount(0)
    }

//--------------------------------------------------//
//                                                  //
//             RENDERING AND GENERATING             //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    // Generates an 2D array of Components for checkboxes. Three per row, four rows
    const generateCheckBoxes = () => {
        let rComp = []
        let checkRow = []
        possibleInjuries.forEach( (inj, index) => {
            if (index % 3 === 0 && index != 0){
                rComp.push(checkRow)
                checkRow = []
            }
            checkRow.push(
                <View style={{width: 100}} key={index}>
                    <CheckBox
                        onChange={() =>handleCheck(inj)}
                        checked={determineCheck(inj)}
                    >
                        <Text>{inj}</Text>
                    </CheckBox>
                </View>
            )
            if (index == possibleInjuries.length - 1){
                rComp.push(checkRow)
            }
        })
        let i = 0
        return rComp.map( (row, index) => {
            console.log(i)
            i++
            return(row)
        })
    }

    // Renders the checkboxes generated by the method above
    const renderCheckBoxes = () => {
        let checkBoxes = generateCheckBoxes()
        return(
            <View style={{marginTop: 15}}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    {checkBoxes[0]}
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    {checkBoxes[1]}
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    {checkBoxes[2]}
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    {checkBoxes[3]}
                </View>
            </View>
        )
    }

    const determinePartThree = () => {
        return(
            <View>
                <Text style={Template.title}>
                    Were you carrying a package when the injury occurred?
                </Text>
                {/* Button Container */}
                <View style={RAACollisionInfoStyles.buttonBox}>

                    {/* Yes Button */}
                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ3("yes")
                                setSelfInjuryData({
                                    ...selfInjuryData,
                                    injury_report: {
                                        ...selfInjuryData.injury_report,
                                        carrying_package: "yes"
                                    }
                                })
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

                    {/* No Button */}
                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ3("no")
                                setSelfInjuryData({
                                    ...selfInjuryData,
                                    injury_report: {
                                        ...selfInjuryData.injury_report,
                                        carrying_package: "no"
                                    }
                                })
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
            </View>
        )
    }

    const determinePartFour = () => {
        return(
            <View>
                <Text style={Template.title}>
                    Did an animal or pet attack you at a residence?
                </Text>
                {/* Button Container */}
                <View style={RAACollisionInfoStyles.buttonBox}>

                    {/* Yes Button */}
                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ4("yes")
                                setSelfInjuryData({
                                    ...selfInjuryData,
                                    injury_report: {
                                        ...selfInjuryData.injury_report,
                                        animal_related: "yes"
                                    }
                                    
                                })
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

                    {/* No Button */}
                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ4("no")
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
            </View>
        )
    }

    const determinePartFourContinue = () => {
        if (q4 == "no"){
        return(
            <View>
                <Text style={Template.title}>
                    Did you slip or fall?
                </Text>
                {/* Button Container */}
                <View style={RAACollisionInfoStyles.buttonBox}>

                    {/* Yes Button */}
                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ5("yes")
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

                    {/* No Button */}
                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ5("no")
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
            </View>
        )
        }
        if (q4 == "yes"){
            return(
                <View style={{marginLeft: 30, marginTop: 50}}>
                    <ContinueButton nextPage={determineRouteAndSite().route} buttonText={'Done'} nextSite={determineRouteAndSite().site}  pageName={'collision-injury-report-information-continue-button'}/>
                </View> 
            )
        }
    }

    const determinePartFive = () => {
        if (q5 == "yes"){
            return(
                <View>
                <Text style={Template.title}>
                   Were you wearing the Approved Safety Shoes and Maintaining the Three Points of Contact?
                </Text>
                {/* Button Container */}
                <View style={RAACollisionInfoStyles.buttonBox}>

                    {/* Yes Button */}
                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("yes")
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

                    {/* No Button */}
                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setQ6("no")
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

    const determineFinalContinue = () => {
        if (
            q6 != "None" ||
            q5 == "no"
        ){
            return(
                <View style={{marginLeft: 30, marginTop: 50}}>
                    <ContinueButton nextPage={route} buttonText={'Done'} nextSite={site}  pageName={'collision-injury-report-information-continue-button'}/>
                </View> 
            )
        }
    }

    // Renders either the continue button or a driving question
    const determinePartTwo = () => {
        if (q1 == "yes" && !accident){
            return(
                <View>
                    
                    <Text style={Template.title}>
                        Did you harm any property, vehicles or pedestrians?
                    </Text>

                            {/* Button Container */}
                    <View style={RAACollisionInfoStyles.buttonBox}>

                        {/* Yes Button */}
                        <View style={RAACollisionInfoStyles.buttonContainer}>
                            <TouchableOpacity 
                                style={RAACollisionInfoStyles.touchable}
                                onPress={() => {
                                    setQ2("yes")
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

                        {/* No Button */}
                        <View style={RAACollisionInfoStyles.noButtonContainer}>
                            <TouchableOpacity 
                                style={RAACollisionInfoStyles.touchable}
                                onPress={() => {
                                    setQ2("no")
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


                </View>
                
            )
        }
        if (q1 == "no"){
            if(count > 0){
                return(
                    <View>
                        {determinePartThree()}
                        {determinePartFour()}
                        {determinePartFourContinue()}
                        {determinePartFive()}
                        {determineFinalContinue()}
                    </View>
                )
            }
        }
    }

    // Renders the continue button for the yes to driving no to third party
    const determinePartTwoContinue = () => {
        if (q1 == "yes"){
            if (q2 == "no" || accident){{
                if (count > 0){
                    return(
                        <View style={{marginLeft: 30, marginTop: 50}}>
                            <ContinueButton nextPage={route} buttonText={'Done'} nextSite={site}  pageName={'collision-injury-report-information-continue-button'}/>
                        </View>
                    )
                }
            }}
            if (q2 == "yes"){
                return (
                    <View>
                        <Text style={Template.title}>
                             Please fill out a multi-party acicdent report by clicking below
                         </Text>
                         <View style={{marginLeft: 30, marginTop: 60}}>
                             <ContinueButton buttonText={"Okay"}  nextSite={site}  nextPage={"management_notified"}/>
                         </View>
                    </View>
                )
            }
        }
    }

//--------------------------------------------------//
//                                                  //
//            Buttons. Just...Buttons               //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//


    // Tracks state for which yes / no buttons are pressed
    const [q1, setQ1] = useState("None")
    const [q2, setQ2] = useState("None")
    const [q3, setQ3] = useState("None")
    const [q4, setQ4] = useState("None")
    const [q5, setQ5] = useState("None")
    const [q6, setQ6] = useState("None")

    useEffect(() => {
        setQ3("None")
        setQ4("None")
        setQ5("None")
        setQ6("None")
    }, [q2])

    useEffect(() => {
        setQ4("None")
        setQ5("None")
        setQ6("None")
    }, [q3])

    useEffect(() => {
        setQ5("None")
        setQ6("None")
    }, [q4])

    useEffect(() => {
        setQ6("None")
    }, [q5])

    // Self explanatory
    const determineOutline = (yesNo, num) => {
        if (num == 1){
            if (yesNo == q1){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 2){
            if (yesNo == q2){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 3){
            if (yesNo == q3){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 4){
            if (yesNo == q4){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 5){
            if (yesNo == q5){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 6){
            if (yesNo == q6){
                return ({ borderColor: "#0052A2", borderWidth: 5, borderRadius: 100, marginTop: -2})
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
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 2){
            if (yesNo == q2){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 3){
            if (yesNo == q3){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 4){
            if (yesNo == q4){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 5){
            if (yesNo == q5){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        if (num == 6){
            if (yesNo == q6){
                return (RAACollisionInfoStyles.buttonPressed)
            }
            else{
                return RAACollisionInfoStyles.button
            }
        }
        
    }


//--------------------------------------------------//
//                                                  //
//             HANDLERS AND DETERMINERS             //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V// 

    // Returns true if the value is true, false if not
    const determineCheck = (inj) => {
        if (injuriesSelected[inj]){
            return true
        }
        else{
            return false
        }
    }

    // Handles the state and recoil updates on checks
    const handleCheck = (inj) => {
        if (injuriesSelected[inj]){
            setCount(count - 1)
        }
        else{
            setCount(count + 1)
        }
        setSelfInjuryData({
            ...selfInjuryData,                          // Gets the previous state's data 
            injuries: {                                 // Goes into the injuries object
                ...selfInjuryData.injuries,
               [inj]: !injuriesSelected[inj]            // the property whose key matches with the inputted "inj" to be the opposite of the current value for injuriesSelected.INJURY_INOUT
            }
        })
        setInjuriesSelected({
            ...injuriesSelected,
            [inj]: !injuriesSelected[inj]
        })
    }



//--------------------------------------------------//
//                                                  //
//                   MAIN RENDER                    //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V// 
    console.log(selfInjuryData)

    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '200%'}}>
            <Text style={Template.title}>
                What did you hurt? Select all that apply
            </Text>
            <View style={{marginLeft: 30, width: maxWidth - 60}}>
                {renderCheckBoxes()}
            </View>

            <Text style={Template.title}>
                Were you driving when the injury occured?
            </Text>

            {/* Button Container */}
            <View style={RAACollisionInfoStyles.buttonBox}>

                {/* Yes Button */}
                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("yes")
                            setSelfInjuryData({
                                ...selfInjuryData,
                                injury_report: {
                                    ...selfInjuryData.injury_report,
                                    drivingDuring: "yes"
                                }
                            })
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

                {/* No Button */}
                <View style={RAACollisionInfoStyles.noButtonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            setQ1("no")
                            setSelfInjuryData({
                                ...selfInjuryData,
                                injury_report: {
                                    ...selfInjuryData.injury_report,
                                    drivingDuring: "no",
                                    carrying_package: null,
                                    proper_shoes: null,
                                    slipped: null
                                }
                            })
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

            {determinePartTwo()}

            {determinePartTwoContinue()}
        </ScrollView>
        </View>
        
    )
}

export default UserInjuryInformation