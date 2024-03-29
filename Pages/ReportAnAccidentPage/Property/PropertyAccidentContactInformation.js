import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import DynamicInput from "../../../Components/DynamicInput";

import { propertyDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PropertyAccidentContactInformation = () => {

/////////////////////////
///                   ///
///    PRELIMINARY    ///
///                   ///
/////////////////////////

     // The details of the accident
     const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    console.log(propertyData)

     // Tracks for the Done Button to appear
     const [answeredQs, setAnsweredQs] = useState({
         types: false,
         kind: false
     })

    // ContinueButton Props
    let route = 'property-accident-safety-equipment'
    let site  = 'Safety Equipment'
    if ( propertyData.types_of_damage.pack == true  ){
        route = 'property-package-info'
        site  = 'Package Damage Information'
    }

//////////////////////////
///                    ///
///     RENDERINGS     ///
///                    ///
//////////////////////////

    // Based on what info is in the property data, it renders certain questions
    const determineQuestions = () => {
        // returnChunk. This will hold one, or both, of the prop / pack questions
        let rChunk = []

        // Personal or Property Questions
        if (propertyData.types_of_damage.pack === true || propertyData.types_of_damage.personal === true){
            rChunk.push(personalProperty())
        }

        // Gov Questions
        if (propertyData.types_of_damage.gov){
            rChunk.push(govProperty())
        }

        // Returns the / both Chunk(s)
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
        if (propertyData.types_of_damage.gov === true && (propertyData.types_of_damage.pack === true || propertyData.types_of_damage.personal === true)){
            // All Qs answered
           if (
               propertyData.contact_info.town != null &&
               (propertyData.contact_info.phoneNumber != null || propertyData.contact_info.phoneNumber2 != null) &&
               propertyData.contact_info.name != null &&
               propertyData.contact_info.address != null
           ){
               return(
                    <View style={{marginLeft: 30, marginTop: 50}}>
                        <ContinueButton nextPage={route} nextSite={site}  buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                    </View>
               )
           }
        }
        // Else if not all questions are shown,
        else {

            // If only pack/personal questions
            if (propertyData.types_of_damage.pack === true || propertyData.types_of_damage.personal === true){
                if (
                    (propertyData.contact_info.phoneNumber != null) &&
                    propertyData.contact_info.name != null &&
                    propertyData.contact_info.address != null
                ){
                    if (propertyData.types_of_damage.pack){
                        return(
                            <View style={{marginLeft: 30, marginTop: 50}}>
                                <ContinueButton nextPage={route} nextSite={site}  buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                            </View>
                        )
                    }
                    else{
                        return(
                            <View style={{marginLeft: 30, marginTop: 50}}>
                                <ContinueButton nextPage={route}  nextSite={site}   buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
                            </View>
                        )
                    }
                }
            }

            // Only if gov questions
            else{
                if (
                    propertyData.contact_info.phoneNumber2 != null &&
                    propertyData.contact_info.town != null
                ){
                    return(
                        <View style={{marginLeft: 30, marginTop: 50}}>
                            <ContinueButton nextPage={route}  nextSite={site}  buttonText={'Done'} pageName={'property-accident-contact-information-continue-button'} />
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
                <View style={{marginLeft: 30, marginTop: 5, marginBottom: 10}}>
                    <DynamicInput 
                        activeColorOne="#534FFF" 
                        activeColorTwo="#15A1F1"
                        activeTextStyle={Template.activeTextStyle}

                        height={50}
                        width={maxWidth - 60}

                        borderLeftRightWidth={6}
                        borderTopBottomWidth={6}
                        borderRadius={20}

                        inactiveColor="#ddd" 
                        inactiveTextStyle={Template.inactiveTextStyle}

                        placeholder={"John Smith"}
                        onChange={(content) => {
                            setName(content)
                            setPropertyData({
                                ...propertyData,
                                contact_info: {
                                    ...propertyData.contact_info, name: content
                                }
                            })
                        }}
                    />
                </View>
                

                <Text style={Template.title}>
                    What was the Phone Number of the personal property's owner?
                </Text>
                <View style={{marginLeft: 30, marginTop: 5, marginBottom: 10}}>
                    <DynamicInput 
                        activeColorOne="#534FFF" 
                        activeColorTwo="#15A1F1"
                        activeTextStyle={Template.activeTextStyle}

                        height={50}
                        width={maxWidth - 60}

                        borderLeftRightWidth={6}
                        borderTopBottomWidth={6}
                        borderRadius={20}

                        inactiveColor="#ddd" 
                        inactiveTextStyle={Template.inactiveTextStyle}

                        placeholder={"123-456-7890"}
                        onChange={(content) => {
                            setPhone(content)
                            setPropertyData({
                                ...propertyData,
                                contact_info: {
                                    ...propertyData.contact_info, phoneNumber: content
                                }
                            })
                        }}
                    />
                </View>
            

                <Text style={Template.title}>
                    What is the Home Address of the personal property's owner?
                </Text>
                <View style={{marginLeft: 30, marginTop: 5, marginBottom: 10}}>
                    <DynamicInput 
                        activeColorOne="#534FFF" 
                        activeColorTwo="#15A1F1"
                        activeTextStyle={Template.activeTextStyle}

                        height={50}
                        width={maxWidth - 60}

                        borderLeftRightWidth={6}
                        borderTopBottomWidth={6}
                        borderRadius={20}

                        inactiveColor="#ddd" 
                        inactiveTextStyle={Template.inactiveTextStyle}

                        placeholder={"123 Street, Township"}
                        onChange={(content) => {
                            setAddress(content)
                            setPropertyData({
                                ...propertyData,
                                contact_info: {
                                    ...propertyData.contact_info, address: content
                                }
                            })
                        }}
                    />
                </View>
                
                
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
            <View style={{height: 'auto'}}>

                <Text style={Template.title}>
                   What is the Name of the Township whose government property was damaged?
                </Text>
                <View style={{marginLeft: 30, marginTop: 5, marginBottom: 10}}>
                    <DynamicInput 
                        activeColorOne="#534FFF" 
                        activeColorTwo="#15A1F1"
                        activeTextStyle={Template.activeTextStyle}

                        height={50}
                        width={maxWidth - 60}

                        borderLeftRightWidth={6}
                        borderTopBottomWidth={6}
                        borderRadius={20}

                        inactiveColor="#ddd" 
                        inactiveTextStyle={Template.inactiveTextStyle}

                        placeholder={"Township"}
                        onChange={(content) => {
                            setTown(content)
                            setPropertyData({
                                ...propertyData,
                                contact_info: {
                                    ...propertyData.contact_info, town: content
                                }
                            })
                        }}
                    />
                </View>

                <Text style={Template.title}>
                   What is the Phone Number for the organization who owns the effected property?
                </Text>
                <View style={{marginLeft: 30, marginTop: 5, marginBottom: 10}}>
                    <DynamicInput 
                        activeColorOne="#534FFF" 
                        activeColorTwo="#15A1F1"
                        activeTextStyle={Template.activeTextStyle}

                        height={50}
                        width={maxWidth - 60}

                        borderLeftRightWidth={6}
                        borderTopBottomWidth={6}
                        borderRadius={20}

                        inactiveColor="#ddd" 
                        inactiveTextStyle={Template.inactiveTextStyle}

                        placeholder={"Township"}
                        onChange={(content) => {
                            setPhone2(content)
                            setPropertyData({
                                ...propertyData,
                                contact_info: {
                                    ...propertyData.contact_info, phoneNumber2: content
                                }
                            })
                        }}
                    />
                </View>


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
            <ScrollView contentContainerStyle={{height: 'auto', paddingBottom: maxHeight * 0.22}}>
                {determineQuestions()}
                {renderContinue()}
            </ScrollView>
        </View>
    )
}

export default PropertyAccidentContactInformation