import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Input, CheckBox } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const dynamicStyles = StyleSheet.create({

})

const PropertyAccidentSafetyEquipment = () => {

//------------------------------------------\\
//                                          \\
//     Preliminary State and Generations    \\
//                                          \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    // Grabs the propertyData
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    // Keeps track of the chekced items 
    const [safetyUsed, setSafetyUsed] = useState(propertyData.safety_equip)

    // Keeps track of the defective items 
    const [defective, setDefective] = useState(propertyData.defective_equip)

    // Generates List of Safety Equipment applicable to the incident
    let safety = ["Mirrors", "Car Cameras", "Backup Sensor", "Side Step", "Seatbelt"]
    if (propertyData.types_of_damage.pack){
        if (propertyData.damage_report.inOrOut == "outside"){
            safety.push("Trolley / Hand Cart")
            safety.push("Approved Saftey Shoes")
        }
    }

//------------------------------------------\\
//                                          \\
//           Rendering Functions            \\
//                                          \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\


    const renderCheckBoxes = () => {
        return safety.map( (item, index) => {
            return (
                <CheckBox
                    key={index}
                    checked={determineIfChecked(item)}
                    onChange={() => handleCheck(item)}
                    style={Template.stackedCheck}
                >
                    <Text>{item}</Text>
                </CheckBox>
            )
        })
    }

    const renderDidAnyFail = () => {
        return safety.map( (item, index) => {
            return (
                <CheckBox
                    key={index}
                    checked={determineIfChecked(item, true)}
                    onChange={() => handleCheck(item, true)}
                    style={Template.stackedCheck}
                >
                    <Text>{item}</Text>
                </CheckBox>
            )
        })
    }

//------------------------------------------\\
//                                          \\
//        Handlers and Determinators        \\
//                                          \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    const determineIfChecked = (name, fail = false) => {
        let array
        if (fail){
            array = defective
        }
        else{
            array = safetyUsed
        }
        if (array.includes(name)){
            return true
        }
        else{
            return false
        }
    }

    const handleCheck = (name, fail = false) => {
        let array
        if (fail){
            array = defective
        }
        else{
            array = safetyUsed
        }
        if (array.includes(name)){
            let newSafetyUsed = array.filter( (found) => {
                if (found != name){
                    return found
                }
            })
            if (fail){
                setDefective(newSafetyUsed)
                setPropertyData({
                    ...propertyData, 
                    defective_equip: newSafetyUsed
                })
            }
            else{
                setSafetyUsed(newSafetyUsed)
                setPropertyData({
                    ...propertyData, 
                    safety_equip: newSafetyUsed
                })
            }
        }
        else{
            if (fail){
                setDefective([...defective, name])
                setPropertyData({
                    ...propertyData,
                    defective_equip: [...propertyData.defective_equip, name]
                })
            }
            else{
                setSafetyUsed([...safetyUsed, name])
                setPropertyData({
                    ...propertyData,
                    safety_equip: [...propertyData.safety_equip, name]
                })
            }
        }
    }


//------------------------------------------\\
//                                          \\
//            MAIN RENDER METHOD            \\
//                                          \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\


    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: 970}}>
                <Text style={Template.questionText}>
                    Select all safety equipment that was used
                </Text>
                <View style={{marginLeft: 30, marginTop: 15}}>
                    {renderCheckBoxes()}
                </View>
                <Text style={Template.questionText}>
                    Select all safety equipment that was defective or unable to be used
                </Text>
                <View style={{marginLeft: 30, marginTop: 15}}>
                    {renderDidAnyFail()}
                </View>
                <View style={{marginLeft: 30, marginTop: 50}}>
                    <ContinueButton nextPage={'property-accident-extra-info'} buttonText={'Okay'} pageName={'property-accident-safety-equipment-continue-button'} />
                </View>
            </ScrollView>
        </View>
    )
}

export default PropertyAccidentSafetyEquipment