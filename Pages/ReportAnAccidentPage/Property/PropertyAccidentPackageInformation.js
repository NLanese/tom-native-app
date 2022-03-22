import React, { useEffect, useState} from "react"
import { ScrollView, View, Text, Dimensions } from "react-native"

import Banner from "../../../Global/Banner"
import Gradient from "../../../Components/Gradient"
import DynamicInput from "../../../Components/DynamicInput"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

import { CheckBox } from "@ui-kitten/components"

import { useRecoilState } from "recoil"
import { propertyDataState } from "../../../Recoil/atoms"

import Template from "../../../Styles/RAA/RAATemplateStyles"

let maxWidth = Dimensions.get('window').width
let maxHeight = Dimensions.get('window').height

const PropertyPackageInfo = () => {
/////////////////////////////////////////
///                                   ///
///     STATES AND PRELIM VALUES      ///
///                                   ///
/////////////////////////////////////////

    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)

    // How did packages get damaged  -- Not Optional
    const [q1, setQ1] = useState([])
    let q1List = ["Dropped", "Run Over", "Broke Inside Car", "Lost / Stolen", "Other"] 
    const changeQ1 = (input) => {
        setDropped(null)
        setHowBrokeInside([])
        setQ2("None")
        setQ3("None")
        setQ1(input)
        setPropertyData({
            ...propertyData,
            package_report: {
                how_did_damage_occur: input
            }
        })
    }

    // How many packages were dropped? -- Optional
    const [dropped, setDropped] = useState(null)
    const changeDrop = (input) => {
        setDropped(input)
        setPropertyData({
            ...propertyData,
            package_report: {
                ...propertyData.package_report,
                how_many_carried_when_dropped: input
            }
        })
    } 

    // How did the package break inside of the car
    const [howBrokeInside, setHowBrokeInside] = useState([])
    const changeHowBroke = (input) => {
        setHowBrokeInside(input)
        setPropertyData({
            ...propertyData,
            package_report: {
                ...propertyData.package_report,
                how_did_the_package_break_in_the_car: input
            }
        })

    }
    const changeOtherInCar = (input) => {
        setPropertyData({
            ...propertyData,
            package_report: {
                ...propertyData.package_report,
                how_did_the_package_break_in_the_car: input
            }
        })
    }
    
    // If Stolen or Run Over, where was it?
    const [whereWasThePackage, setWhereWasThePackage] = useState("None")
    const changeWherePackageWas = (input) => {
        setWhereWasThePackage(input)
        setPropertyData({
            ...propertyData,
            package_report: {
                ...propertyData.package_report,
                where_was_the_package: input
            }
        })
    }

    const [q2, setQ2] = useState("None")

    const [q3, setQ3] = useState("None")




    // Question Data
    let qArray = {1: q1, 2: q2, 3: q3, drop: dropped, brokeInside: howBrokeInside, where: whereWasThePackage}
    let setQArray = { 
        1: changeQ1, 2: setQ2, 3: setQ3, 
        drop: changeDrop, brokeInside: changeHowBroke, other_in_car: changeOtherInCar, where: setWhereWasThePackage
    }


/////////////////////////////////////////
///                                   ///
///       HANDLERS AND CHECKERS       ///
///                                   ///
/////////////////////////////////////////

    // Determines if checkboxes are checked
    const isChecked = (itm, qNum, oneAnswer) => {
        if (oneAnswer){
            if (itm == qArray[qNum]){
                return true
            } else { return false}
        }
        else{
            let currentAnswers = qArray[qNum]
            if (currentAnswers.includes(itm)){
                return true
            } else { return false }
        }
    }

    // Takes an input to setQuestions for ONE Answer Questions
    const handleOneAnswer = (itm, qNum) => {
        if (itm == "CLEAR"){
            setQArray[qNum]([])
        }
        else{
            setQArray[qNum](itm)
        }
    }

    // Takes an input to setQuestions for TWO Answer Questions
    const handleMultipleAnswer = (itm, qNum) => {
        let selectedQArray = [...qArray[qNum]]
        if (itm == "CLEAR"){
            setQArray[qNum]([])
        }
        else if (selectedQArray.includes(itm)){
            let newArray = selectedQArray.filter( (itm2) => {
                if (itm2 != itm){
                    return itm2
                }
            })
            setQArray[qNum](newArray)
        }
        else if (!selectedQArray.includes(itm)){
            selectedQArray.push(itm)
            let newArray = [...selectedQArray]
            setQArray[qNum](newArray)
        }
    }

    // Checks to see if the index exists in the array. Returns it if true
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
///     GENERATORS AND RENDERINGS     ///
///                                   ///
/////////////////////////////////////////

    // DO NOT USE THIS
    const renderCheckBoxList = (list, qNum, oneAnswer) => {
        let handleAnswer = handleOneAnswer
        if (!oneAnswer){
            handleAnswer = handleMultipleAnswer
        }
        return list.map( (itm, index) => {
            return(
                <CheckBox
                    onChange={() => handleAnswer(itm, qNum)}
                    checked={isChecked(itm, qNum)}
                    key={index}
                    style={{width: 160}}
                >
                    <Text>{itm}</Text>
                </CheckBox>
            )
        })
    }

    // Generates Check Boxes in rows of twos
    const generateCheckBoxes = (list, qNum, oneAnswer) => {
        let rows = renderCheckBoxList(list, qNum, oneAnswer).length + 1 / 2
        let array = renderCheckBoxList(list, qNum, oneAnswer)
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

    // Generates a yes and no button
    const generateYesNoButtons = (qNum) => {
        {/* Button Container */}
        <View style={RAACollisionInfoStyles.buttonBox}>

            {/* Yes Button */}
            <View style={RAACollisionInfoStyles.buttonContainer}>
                <TouchableOpacity 
                    style={RAACollisionInfoStyles.touchable}
                    onPress={() => {
                        changeQ("yes", qNum)
                    }}
                >
                    <View style={determineOutline("yes", qNum)}>
                        <Gradient
                            colorOne="#534FFF" 
                            colorTwo="#15A1F1" 
                            style={determineSize("yes", qNum)}
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
                        changeQ("no", qNum)
                    }}
                >
                    <View style={determineOutline("no", qNum)}>
                        <Gradient 
                            colorOne="#534FFF" 
                            colorTwo="#15A1F1" 
                            style={determineSize("no", qNum)}
                        >
                            <Text style={RAACollisionInfoStyles.buttonText}>No</Text>
                        </Gradient>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    }

    // Generates a Dynamic Input
    const generateDynamicInput = (qNum) => {
        return (
            <View style={{marginTop: 10, marginLeft: 30}}>
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

                    placeholder={"Your Answer Here"}
                    onChange={input => handleOneAnswer(input, qNum)}
                />  
            </View>
        )
    } 


