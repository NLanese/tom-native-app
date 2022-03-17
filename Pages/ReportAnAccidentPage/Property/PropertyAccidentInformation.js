import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, CheckBox } from "@ui-kitten/components";

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

const dynamicStyles = StyleSheet.create({
    activeInput: {
        backgroundColor: "#ccc",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        // height: '%',
        marginLeft: 30,
        marginBottom: 20
    },
    inactiveInput: {
        backgroundColor: "#ccc",
        borderColor: "#ccc",
        borderWidth: 3,
        borderRadius: 15,
        width: maxWidth - 60,
        // height: '13%',
        marginLeft: 30,
        marginBottom: 20
    }
})

const PropertyAccidentInformation = () => {

//----------------------------------------------//
//                                              //
//         Preliminary States and Recoil        //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    // Self-explanatory bro
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    // Keeps Track of the height for the container scroll view
    const [contHeight, setContHeight] = useState(200)


//----------------------------------------------//
//                                              //
//            Damage Type Information           //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    // Gets recoil values for state
    let initPack = propertyData.types_of_damage.pack
    let initPersonal = propertyData.types_of_damage.personal 
    let initGov = propertyData.types_of_damage.gov 

    // Sets damage type states
    const [pack, setPack] = useState(initPack)
    const [personal, setPersonal] = useState(initPersonal)
    const [gov, setGov] = useState(initGov)


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


//----------------------------------------------//
//                                              //
//              Package Information             //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    const [inOrOut, setInOrOut] = useState(propertyData.damage_report.inOrOut)

//----------------------------------------------//
//                                              //
//              Package Functions               //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    // HANDLERS \\
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

    // RENDERINGS \\
        const inOrOutChecked = (status) => {
            if (inOrOut == "both" || inOrOut == status){
                return true
            }
            else{
                return false
            }
        }



//----------------------------------------------//
//                                              //
//             Package Code Chunks              //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

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




//----------------------------------------------//
//                                              //
//             Property Information             //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//
    
    const [thingsHit, setThingsHit] = useState(propertyData.damage_report.thingsHit)


//----------------------------------------------//
//                                              //
//             Property Functions               //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//


    // RENDERINGS \\

        // Determines all the possible choices to select for property damage
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

        // Determines if a damaged property option is checked or not
        const propertyIsChecked = (property) => {
            if (thingsHit.includes(property)){
                return true
            }
            else{
                return false
            }
        }

        // Renders checkboxes for all property damage options
        const renderPropertyBoxes = () => {
            return propertyOptions().map( (opt, index) => {
                return(
                    <CheckBox
                        key={index}
                        style={Template.stackedCheck}
                        checked={propertyIsChecked(opt)}
                        onChange={() => {
                            handlePropDamageClick(opt)
                        }}
                    >
                        {opt}
                    </CheckBox>
                )
            })
        }

    // HANDLERS \\

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



//----------------------------------------------//
//                                              //
//            Property Code Chunks              //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

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



//----------------------------------------------//
//                                              //
//            Rendering Functions               //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

    const determineFirst = () => {
        if (pack){
            if (contHeight < 400){
                setContHeight(contHeight + 200)
            }
            return(whereWasPackageDamage())
        }
        if (personal || gov){
            if (contHeight < 640){
                setContHeight(contHeight + 440)
            }
            return(whatProperty())
        }
    }

    const determineSecond = () => {
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

    const determineThird = () => {
        if (contHeight < 1200){
            setContHeight(1200)
        }
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


    console.log("\n")
    console.log(propertyData)

    return (
        <View >
            <Banner />
            <ScrollView contentContainerStyle={{height: contHeight}}>

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

                {determineFirst()}

                {determineSecond()}

                {determineThird()}

            </ScrollView>


        </View>
    )
}

export default PropertyAccidentInformation