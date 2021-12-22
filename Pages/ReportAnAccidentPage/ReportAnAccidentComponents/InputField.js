import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../../Styles/ReportAnAccidentStyles";
import AccidentNameInput from "./InputFieldsComponents/AccidentNameInput";
import UsingSafetyButton from "./InputFieldsComponents/UsingSafetyButton";
import SafetyFailedButton from "./InputFieldsComponents/SafetyFailedButton";

const InputField = ({ accidentData, handleInput }) => {

    return (
        <View style={ReportAnAccidentStyle.inputFieldContainer}>
            <AccidentNameInput handleInput={handleInput}/>
            <UsingSafetyButton handleInput={handleInput} usingSafety={accidentData.usingSafety}/>
            <SafetyFailedButton handleInput={handleInput} safetyFailed={accidentData.safetyFailed} />
        </View>
    )
}

export default InputField