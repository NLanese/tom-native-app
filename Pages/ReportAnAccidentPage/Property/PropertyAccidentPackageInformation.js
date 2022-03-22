import React, { useEffect, useState} from "react"
import { ScrollView, View, Text } from "react-native"

import Banner from "../../../Global/Banner"
import Gradient from "../../../Components/Gradient"
import DynamicInput from "../../../Components/DynamicInput"

import { CheckBox } from "@ui-kitten/components"

import { useRecoilState } from "recoil"
import { propertyDataState } from "../../../Recoil/atoms"

import Template from "../../../Styles/RAA/RAATemplateStyles"

const PropertyPackageInfo = () => {
/////////////////////////////////////////
///                                   ///
///     STATES AND PRELIM VALUES      ///
///                                   ///
/////////////////////////////////////////

    const [propertyData, setPropertyData] = useRecoilState(propertyDataState)


    // Question Data
    let qArray = [0, q1, q2, q3]
    let setQArray = [0 , setQ1, setQ2, setQ3]

    // How did packages get damaged
    const [q1, setQ1] = useState("None")
    let q1List = ["Dropped", "Run Over", "Broke Inside Car", "Lost / Stolen", "Other"] 


    const [q2, setQ2] = useState("None")

    const [q3, setQ3] = useState("None")




/////////////////////////////////////////
///                                   ///
///       HANDLERS AND CHECKERS       ///
///                                   ///
/////////////////////////////////////////

    const isChecked = (itm, qNum) => {
        if (itm == qArray[qNum]){
            return true
        } else { return false}
    }

    const handleOneAnswer = (itm, qNum) => {
        if (itm == "CLEAR"){
            setQArray[qNum]([])
        }
        else{
            setQArray[qNum](itm)
        }
    }

    const handleMultipleAnswer = (itm, qNum) => {
        if (itm == "CLEAR"){
            setQArray[qNum]([])
        }
    }



/////////////////////////////////////////
///                                   ///
///     GENERATORS AND RENDERINGS     ///
///                                   ///
/////////////////////////////////////////

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



/////////////////////////////////////////
///                                   ///
///           MAIN RENDERING          ///
///                                   ///
/////////////////////////////////////////
    return(
        <View>
            <Banner />
            <ScrollView>
                <Text style={Template.title}>How were the package(s) damaged? Check all that apply.</Text>
                <View>
                    {generateCheckBoxes(q1List, 1, false)}
                </View>
            </ScrollView>
        </View>
    )
}
export default PropertyPackageInfo