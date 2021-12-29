import React from "react";
import { View, Text } from 'react-native'
import { CreateOrAddStyle } from "../../../Styles/ReportAnAccidentStyles";

const Title = () => {

    return (
        <View style={CreateOrAddStyle.titleContainer}>
            <Text style={CreateOrAddStyle.text}> Hello my name is Tom, I am sorry to hear about your accident. Let me help get you started! Are you creating a new accident report or need to add to an existing one? </Text>
        </View>
    )
}

export default Title