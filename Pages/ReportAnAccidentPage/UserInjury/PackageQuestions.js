import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { CheckBox } from "@ui-kitten/components";

import { useRecoilState } from "recoil";
import { selfInjuryDataState } from "../../../Recoil/atoms";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo";

import Banner from "../../../Global/Banner";
import DynamicInput from "../../../Components/DynamicInput";
import Gradient from "../../../Components/Gradient"
import ContinueButton from "../../../Global/Buttons/ContinueButton"


let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PackageQuestions = () => {
/////////////////////////////////////////
///                                   ///
///       Preliminary Settings        ///
///                                   ///
/////////////////////////////////////////

    const [selfInjuryData, setSelfInjuryData] = useRecoilState(selfInjuryDataState)

    const [q1, setQ1] = useState("None")        // Pet ? 
    const [q2, setQ2] = useState("None")        // Species 
    const [q3, setQ3] = useState("None")        // Breed

    const [q4, setQ4] = useState("None")        // Pet ? 
    const [q5, setQ5] = useState("None")        // Species 

    const changeQ1 = (input) => {
        setQ1(input)
        setSelfInjuryData({
            ...selfInjuryData,
            animal_report: {
                pet: input
            }
        })
        changeQ2("None")
        changeQ3("None")
    }

    const changeQ2 = (input) => {
        setQ2(input)
        setSelfInjuryData({
            ...selfInjuryData,
            animal_report: {
                pet: selfInjuryData.animal_report.pet,
                species: input

            }
        })
        changeQ3(input)
    }

    const changeQ3 = (input) => {
        setQ3(input)
        setSelfInjuryData({
            ...selfInjuryData, 
            animal_report: {
                pet: selfInjuryData.animal_report.pet,
                species: selfInjuryData.animal_report.species,
                specific: input
            }
        })
    }

    const changeQ4 = (input) => {
        setQ4(input)
        setSelfInjuryData({
            ...selfInjuryData, 
            animal_report: {
                pet: selfInjuryData.animal_report.pet,
                species: selfInjuryData.animal_report.species,
                specific: selfInjuryData.animal_report.specific,
                visible_at_first: input
            }
        })
    }

    const changeQ5 = (input) => {
        setQ5(input)
        setSelfInjuryData({
            ...selfInjuryData, 
            animal_report: {
                pet: selfInjuryData.animal_report.pet,
                species: selfInjuryData.animal_report.species,
                specific: selfInjuryData.animal_report.specific,
                visible_at_first: selfInjuryData.animal_report.visible_at_first,
                detained: input
            }
        })
    }




/////////////////////////////////////////
///                                   ///
///       HANDLERS AND CHECKERS       ///
///                                   ///
/////////////////////////////////////////


    // Self explanatory
    const determineChecked = (itm, question) => {
        if (question == 2){
            if (itm == q2){
                return true
            }
            else{
                return false
            }
        }
        if (question == 3){
            if (itm == q3){
                return true
            }
            else{
                return false
            }
        }
    }
   


    // Handles Checkbox Selection or Button Selection
    const handleCheck = (itm, question) => {
        if (question == 1){
            changeQ1(itm)
        }
        if (question == 2){
            changeQ2(itm)
        }
        if (question == 3){
            changeQ3(itm)
        }
    }

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

    const checkIndex = (array, index) => {
        if (array[index]) {
            return array[index]
        }
        else{
            return null
        }
    } 


    
/////////////////////////////////////////
///                                   ///
///             RENDERINGS            ///
///                                   ///
/////////////////////////////////////////

    const renderCheckBoxList = (list, qNum) => {
        return list.map( (itm, index) => {
            return(
                <CheckBox
                    onChange={() => handleCheck(itm, qNum) }
                    checked={determineChecked(itm, qNum)}
                    key={index}
                    style={{width: 160}}
                >
                    <Text>{itm}</Text>
                </CheckBox>
            )
        })
    }

    const generateCheckBoxes = (list, qNum) => {
        let rows = renderCheckBoxList(list, qNum).length + 1 / 2
        let array = renderCheckBoxList(list, qNum)
        let rComponent = []
        let  i = 0
        while (i <= rows){
            rComponent.push(
                <View style={{marginLeft: 30, marginTop: 15, flexDirection: 'row'}}>
                    {array[i]}
                    {checkIndex(array, i + 1)}
                </View>
            )
            i = i + 2
        }
        return rComponent.map((itm, index) => {
            return(
                <View key={index}>{itm}</View>
                )
        }) 
    }

    const renderQ2 = () => {
        let possibleAnimals = []
        if (q1 == "yes"){                    // It was a Pet
            possibleAnimals = [
                "Cat", "Small dog", "Average dog", "Large dog", "Bird", "Reptile", "Other"
            ]
        } 
        if (q1 == "no"){
            possibleAnimals = [
                "Deer", "Small dog", "Average dog", "Large dog", "Cat", "Raccoon", "Bear", "Bird", "Large Bird", "Other"
            ]
        }
        if (q1 != "None"){
            return(
                <View>
                    <Text style={Template.title}>What kind of Animal was it?</Text>
                    {generateCheckBoxes(possibleAnimals, 2)}
                </View>
            )
            
        }
    }

    const renderQ3 = () => {
        if (q2 == "Other"){
            return(
                <View> 
                    <Text style={Template.title}>Please type what animal it was</Text>
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

                            placeholder={"Any Extra Information Here"}
                            onChange={input => changeQ3(input)}
                        />  
                    </View> 
                </View>
            )
        }
        if (q2.includes("og")){
            let dogList = []
            if (q2 == "Small dog"){
                dogList = [
                    "Poodle", "Chihuahua", "Shitzu", "Pomeranian", "Corgi", "Dachshund", "Beagle", "Pug", "Yorkshire Terrier"
                ]
            }
            if (q2 == "Average dog"){
                dogList = [
                    "Labrador", "Shiba Inu", "Dalmation", "Beagle", "Bulldog", "Pitbull", "Doberman", "Rottweiler", "Bloodhound", "Cocker Spaniel"
                ]
            }
            if (q2 == "Large dog"){
                dogList = [
                    "Retriever", "German Shepard", "Great Dane", "Bernese Mountain Dog", "Husky", 
                ]
            }
            dogList.push("Other / Unsure")
            return(
                <View>
                    <Text style={Template.title}>If able, please confirm the species of the dog</Text>
                    {generateCheckBoxes(dogList, 3)}
                </View>

            )
        }
        if (
            q2.includes("Bird") ||
            q2 == "Reptile"
        ){
            return(
                <View> 
                    <Text style={Template.title}>Please type what species it was, if you are able. If not, enter 'N/A'</Text>
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

                            placeholder={"Any Extra Information Here"}
                            onChange={input => changeQ3(input)}
                        />  
                    </View> 
                </View>
            )
        }

    }

    const renderQ4 = () => {
        if (
            q3 != "None" || q2 == "Cat" ||
            q2 == "Bear" || q2 == "Raccoon" ||
            q2 == "Deer"
            ){
                return(
                    <View>
                        <Text style={Template.title}>
                            Did you see the animal when you first exited your car?
                        </Text>
                        {/* Button Container */}
                        <View style={RAACollisionInfoStyles.buttonBox}>

                            {/* Yes Button */}
                            <View style={RAACollisionInfoStyles.buttonContainer}>
                                <TouchableOpacity 
                                    style={RAACollisionInfoStyles.touchable}
                                    onPress={() => {
                                        changeQ4("yes")
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
                                        changeQ4("no")
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
        
    }

    const renderQ5 = () => {
        if (q4 != "None"){
            return(
                <View>
                    <Text style={Template.title}>
                        Was the Animal detained / caught?
                    </Text>
                    {/* Button Container */}
                    <View style={RAACollisionInfoStyles.buttonBox}>

                        {/* Yes Button */}
                        <View style={RAACollisionInfoStyles.buttonContainer}>
                            <TouchableOpacity 
                                style={RAACollisionInfoStyles.touchable}
                                onPress={() => {
                                    changeQ5("yes")
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
                                    changeQ5("no")
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
    }

    const renderContinue = () => {
        if (q5 != "None"){
            return(
                <View>
                    <ContinueButton nextPage={"user-injury-extra-information"} buttonText={'Done'} nextSite={"User Injury Extra Info"}  pageName={'collision-injury-report-information-continue-button'}/>
                </View>
            )
        }
    }


    return(
        <ScrollView contentContainerStyle={{height: '200%'}}>
            <Banner />
            <Text style={Template.title}>
                Was the animal a pet of the residence? 
            </Text>
             {/* Button Container */}
             <View style={RAACollisionInfoStyles.buttonBox}>

                {/* Yes Button */}
                <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            changeQ1("yes")
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
                            changeQ1("no")
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
            <View style={{marginTop: 20}}>
                {renderQ2()}
            </View>
            <View style={{marginTop: 20}}>
                {renderQ3()}
            </View>
            <View style={{marginTop: 5}}>
                {renderQ4()}
            </View>
            <View style={{marginTop: 5}}>
                {renderQ5()}
            </View>
            <View style={{marginTop: 50, marginLeft: 30}}>
                {renderContinue()}
            </View>
        </ScrollView>
    )
}

export default PackageQuestions