import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyles } from "../../../Styles/ReportAnAccidentStyles";
import AccidentNameInput from "./InputFieldsComponents/AccidentNameInput";
import AccidentLocation from "./InputFieldsComponents/AccidentLocationInput";
import UsingSafetyButton from "./InputFieldsComponents/UsingSafetyButton";
import SafetyFailedButton from "./InputFieldsComponents/SafetyFailedButton";
import PackageNumberInput from "./InputFieldsComponents/PackageNumberInput";
import SafetyEquipmentUsedInput from "./InputFieldsComponents/SafetyEquipmentUsed";

const InputField = ({ accidentData, handleInput }) => {

    return (
        <View style={ReportAnAccidentStyles.inputFieldContainer}>
            <AccidentNameInput handleInput={handleInput}/>
            <AccidentLocation handleInput={handleInput} />
            {/* <UsingSafetyButton handleInput={handleInput} usingSafety={accidentData.usingSafety}/>
            <SafetyFailedButton handleInput={handleInput} safetyFailed={accidentData.safetyFailed} />
            <PackageNumberInput handleInput={handleInput} />
            <SafetyEquipmentUsedInput handleInput={handleInput} /> */}
        </View>
    )
}

export default InputField