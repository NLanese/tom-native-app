import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, CheckBox, Autocomplete } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVER_CREATE_COLLISION_ACCIDENT } from "../../../GraphQL/operations";
import { useMutation } from "@apollo/client";

import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PropertyAccidentInformation = () => {
///////////////////////
///                 ///
///   PRELIMINARY   /// 
///                 ///
///////////////////////

        // Tracks the running property state
        const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

        // Keeps Track of the height for the container scroll view
        const [contHeight, setContHeight] = useState(200)

        ///////////////
        // Page Data //
        ///////////////

            // Gets Package Type from Recoil to bring to Local
            let initPack = propertyData.types_of_damage.pack
            const [pack, setPack] = useState(initPack)

            // Gets Personal Property Type from Recoil to bring to Local
            let initPersonal = propertyData.types_of_damage.personal 
            const [personal, setPersonal] = useState(initPersonal)

            // Gets Gov Property Type from Recoil to bring to Local
            let initGov = propertyData.types_of_damage.gov 
            const [gov, setGov] = useState(initGov)

            // Pulls the hash from Recoil to track things hit (already filled with values: false)
            const [thingsHit, setThingsHit] = useState(propertyData.damage_report.thingsHit)

            // Sets a counter on how many prop types were damages
            const [amtDam, setAmtDam] = useState(0)

            // Tracks whether damage happened inside or outside
            const [inOrOut, setInOrOut] = useState(propertyData.damage_report.inOrOut)

            // Creates an object to print during testing
            const testGuy = {
                pack: pack,
                personal: personal,
                gov: gov
            }

            // The Test
            useEffect(() => {
                console.log(testGuy)
            })


   

    //        Makes sure that the inOrOut value of the           \\
    //    propertyData recoil object is always set to "outside"  \\
    //        if there are only non-package damages              \\

    if (!pack && (personal || gov) ){
        if (propertyData.damage_report.inOrOut != "outside"){
            setPropertyData({
                ...propertyData,
                damage_report: {
                    ...propertyData.damage_report, inOrOut: "outside"
                }
            })
        }
    }

////////////////////////
///                  ///
///    RENDERINGS    /// 
///                  ///
////////////////////////

    ///////////////
    // In Or Out //
    ///////////////

        // Renders the question that asks where package damage occurred
        const whereWasPackageDamage = () => {
            return(
                <View>
                    <Text style={Template.questionText}>
                        Where did the damage to the package(s) occur?
                    </Text>
                    <View style={{marginLeft: 30, marginTop: 20}}>
                        <CheckBox
                            checked={inOrOutChecked("outside")}
                            style={Template.stackedCheck}
                            onChange={()=>{
                                handleInOrOutClick("outside")
                            }}
                        >
                            Outside of the vehicle
                        </CheckBox>
                        <CheckBox
                            checked={inOrOutChecked("inside")}
                            style={Template.stackedCheck}
                            onChange={()=>{
                                handleInOrOutClick("inside")
                            }}
                        >
                            Inside of the vehicle
                        </CheckBox>
                    </View>
                </View>
            )
        }

    /////////////////////////
    // Property Things Hit //
    /////////////////////////

        // Determines all the possible choices to select for property damage. RENDERS NOTHING
        const propertyOptions = () => {
            let damageOptions = [
                "Building",
                "Fence",
                "Sign",
                "Mailbox",
                "Bushes / Tree(s)"
            ]
            if (gov){
                damageOptions.push("Traffic Signal")
                damageOptions.push("Telephone Pole")
                damageOptions.push("Road Structure")
            }
            if (personal){
                damageOptions.push("Bird Feeder")
                damageOptions.push("Garden")
                damageOptions.push("Parked Car")
                damageOptions.push("Lawn Decorations")
            }
            damageOptions.push("Other")
            return damageOptions
        }

        // Handles a checkBoxClick for propertyDamage
        const handlePropDamageClick = (opt) => {
            if (thingsHit.includes(opt)){
                let newThingsHit = thingsHit.filter( (thing) => {
                    if (thing != opt){
                        return thing
                    }
                    else{
                        null
                    }
                })
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report, thingsHit: newThingsHit
                    }
                })
                setThingsHit(newThingsHit)
            }
            else{
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report, thingsHit: [...propertyData.damage_report.thingsHit, opt]
                    }
                })
                setThingsHit([...thingsHit, opt])
            }

        }

        // Renders checkboxes for all property damage options
        const renderPropertyBoxes = () => {
            return propertyOptions().map( (option, index) => {
                return(
                    <CheckBox
                        key={index}
                        style={Template.stackedCheck}
                        checked={propertyIsChecked(option)}
                        onChange={() => {
                            handlePropDamageClick(option)
                        }}
                    >
                        {option}
                    </CheckBox>
                )
            })
        }

        // Renders the Querstion Prompt for the Property Damage
        const whatProperty = () => {
            return(
                <View>
                    <Text style={Template.questionText}>
                        What kind of property was damaged?
                    </Text>
                    <View style={{marginLeft: 30}}>
                        {renderPropertyBoxes()}
                    </View>
                </View>
            )
        }

    ////////////////////
    // First  Propmpt // 
    ////////////////////

        // Renders the First Prompt. This is Static and Unchanging
        const determineFirst = () => {
            return(
                <View>
                    <Text style={Template.questionText}>What was damaged? Choose all that apply</Text>
                    <View style={{marginTop: 20, marginLeft: 30}}>
                        <CheckBox
                            checked={pack}
                            style={Template.stackedCheck}
                            onChange={() => {
                                setPropertyData({
                                    ...propertyData,
                                    types_of_damage: {...propertyData.types_of_damage, pack: !pack}
                                })
                                setPack(!pack)
                            }}
                        >
                            One or more Packages
                        </CheckBox>

                        <CheckBox
                            checked={personal}
                            style={Template.stackedCheck}
                            onChange={() => {
                                setPropertyData({
                                    ...propertyData,
                                    types_of_damage: {...propertyData.types_of_damage, personal: !personal}
                                })
                                setPersonal(!personal)
                            }}
                        >
                            Personal Property ( fence, mailbox, etc. )
                        </CheckBox>

                        <CheckBox
                            checked={gov}
                            style={Template.stackedCheck}
                            onChange={() => {
                                setPropertyData({
                                    ...propertyData,
                                    types_of_damage: {...propertyData.types_of_damage, gov: !gov}
                                })
                                setGov(!gov)
                            }}
                        >
                            Government Property ( pole, street sign, etc. )
                        </CheckBox>
                    </View>
                </View>
            )
        }

    ////////////////////
    // Second Propmpt // 
    ////////////////////
        
        // Based on your answer to the opening question, renders the next bit of info
        const determineSecond = () => {
            if (pack){
                return(whereWasPackageDamage())
            }
            if (personal || gov){
                return(whatProperty())
            }
        }

    ////////////////////
    // Third  Propmpt // 
    ////////////////////
      
        // Based on your answers in part one and two, renders the next prompts
        const determineThird = () => {
            if (pack && (personal || gov)){
                if (contHeight < 840){
                    setContHeight(contHeight + 440)
                }
                return(whatProperty())
            }
            if (pack && !(personal || gov)){
                if (inOrOut != null){
                    return(
                        <View style={{marginLeft: 30, marginTop: 160}}>
                            <ContinueButton nextPage={'property-accident-contact-information'}  nextSite={'Property Accident Contact Info'}  buttonText={'Done'} pageName={'property-accident-information-continue-button'} />
                        </View>
                    )
                }
            }
            else{
                if (thingsHit.length > 0){
                    return(
                        <View style={{marginLeft: 30, marginTop: 70}}>
                            <ContinueButton nextPage={'property-accident-contact-information'} nextSite={'Property Accident Contact Info'} buttonText={'Done'} pageName={'property-accident-information-continue-button'} />
                        </View>
                    )
                }
            }
        }

    ////////////////////
    // Fourth Propmpt // 
    ////////////////////

        // Based on your answers in part one, two and three, renders the next prompts
        const determineFourth = () => {
            if (pack && (gov || personal)){
                if (thingsHit.length > 0){
                    if (inOrOut != null){
                        return(
                            <View style={{marginLeft: 30, marginTop: 40}}>
                                <ContinueButton nextPage={'property-accident-contact-information'} nextSite={"Property Accident Contact Info"} buttonText={'Done'} pageName={'property-accident-information-continue-button'} />
                            </View>
                        )
                    }
                }
            }
        }

