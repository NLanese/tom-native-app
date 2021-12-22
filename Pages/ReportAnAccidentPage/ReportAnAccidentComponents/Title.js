import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyle } from "../../../Styles/ReportAnAccidentStyles";

const Title = () => {

    return (
        <View style={ReportAnAccidentStyle.titleContainer}>
            <Text style={ReportAnAccidentStyle.titleText}> Report An Accident </Text>
        </View>
    )
}

export default Title