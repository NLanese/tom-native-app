import React from "react";
import { View, Text } from 'react-native'
import { CreateOrAddStyle } from "../../../Styles/ReportAnAccidentStyles";

const Title = () => {

    return (
        <View style={CreateOrAddStyle.titleContainer}>
            <Text style={CreateOrAddStyle.titleText}> Create a new accident </Text>
            <Text style={CreateOrAddStyle.titleText}> Or </Text>
            <Text style={CreateOrAddStyle.titleText}> Add to an existing one </Text>

        </View>
    )
}

export default Title