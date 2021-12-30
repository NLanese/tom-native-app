import React from "react";
import { View, Text} from 'react-native'
import { MedicalAttentionStyle } from "../../Styles/ReportAnAccidentStyles";
import NavBar from "../../Global/NavBar";

const MedicalAttention = () => {


    return (
        <View style={MedicalAttentionStyle.container}>
            <NavBar />
            <Text style={MedicalAttentionStyle.text}>Do you or anyone at the scene of the accident need medical attention?</Text>

        </View>
    )
}

export default MedicalAttention