/////////////////////////////////////////
///                                   ///
///         PARTIAL RENDERINGS        ///
///                                   ///
/////////////////////////////////////////

    // Ask how the package was dropped
    const renderDropped = () => {
        if (q1.length > 0){
            if (
                q1.includes("Dropped")
            ){
                return(
                    <View>
                        <Text style={Template.title}>How many packages were you carrying when you dropped them?</Text>
                        {generateDynamicInput('drop')}
                    </View>
                )
            }
        }
    }

    // Ask How it broke inside of the vehicle
    const renderBrokeInsideCar = () => {
        if (q1.length > 0){
            if (
                q1.includes("Broke Inside Car")
            ){
                let possibleWaysToBreak = [
                    "Not Strapped Down", "Smashed by bigger package", "Got Wet", "Other"
                ]
                const otherEntry = () => {
                    if (howBrokeInside == "Other"){
                        return (
                            <View>
                                {generateDynamicInput('other_in_car')}
                            </View>
                        )
                    }
                }
                return(
                    <View>
                        <Text style={Template.title}>How did the package(s) break / get damaged inside the car?</Text>
                        {generateCheckBoxes(possibleWaysToBreak, 'brokeInside', false)}
                        {otherEntry()}
                    </View>
                )
            }
        }
    }

    // Ask where it was when stolen or run over 
    const renderWhereWasPackage = () => {
        if (q1.length > 0){
            if (
                q1.includes("Stolen / Lost") ||
                q1.includes("Run Over")
            ){
                let possibleLocations = [
                    "Beside my car (on road)", "Beside my car (in driveway)", "On Street", "On Sidewalk", "On Lawn", "On Front Steps"
                ]
                return(
                    <View>
                        <Text style={Template.title}>Where was the package when this occured?</Text>
                        {generateCheckBoxes(possibleLocations, 'where', true)}
                    </View>
                )
            }
        }
    }

    // Determines whether the Continue Button should appear or not
    const renderContinue = () => {
        let passing = true
        if (q1.length < 1){
            passing = false
        }
        if ( q1.includes("Dropped")){
            if (dropped == null){
                passing = false
            }
        }
        if ( q1.includes("Broke Inside Car")){
            if (howBrokeInside.length < 1){
                passing = false
            }
        }
        if ( q1.includes("Broke Inside Car")){
            if (howBrokeInside.length < 1){
                passing = false
            }
        }
        if ( q1.includes("Lost / Stolen") || q1.includes("Run Over")){
            if (whereWasThePackage == null){
                passing = false
            }
        }
        if (passing){
            return(
                <View style={{marginLeft: 30, marginTop: 50}}>
                    <ContinueButton nextPage={'property-accident-safety-equipment'} nextSite={'Safety Equipment'} buttonText={'Done'} pageName={'property-accident-information-continue-button'} />
                </View>
                )
        }
    }



/////////////////////////////////////////
///                                   ///
///           MAIN RENDERING          ///
///                                   ///
/////////////////////////////////////////

    console.log(propertyData)

    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: '200%'}}>
                <Text style={Template.title}>How were the package(s) damaged? Check all that apply.</Text>
                <View>
                    {generateCheckBoxes(q1List, 1, false)}
                    {renderDropped()}
                    {renderBrokeInsideCar()}
                    {renderWhereWasPackage()}
                    {renderContinue()}
                </View>
            </ScrollView>
        </View>
    )
}
export default PropertyPackageInfo