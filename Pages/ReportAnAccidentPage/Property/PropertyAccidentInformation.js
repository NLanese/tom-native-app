import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, CheckBox } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";

import { DRIVERCREATECOLLISIONACCIDENT } from "../../../GraphQL/operations";
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

    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

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
            if (inOrOut == null){
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report,
                        inOrOut: status
                    }
                })
            }
            if (inOrOut != status){
                setPropertyData({
                    ...propertyData,
                    damage_report: {
                        ...propertyData.damage_report,
                        inOrOut: "both"
                    }
                })
            }
        }

    // RENDERINGS \\
        const inOrOuthecked = (status) => {
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
                        checked={inOrOuthecked("outside")}
                        style={Template.stackedCheck}
                        onChange={()=>{
                            handleInOrOutClick("outside")
                        }}
                    >
                        Outside of the vehicle
                    </CheckBox>
                    <CheckBox
                        checked={inOrOuthecked("inside")}
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
//              Package Functions               //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//

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

    const renderPropertyBoxes = () => {
        return propertyOptions().map( (opt, index) => {
            return(
                <CheckBox
                    style={Template.stackedCheck}
                    checked={propertyIsChecked(opt)}

                >

                </CheckBox>
            )
        })
    }



//----------------------------------------------//
//                                              //
//            Property Code Chunks              //
//                                              //
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V//
    const whatProperty = () => {
        return(
            <View>
                <Text>
                    What kind of property was damaged?
                </Text>

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
            return(whereWasPackageDamage())
        }
        if (personal || gov){
            return ("something else")
        }
    }


    return (
        <View >
            <Banner />
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


        </View>
        // <View>
        //     <Banner />
        //     <Text>TEST FROM PROPERTY ACCIDENT INFORMATION</Text>

        //     <View>
        //         <Text>What did you hit?</Text>
        //         <Input 
        //             size={'large'}
        //             placeholder={`What did you hit?`}
        //             onChangeText={objectHit => {
        //                 setPropertyData({
        //                     ...propertyData,
        //                     object_hit: objectHit
        //                 })
        //             }}
        //         />
        //     </View>

        //     <View>
        //         <Text>What is the address of the property you damaged?</Text>
        //         <Input 
        //             size={'large'}
        //             placeholder={`Address`}
        //             onChangeText={address => {
        //                 setPropertyData({
        //                     ...propertyData,
        //                     address: address
        //                 })
        //             }}
        //         />
        //     </View>
            
        //     <View>
        //         {propertyData.object_hit && propertyData.address ? (<ContinueButton nextPage={'property-accident-contact-information'} buttonText={'Continue'} pageName={'property-accident-information-continue-button'} />) : null}
        //     </View>
        // </View>
    )
}

export default PropertyAccidentInformation