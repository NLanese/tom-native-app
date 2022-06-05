import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Button, Input, CheckBox } from "@ui-kitten/components";

import Banner from "../../../Global/Banner"
import ContinueButton from "../../../Global/Buttons/ContinueButton";
import DynamicInput from "../../../Components/DynamicInput";

import { collisionDataState, accidentDataState } from "../../../Recoil/atoms";
import { useRecoilState } from "recoil";

import Gradient from "../../../Components/Gradient"

import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo"
import Template from "../../../Styles/RAA/RAATemplateStyles";


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const CollisionAccidentInformation = () => {
    const [driverLicenseAnswer, setDriverLicenseAnswer] = useState(null)
    const [driverInsuranceAnswer, setDriverInsuranceAnswer] = useState(null)
    const [collisionData, setCollisionData] = useRecoilState(collisionDataState)

    const handleInput = (id, information) => {
        const input = { ...collisionData };
		input[id] = information;
		setCollisionData(input);
    }

    const handleDriverLicense = (answer) => {
        if (answer === 'yes') {
            setDriverLicenseAnswer('yes')
        }

        if (answer === 'no') {
            setDriverLicenseAnswer('no')
        } 
    }

    const renderDriverLicense = () => {
        if (driverLicenseAnswer === 'no') {
            return (
                <View>
                    <View style={{ marginTop: 20, }}>
                        
                            <View style={{marginLeft: 30, marginBottom: 10}}>
                            <Text style={Template.subTitle}>OTHER PERSON'S LICENSE NUMBER</Text>
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

                                    placeholder={"12345-12345-12345-12345"}
                                    onChange={driverLicense => {
                                        setCollisionData({
                                            ...collisionData,
                                            contact_info: {
                                                ...collisionData.contact_info,
                                                driver_license_number: driverLicense
                                            } 
                                        })
                                    }}
                                />
                            </View>
                    </View>

                    <View style={{marginLeft: 30, marginBottom: 10}}>
                        <Text style={Template.subTitle}>OTHER PERSON'S FIRST NAME</Text>
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

                                placeholder={"John"}
                                onChange={firstname => {
                                    setCollisionData({
                                        ...collisionData,
                                        contact_info: {
                                            ...collisionData.contact_info,
                                            firstname: firstname 
                                        } 
                                    })
                                }}
                            />
                        
                    </View>

                    <View style={{marginLeft: 30, marginBottom: 10}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S LAST NAME</Text>
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

                            placeholder={"Smith"}
                            onChange={lastname => {
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        lastname: lastname 
                                    } 
                                })
                            }}
                        />
                    </View>

                    <View style={{marginLeft: 30}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S HOME ADDRESS</Text>
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

                            placeholder={"123 Streetname, Township"}
                            onChange={addy => {
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        address: addy 
                                    } 
                                })
                            }}
                        />
                    </View>
                </View>
            )
        }
    }

    const renderInsuranceInput = () => {

        if (q1 === 'no' || q2 === "no") {
            return (
                <View>
                    <View style={{ marginBottom: 10, marginLeft: 30, marginTop: 10}}>
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE PROVIDER</Text>
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

                            placeholder={"Example Insurance Company"}
                            onChange={insuranceProvider => {
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        insurance_provider: insuranceProvider
                                    } 
                                })
                            }}
                        />
                    </View>

                    <View style={{ marginLeft: 30 }}>
                    <Text style={Template.subTitle}>OTHER PERSON'S INSURANCE POLICTY NUMBER</Text>
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

                            placeholder={"12345-12345-12345-12345"}
                            onChange={insurance_policy_number => {
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        insurance_policy_number: insurance_policy_number
                                    } 
                                })
                            }}
                        />
                    </View>
                </View>
            )
        }
    }

 // ---------- INSURANCE------------
    const [q2, setQ2] = useState("none")

    const determineOutline2 = (yesNo) => {
        if (yesNo == q2){
            if (yesNo == "yes"){
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize2 = (yesNo) => {
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

    const renderInsuranceInformationButtons = () => {
        if (q1 == "yes"){
            return (
            <View style={{marginBottom: 20}}>
                <Text style={RAACollisionInfoStyles.questionText}>Was the other party willing to let you take a picture of their insurance card?</Text>

                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setDriverInsuranceAnswer('yes')
                                setQ2("yes")
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        insurance_policy_number: 'Have Picture',
                                        insurance_provider: "Have Picture"
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline2("yes")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize2("yes")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setDriverInsuranceAnswer('no')
                                setQ2("no")
                            }}
                        >
                            <View style={determineOutline2("no")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize2("no")}
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
 // ---------- INSURANCE------------


    const [isActive, setActive] = useState(false)



 // ---------- LICENSE ------------

    const [q1, setQ1] = useState("None")

    const determineOutline = (yesNo) => {
        if (yesNo == q1){
            if (yesNo == "yes"){
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize = (yesNo) => {
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


    const renderLicenseQuestion = () => {
        if (q4 != null || q3 == "no" || fire == "yes"){
            return(
            <View>
                <Text style={RAACollisionInfoStyles.questionText}>Was the other party willing to let you take a picture of their license?</Text>
                <View style={RAACollisionInfoStyles.buttonBox}>

                    <View style={RAACollisionInfoStyles.buttonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                handleDriverLicense('yes')
                                setQ1("yes")
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        driver_license_number: 'Have Picture',
                                        firstname: "Have Picture",
                                        lastname: "Have Picture",
                                        address: "Have Picture"
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline("yes")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize("yes")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={RAACollisionInfoStyles.noButtonContainer}>
                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                handleDriverLicense('no')
                                setQ1("no")
                            }}
                        >
                            <View style={determineOutline("no")}>
                                <Gradient 
                                   colorOne="#534FFF" 
                                   colorTwo="#15A1F1" 
                                    style={determineSize("no")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {renderDriverLicense()}
            </View>
        )
        }
    }


// ------------ Contact -------------

    const [whoHitFirst, setWhoHitFirst] = useState("no one")

    const determineChecked = (meThem) => {
        if (whoHitFirst == meThem){
            return true
        }
    }

    const handleCheck = (meThem) => {
        setWhoHitFirst(meThem)
        setCollisionData({...collisionData, collision_report:{
            ...collisionData.collision_report, legal_fault: meThem
        }})
    }
// ------------ Accident ------------

    const [fire, setFire] = useState()
    const [towed, setTowed] = useState()

    const [q3, setQ3] = useState("none")
    const [q4, setQ4] = useState(null)


    const determineOutline3 = (yesNo) => {
        if (yesNo == q3){
            if (yesNo == "no"){
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize3 = (yesNo) => {
        if (yesNo == q3){
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

    const determineOutline4 = (yesNo) => {
        if (yesNo == q4){
            if (yesNo == "no"){
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
            else{
                return ({ borderColor: "#444", borderWidth: 5, borderRadius: 100, marginTop: -2})
            }
        }
        else{
            return RAACollisionInfoStyles.button
        }
    }

    const determineSize4 = (yesNo) => {
        if (yesNo == q4){
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

    const renderTowed = () => {
        if (fire == "no"){
            return(
                <View>
                    <Text style={RAACollisionInfoStyles.questionText}>Did any cars need to get towed?</Text>

                    <View style={{...RAACollisionInfoStyles.buttonContainer, marginLeft: 30, marginTop: 20, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{...RAACollisionInfoStyles.touchable, marginRight: 65}}
                            onPress={() => {
                                setTowed('yes')
                                setQ4("yes")
                                setCollisionData({
                                    ...collisionData,
                                    collision_report: {
                                        ...collisionData.collision_report, 
                                        towed: true
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline4("yes")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize4("yes")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setTowed('no')
                                setQ4("no")
                                setCollisionData({
                                    ...collisionData,
                                    collision_report: {
                                        ...collisionData.collision_report, 
                                        towed: false
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline4("no")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize4("no")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
    }

    const renderAccidentQuestions = () => {
        if (whoHitFirst !== "no one"){
            return(
                <View style={{marginTop: 10, maringBottom: 10}}>
                    <Text style={RAACollisionInfoStyles.questionText}>What is the other person's phone number</Text>
                    <View style={{marginLeft: 30, marginTop: 15}}>
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
                            onChange={phone => {
                                setCollisionData({
                                    ...collisionData,
                                    contact_info: {
                                        ...collisionData.contact_info,
                                        phone_number: phone
                                    } 
                                })
                            }}
                        />
                    </View>
                    
                    <Text style={RAACollisionInfoStyles.questionText}>Was there any fire or explosions?</Text>

                    <View style={{...RAACollisionInfoStyles.buttonContainer, marginLeft: 30, marginTop: 20, flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={{...RAACollisionInfoStyles.touchable, marginRight: 65}}
                            onPress={() => {
                                setFire('yes')
                                setQ3("yes")
                                setCollisionData({
                                    ...collisionData,
                                    collision_report: {
                                        ...collisionData.collision_report, 
                                        fire_or_explode: true,
                                        towed: true
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline3("yes")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize3("yes")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>Yes</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={RAACollisionInfoStyles.touchable}
                            onPress={() => {
                                setFire('no')
                                setQ3("no")
                                setCollisionData({
                                    ...collisionData,
                                    collision_report: {
                                        ...collisionData.collision_report, 
                                        fire_or_explode: false
                                    }
                                })
                            }
                        }>
                            <View style={determineOutline3("no")}>
                                <Gradient 
                                    colorOne="#534FFF" 
                                    colorTwo="#15A1F1" 
                                    style={determineSize3("no")}
                                >
                                    <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                                </Gradient>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {renderTowed()}
                </View>
            )
        }
    }

// -------- minor Renderers -----------

    const renderContinue = () => {
        if ( 
            (q1 == "yes" && q2 == "yes") ||
            (
                collisionData.contact_info.address !== null &&
                collisionData.contact_info.driver_license_number != null &&
                collisionData.contact_info.firstname != null &&
                collisionData.contact_info.lastname != null &&
                collisionData.contact_info.insurance_policy_number != null &&
                collisionData.contact_info.insurance_provider != null &&
                collisionData.contact_info.phone_number != null
            )
        ){
            return(
                <View style={{marginTop: 60, marginLeft: 30}}>
                    <ContinueButton nextPage={'collision-extra-info'} nextSite={'Collsion Extra Information'} pageName={'collision-accident-information-continue-button'} buttonText={'Done'} />
                </View>
            )
        }
    }





// ------------ RENDER ------------
    return (
        <ScrollView contentContainerStyle={{ height: "auto" }}>
            <Banner />
            <Text style={RAACollisionInfoStyles.questionText}>Who is legally at fault?</Text>

            <View style={{flexDirection: 'row', marginLeft: 30, width: maxWidth - 60, marginTop: 15}}>
                <CheckBox
                    checked={determineChecked("Other Party Hit Me")}
                    onChange={() => handleCheck("Other Party Hit Me")}
                >
                    <Text>They are</Text>
                </CheckBox>
                <CheckBox
                    style={{marginLeft: 20}}
                    checked={determineChecked("I caused the accident")}
                    onChange={() => handleCheck("I caused the accident")}
                >
                    <Text>I am</Text>
                </CheckBox>
                 <CheckBox
                    style={{marginLeft: 20}}
                    checked={determineChecked("Unsure")}
                    onChange={() => handleCheck("Unsure")}
                >
                    <Text>Unsure</Text>
                </CheckBox>
            </View>

            {renderAccidentQuestions()}

            {renderLicenseQuestion()}

            {renderInsuranceInformationButtons()}

            {renderInsuranceInput()}

            {renderContinue()}
          
            
        </ScrollView>
    )
}

export default CollisionAccidentInformation