import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../../Styles/ReportAnAccidentStyles";
import AccidentNameInput from "./InputFieldsComponents/AccidentNameInput";

const InputField = ({ accidentData, handleInput }) => {

    return (
        <View style={ReportAnAccidentStyle.inputFieldContainer}>
            <AccidentNameInput handleInput={handleInput}/>
        </View>
    )
}

export default InputField