import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input } from "@ui-kitten/components";

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

const PropertyAccidentContactInformation = () => {

//----------------------------------------------\\
//                                              \\
//                 GLOBAL STUFF                 \\
//                                              \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\


    // The details of the accident
    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    // Determines which field the user is in
    const [activeField, setActiveField] = useState("none")

    // Sets the height of the scroll view
    let defaultHeight = maxHeight
    if (propertyData.types_of_damage.gov && (propertyData.types_of_damage.pack || propertyData.types_of_damage.personal)){
        defaultHeight = maxHeight + 300
    }

    // Self Explanatory
    const determineStyle = (field) => {
        if (activeField == field){
            return {...Template.activeInput, marginLeft: 30, marginTop: 10, width: maxWidth - 60}
        }
        else{
            return {...Template.inactiveInput, marginLeft: 30, marginTop: 10, width: maxWidth - 60}
        }
    }

    // Self Explanatory
    const determineColor = (field) => {
        if (activeField == field){
            return "white"
        }
        else{
            return "#888"
        }
    }

    // Based on what info is in the property data, it renders certain questions
    const determineQuestions = () => {
        let rChunk = []
        let i = 0
        if (propertyData.types_of_damage.pack || propertyData.types_of_damage.personal){
            i++
            rChunk.push(personalProperty())
        }
        if (propertyData.types_of_damage.gov){
            i++
            rChunk.push(govProperty())
        }
        return rChunk.map( (chunk, index) => {
            return(
                <View key={index}>
                    {chunk}
                </View>
            )
        })
    }

    // Determines Continue Button
    const renderContinue = () => {
        
        // If all questions are rendered
        if (propertyData.types_of_damage.gov && (propertyData.types_of_damage.pack || propertyData.types_of_damage.personal)){
            console.log("all apply")
            console.log(propertyData)
            console.log(propertyData.contact_info.town != null)
            console.log(propertyData.contact_info.phoneNumber != null)
            console.log(propertyData.contact_info.name != null)
            // All Qs answered
           if (
               propertyData.contact_info.town != null &&
               (propertyData.contact_info.phoneNumber != null || propertyData.contact_info.phoneNumber2 != null) &&
               propertyData.contact_info.name != null &&
               propertyData.contact_info.address != null
           ){
               return(
                    <View style={{marginLeft: 30, marginTop: 50}}>
                        <ContinueButton nextPage={'property-accident-safety-equipment'} buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                    </View>
               )
           }
        }
        // Else if not all questions are shown,
        else {

            // If only pack/personal questions
            if (propertyData.types_of_damage.pack || propertyData.types_of_damage.personal){
                if (
                    (propertyData.contact_info.phoneNumber != null) &&
                    propertyData.contact_info.name != null &&
                    propertyData.contact_info.address != null
                ){
                    return(
                        <View style={{marginLeft: 30, marginTop: 50}}>
                            <ContinueButton nextPage={'property-accident-safety-equipment'} buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                        </View>
                    )
                }
            }

            // Only if gov questions
            else{
                console.log("Federal business")
                if (
                    propertyData.phoneNumber2 != null &&
                    propertyData.town != null
                ){
                    return(
                        <View style={{marginLeft: 30, marginTop: 50}}>
                            <ContinueButton nextPage={'property-accident-safety-equipment'} buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                        </View>
                    )
                }
            }    
        }
    }



//----------------------------------------------\\
//                                              \\
//      PERSONAL PROP QUESTIONS AND CODE        \\
//                                              \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)

    const personalProperty = () => {
        return(
            <View>

                <Text style={Template.title}>
                    What was the Full Name of the personal property's owner?
                </Text>
                <Input
                    onPressIn={() => setActiveField("name")} 
                    value={name}
                    textStyle={{color: determineColor("name")}}
                    onKeyPress={() => setActiveField("name")}
                    onChangeText={(content) => {
                        setName(content)
                        setPropertyData({
                            ...propertyData,
                            contact_info: {
                                ...propertyData.contact_info, name: content
                            }
                        })
                    }}
                    style={determineStyle("name")}
                />

                <Text style={Template.title}>
                    What was the Phone Number of the personal property's owner?
                </Text>
                <Input
                    onPressIn={() => setActiveField("phone")} 
                    value={phone}
                    textStyle={{color: determineColor("phone")}}
                    onKeyPress={() => setActiveField("phone")}
                    onChangeText={(content) => {
                        setPhone(content)
                        setPropertyData({
                            ...propertyData,
                            contact_info: {
                                ...propertyData.contact_info, phoneNumber: content
                            }
                        })
                    }}
                    style={determineStyle("phone")}
                />

                <Text style={Template.title}>
                    What is the Home Address of the personal property's owner?
                </Text>
                <Input
                    onPressIn={() => setActiveField("addy")} 
                    value={address}
                    textStyle={{color: determineColor("addy")}}
                    onKeyPress={() => setActiveField("addy")}
                    onChangeText={(content) => {
                        setAddress(content)
                        setPropertyData({
                            ...propertyData,
                            contact_info: {
                                ...propertyData.contact_info, address: content
                            }
                        })
                    }}
                    style={determineStyle("addy")}
                />
                
            </View>
        )
    }


//----------------------------------------------\\
//                                              \\
//         GOV PROP QUESTIONS AND CODE          \\
//                                              \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    const [town, setTown] = useState(null)
    const [phone2, setPhone2] = useState(null)

    const govProperty = () => {
        return(
            <View>

                <Text style={Template.title}>
                   What is the Name of the Township whose government property was damaged?
                </Text>
                <Input
                    onPressIn={() => setActiveField("town")} 
                    value={town}
                    onKeyPress={() => setActiveField("town")}
                    textStyle={{color: determineColor("town")}}
                    onChangeText={(content) => {
                        setTown(content)
                        setPropertyData({
                            ...propertyData,
                            contact_info: {
                                ...propertyData.contact_info, town: content
                            }
                        })
                    }}
                    style={determineStyle("town")}
                />

                <Text style={Template.title}>
                   What is the Phone Number for the government who owns the effected property?
                </Text>
                <Input
                    onPressIn={() => setActiveField("phone2")} 
                    value={phone2}
                    textStyle={{color: determineColor("phone2")}}
                    onKeyPress={() => setActiveField("phone2")}
                    onChangeText={(content) => {
                        setPhone2(content)
                        setPropertyData({
                            ...propertyData,
                            contact_info: {
                                ...propertyData.contact_info, phoneNumber2: content
                            }
                        })
                    }}
                    style={determineStyle("phone2")}
                />


            </View>
        )
    }



//----------------------------------------------\\
//                                              \\
//                  MAIN RENDER                 \\
//                                              \\
//_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V\\

    return (
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: defaultHeight}}>
                {determineQuestions()}
                {renderContinue()}
            </ScrollView>
        </View>
    )
}

export default PropertyAccidentContactInformation