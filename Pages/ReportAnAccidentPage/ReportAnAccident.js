import React, { useState } from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../Styles/ReportAnAccidentStyles";
import Title from "./ReportAnAccidentComponents/Title";
import InputField from "./ReportAnAccidentComponents/InputField";

const ReportAnAccident = () => {
    const [accidentData, setAccidentData] = useState({})

    const handleInput = (id, information, event) => {
        const input = { ...accidentData }
        input[id] = information
        setAccidentData(input)
    }

    console.log(accidentData)

    return (
        <View style={ReportAnAccidentStyle.container}>
            <Title />
            <InputField accidentData={accidentData} handleInput={handleInput}/>
        </View>
    )
}

export default ReportAnAccident