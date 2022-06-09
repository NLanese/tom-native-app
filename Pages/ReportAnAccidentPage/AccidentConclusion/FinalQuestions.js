import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";

import { CheckBox } from "@ui-kitten/components";

import { useNavigation } from "@react-navigation/native";

import { useRecoilState } from "recoil";
import { accidentDataState, websiteState} from "../../../Recoil/atoms";

import Template from "../../../Styles/RAA/RAATemplateStyles";
import { RAACollisionInfoStyles } from "../../../Styles/RAA/RAACollisionInfo";

import Banner from "../../../Global/Banner";
import DynamicInput from "../../../Components/DynamicInput";
import Gradient from "../../../Components/Gradient"
import ContinueButton from "../../../Global/Buttons/ContinueButton"

let maxWidth = Dimensions.get('window').width

const FinalQuestions = () => {
    const navigation = useNavigation()
/////////////////////////////////////////
///                                   ///
///       Preliminary Settings        ///
///                                   ///
/////////////////////////////////////////

    const [accidentState, setAccidentState] = useRecoilState(accidentDataState)
    const [website, setWebsite] = useRecoilState(websiteState)

    const [q1, setQ1] = useState("empty")        // Police Report
    const [q2, setQ2] = useState("empty")        // Amazon Logo
    const [q3, setQ3] = useState("empty")        // Any Bystanders

    const [q4, setQ4] = useState({              // Police Report
        officer_name: "",
        officer_township: "",
        report_number: ""
    })        
    const [q5, setQ5] = useState({              // Bystander Contact Info
        fullname: "",
        phoneNumber: ""
    })
        

    // Height Setter
    const [theHeight, setTheHeight] = useState(100)


/////////////////////////////////////////
///                                   ///
///         Question Changers         ///
///                                   ///
/////////////////////////////////////////

    const changeQ1 = (input) => {       // Police Report?
        if (input != q1){
            setQ1(input)                // Police Report?
            setQ4({                     // Police Report
                officer_name: "",
                officer_township: "",
                report_number: ""
            })                
        }
        if (input != "Yes"){
            if (q3 == "no"){
                setTheHeight(100)
            }
        }
    }

    const changeQ2 = (input) => {       // Amazon Logo?
        if (input != q2){
            setQ2(input)                // Amazon Logo
        }
    }

    const changeQ3 = (input) => {       // Bystanders?
        if (input != q3){
            setQ3(input)                // Bystanders?
        }
    }

    const changeQ4 = (input, p) => {    // Police Report
        let part
        if (p == 1){                    // Officer Name
            part = "officer_name"
        }
        if (p == 2){                    // Township
            part = "officer_township"
        }
        if(p == 3){                     // Report Number
            part = "report_number"
        }
        setQ4({ ...q4, [part]: input })
    }

    const changeQ5 = (input, p) => {       // Bystander Info
        let part
        if (p == 1){
            part = "fullname"
        }
        if (p == 2){
            part = "phoneNumber"
        }
        setQ5({ ...q5, [part]: input })
    }


    // An Object that has a key matching every answer
    let answers =  {
        1 : q1,
        2 : q2,
        3 : q3,
        4 : q4,
        5 : q5
    }

    // Compares the input to the corresponding q number
    const checkAnswer = (qNum, itm) => {
        if (answers[qNum].includes(itm)){
            return true
        }
    }

    // This allows you to handle any submission with one object
    let handleSubmission = {
        1 : changeQ1,
        2 : changeQ2,
        3 : changeQ3,
        4 : changeQ4,
        5 : changeQ5
    }


   

/////////////////////////////////////////
///                                   ///
///       HANDLERS AND CHECKERS       ///
///                                   ///
/////////////////////////////////////////

    // Self Explanatory
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

    // Self Explanatory
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

    // Checks to see if an index exists in a given array
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

    // Does not create anything, makes the list to be called in the function below
    const renderCheckBoxList = (list, qNum) => {
        return list.map( (itm, index) => {
            return(
                <CheckBox
                    onChange={() => handleSubmission[qNum](itm, qNum) }
                    checked={checkAnswer(qNum, itm)}
                    key={index}
                    style={{width: 160}}
                >
                    <Text>{itm}</Text>
                </CheckBox>
            )
        })
    }

    // Generates the Checkboxes
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

    // Renders Continue when ready
    const renderContinue = () => {
        if (
            (q1 != 'empty' && q2 != "empty" && q3 != "empty" ) &&
            ((q1 == "Yes" && q4.officer_name != "" && q4.officer_township != "" && q4.report_number != "") || (q1 != "Yes")) && 
            ((q3 == "yes" &&  q5.fullname != "" && q5.phoneNumber != "") || (q3 != 'yes'))
        ){
            return(
                <View style={{marginLeft: 30, marginTop: 40}}>
                    <TouchableOpacity onPress={() => {
                        setAccidentState({
                            ...accidentState,
                            accident_report: {
                                has_logo: q2,
                                police_report: {
                                    filed: q1,
                                    ...q4
                                },
                                bystander: {
                                    present: q3,
                                    ...q5
                                }
                            }
                        })
                        setWebsite({current: "Finished Reporting", previous: website.current, saved: "Finished Reporting"})
                        navigation.navigate("finish")
                    }}>
                        <Gradient
                            colorOne="#534FFF"
                            colorTwo="#15A1F1"
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 50.5,
                                justifyContent: 'center',
                                alightItems: 'center',
                                shadowColor: '#000000',
                                shadowOffset: {width: 6, height: 25},
                                shadowOpacity: 0.14,
                                shadowRadius: 13,
                            }}
                        >
                            <Text style={{
                                fontFamily: "GilroySemiBold",
                                fontSize: 25,
                                letterSpacing: -0.5,
                                color: '#FFFFFF',
                                textAlign: 'center'
                            }}
                            > 
                                Done 
                            </Text>
                    </Gradient>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    // Generates a yes and no button
    const generateYesNoButtons = (qNum) => {
        return(
            <View style={RAACollisionInfoStyles.buttonBox}> 
                 {/* Yes Button */}
                 <View style={RAACollisionInfoStyles.buttonContainer}>
                    <TouchableOpacity 
                        style={RAACollisionInfoStyles.touchable}
                        onPress={() => {
                            handleSubmission[qNum]("yes")
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
                            handleSubmission[qNum]("no")
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
        )
    }

    // Generates a Dynamic Input
    const generateDynamicInput = (qNum, p) => {
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
                    onChange={input => {
                        handleSubmission[qNum](input, p)
                    }}
                />  
            </View>
        )
    } 


/////////////////////////////////////////
///                                   ///
///             QUESTIONS             ///
///                                   ///
/////////////////////////////////////////

    const renderQ1 = () => {
        let options = [
            "No", "Yes", "Unnecessary", "I will soon"
        ]
        return(
            <View>
                <Text style={Template.title}>Have you filed a police report?</Text>
                {generateCheckBoxes(options, 1)}
            </View>
        )
    }

    const renderQ2 = () => {
        return(
            <View>
                <Text style={Template.title}>Is there an Amazon Logo on your vehicle or attire?</Text>
                {generateYesNoButtons(2)}
            </View>
        )
    }

    const renderQ3 = () => {
        return(
            <View>
                <Text style={Template.title}>Were there any people who saw the accident and stayed nearby?</Text>
                {generateYesNoButtons(3)}
            </View>
        )
    }

    const renderQ4 = () => {
        if (q1 == "Yes"){
            if (theHeight < 139){
                setTheHeight(theHeight + 50)
            }
            return(
                <View>
                    <Text style={Template.title}>What was the Reporting Officer's name?</Text>
                    {generateDynamicInput(4, 1)}

                    <Text style={Template.title}>What was the Reporting Officer's Township name?</Text>
                    {generateDynamicInput(4, 2)}

                    <Text style={Template.title}>What was Accident Report Number?</Text>
                    {generateDynamicInput(4, 3)}
                </View>
            )
        }
    }

    const renderQ5 = () => {
        if (q3 == "yes"){
            if (q1 == "Yes" && theHeight < 209){
                setTheHeight(210)
            }
            else if (theHeight < 149){
                setTheHeight(150)
            }
            let index = 0
            return (
                <View>
                    <Text style={Template.title}>Please list the contact info of any bystanders if possible</Text>
                    <Text style={Template.subTitle2}>If not, just enter "NA" in the fields</Text>
                    {renderContactInfo()}
                </View>
            )
        }
    }

    const renderContactInfo = () => {
        return(
            <View>
                <Text style={Template.title}>What was the bystander's full name</Text>
                {generateDynamicInput(5, 1)}

                <Text style={Template.title}>What was the bystander's phone number</Text>
                {generateDynamicInput(5, 2)}

            </View>
        )
    }



/////////////////////////////////////////
///                                   ///
///            MAIN RENDER            ///
///                                   ///
/////////////////////////////////////////

    let screenHeight = `${theHeight}%`

    return(
        <View>
            <Banner />
            <ScrollView contentContainerStyle={{height: 'auto', paddingBottom: 200}}>
                {renderQ1()}
                {renderQ2()}
                {renderQ3()}
                {renderQ4()}
                {renderQ5()}
                {renderContinue()}
            </ScrollView>
        </View>
    )

}

export default FinalQuestions