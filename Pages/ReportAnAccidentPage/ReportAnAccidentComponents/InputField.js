import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../../Styles/ReportAnAccidentStyles";
import AccidentNameInput from "./InputFieldsComponents/AccidentNameInput";
import UsingSafetyButton from "./InputFieldsComponents/UsingSafetyButton";

const InputField = ({ accidentData, handleInput }) => {

    return (
        <View style={ReportAnAccidentStyle.inputFieldContainer}>
            <AccidentNameInput handleInput={handleInput}/>
            <UsingSafetyButton handleInput={handleInput} usingSafety={accidentData.usingSafety}/>
        </View>
    )
}

export default InputField