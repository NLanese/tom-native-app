import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { CheckBox } from "@ui-kitten/components";

import { useNavigation } from "@react-navigation/native";

import { useRecoilState } from "recoil";
import { accidentDataState, injuryDataState } from "../../../Recoil/atoms";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo";

import Banner from "../../../Global/Banner";
import Gradient from "../../../Components/Gradient"
import ContinueButton from "../../../Global/Buttons/ContinueButton"


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const OwnCarInformation = ({accident}) => {
//--------------------------------------------------//
//                                                  //
//          Preliminary States and Recoil           //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//



    // Tracks the self injury data
    const [accidentState, setAccidentState] = useRecoilState(accidentDataState)
    const [injuryAccident] = useRecoilState(injuryDataState)

    // All of the possible injury areas, values for checkboxes and object data
    const possibleDamage = [
        "Side Mirror(s)", "Side Door(s)",
        "Front Bumper", "Windshield",
        "Roof", "Tire(s) / Hubcap(s)",
        "Rear Door", "Tail Light(s)",
        "Interior", "Headlights"
    ]


    if (injuryAccident){
        accident = true
    }

    // Tracks the selected damages
    const [damageSel, setDamageSel] = useState(accidentState.selfDamage.damages)

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
        possibleDamage.forEach( (dam, index) => {
            if (index % 2 === 0 && index != 0){
                rComp.push(checkRow)
                checkRow = []
            }
            checkRow.push(
                <View style={{width: 150}} key={index}>
                    <CheckBox
                        onChange={() =>handleCheck(dam)}
                        checked={determineCheck(dam)}
                    >
                        <Text>{dam}</Text>
                    </CheckBox>
                </View>
            )
            if (index == possibleDamage.length - 1){
                rComp.push(checkRow)
                checkRow = []
            }
        })
        return rComp
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

    // Depending on what options were chosen, you choose driver or passenger side
    const renderDamageQuestions = () => {
        let damageKeys = accidentState.selfDamage.damages.keys() 
    }

    // Renders either the continue button or a driving question
    const determinePartOne = () => {
        if (!accident){
            return(
                <View>
                    
                    <Text style={Template.title}>
                        Did you damage any property or other vehicles during this incident?
                    </Text>

                            {/* Button Container */}
                    <View style={RAACollisionInfoStyles.buttonBox}>

                        {/* Yes Button */}
                        <View style={RAACollisionInfoStyles.buttonContainer}>
                            <TouchableOpacity 
                                style={RAACollisionInfoStyles.touchable}
                                onPress={() => {
                                    setQ1("yes")
                                }}
                            >
                                <View style={determineOutline("yes", 1)}>
                                    <Gradient
                                        colorOne="#DE0000" 
                                        colorTwo="#DE0000"  
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


                </View>
                
            )
        }
        if ({accident}){
            if(count > 0){
                return(
                    <View>
                    
                    <Text style={Template.title}>
                       Did you damage somone else's property?
                    </Text>
                    <Text style={{...Template.subTitle2, width: maxWidth - 70, marginTop: 8}}>
                        Select no if the damage occured before or after any other described incidents
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
                                        colorOne="#DE0000" 
                                        colorTwo="#DE0000"  
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
        }
    }

    // Renders the continue button for the yes to driving no to third party
    const determinePartTwoContinue = () => {


       if (!accident && q1 == "yes"){
           return (
               <View>
                   <Text style={Template.title}>
                        Please fill out a multi-party acicdent report by clicking below
                    </Text>
                    <View style={{marginLeft: 30, marginTop: 60}}>
                        <ContinueButton buttonText={"Done"} nextPage={"management_notified"} nextSite={'Management Notified'}/>
                    </View>
               </View>
           )
       }

       if (!accident && q1 == "no"){
           return(
            <View style={{marginLeft: 30, marginTop: 60}}>
                <ContinueButton buttonText={"Done"} nextPage={'accident-conclusion'} nextSite={"Accident Conclusion"}/>
            </View>
           )
       }

       if (accident){
        return(
            <View style={{marginLeft: 30, marginTop: 60}}>
                <ContinueButton buttonText={"Done"} nextPage={'accident-conclusion'} nextSite={"Accident Conclusion"}/>
            </View>
        )
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

    // Self explanatory
    const determineOutline = (yesNo, num) => {
        if (num == 1){
            if (yesNo == q1){
                if (yesNo == "no"){
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
                    return ({ borderColor: "#A00000", borderWidth: 4, borderRadius: 100, marginTop: -2})
                }
                else{
                    return ({ borderColor: "#0052A2", borderWidth: 4, borderRadius: 100, marginTop: -2})
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
//             HANDLERS AND DETERMINERS             //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V// 

    // Returns true if the value is true, false if not
    const determineCheck = (dam) => {
        if (damageSel[dam]){
            return true
        }
        else{
            return false
        }
    }

    // Handles the state and recoil updates on checks
    const handleCheck = (dam) => {
        if (damageSel[dam]){
            setCount(count - 1)
        }
        else{
            setCount(count + 1)
        }
        setAccidentState({
            ...accidentState,
            selfDamage: {
                damaged: true,
                damages: {
                    ...accidentState.selfDamage.damages,
                    [dam] : !damageSel[dam]
                }
            }
        })
        setDamageSel({
            ...damageSel,
            [dam]: !damageSel[dam]
        })
    }



//--------------------------------------------------//
//                                                  //
//                   MAIN RENDER                    //
//                                                  //
//-V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V// 
    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '110%'}}>
            <Text style={Template.title}>
                What Part(s) of your Vehichle was damaged?
            </Text>
            <View style={{marginLeft: 30, width: maxWidth - 60}}>
                {renderCheckBoxes()}
            </View>
            {determinePartOne()}
            {determinePartTwoContinue()}
        </ScrollView>
        </View>
        
    )
}

export default OwnCarInformation