import React from "react";
import { View, Text } from 'react-native'
import { ReportAnAccidentStyles } from "../../../Styles/ReportAnAccidentStyles";

const Title = () => {

    return (
        <View style={ReportAnAccidentStyles.titleContainer}>
            <Text style={ReportAnAccidentStyles.titleText}> Report An Accident </Text>
        </View>
    )
}

export default Title