////////////////////////
///                  ///
///     HANDLERS     /// 
///                  ///
////////////////////////


    ///////////////
    // In Or Out //
    ///////////////

        // Determines whether inside, outside, or both
        const handleInOrOutClick = (status) => {

            // if no value
            if (inOrOut == null){

                // set to checked
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report,
                        inOrOut: status
                    }
                })
                setInOrOut(status)
                
            }

            // if a value exists that is not the submitted value
            if (inOrOut != status && inOrOut != null){

                // if both are currently active
                if (inOrOut == "both"){

                    // if outside was clicked
                    if (status == "outside"){

                        // set value to inside only
                        setInOrOut("inside")
                        setPropertyData({
                            ...propertyData,
                            damage_report: {
                                ...propertyData.damage_report,
                                inOrOut: "inside"
                            }
                        })
                    }
                    // if inside was clicked
                    else{

                        // set value to outside only
                        setInOrOut("outside")
                        setPropertyData({
                            ...propertyData,
                            damage_report: {
                                ...propertyData.damage_report,
                                inOrOut: "outside"
                            }
                        })
                    }
                }

                // if the value is the other option only
                else{

                    // set value to both
                    setInOrOut("both")
                        setPropertyData({
                            ...propertyData,
                            damage_report: {
                                ...propertyData.damage_report,
                                inOrOut: "both"
                            }
                        })
                }
            }

            // if the value that is currently active matches the one you submitted
            if (inOrOut == status){
                setInOrOut(null)
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report,
                        inOrOut: null
                    }
                })
            }
        }

        // Determines which, if any, of the in and outs are checked
        const inOrOutChecked = (status) => {
            if (inOrOut == "both" || inOrOut == status){
                return true
            }
            else{
                return false
            }
        }
    

    /////////////////////////
    // Property Things Hit //
    /////////////////////////

        // Determines if a damaged property option is checked or not
        const propertyIsChecked = (property) => {
            if (thingsHit.includes(property)){
                return true
            }
            else{
                return false
            }
        }






//----------------------------------------------//
//                                              //
//            Rendering Functions               //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//







    return (
        <View >
            <Banner />
            <ScrollView contentContainerStyle={{height: 'auto', paddingBottom: maxHeight * 0.24}}>

                

                {determineFirst()}

                {determineSecond()}

                {determineThird()}

                {determineFourth()}

            </ScrollView>


        </View>
    )
}

export default PropertyAccidentInformation