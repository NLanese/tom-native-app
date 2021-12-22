import React, { useState } from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../Styles/ReportAnAccidentStyles";
import Title from "./ReportAnAccidentComponents/Title";

const ReportAnAccident = () => {
    const [accidentData, setAccidentData] = useState({})

    return (
        <View style={ReportAnAccidentStyle.container}>
            <Title />
        </View>
    )
}

export default ReportAnAccident