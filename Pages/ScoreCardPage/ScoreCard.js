import React from "react";
import { View } from 'react-native'
import QualityButton from "./ScoreCardComponents/ButtonboxComponents/QualityButton";
import SafetyAndComplianceButton from "./ScoreCardComponents/ButtonboxComponents/SafetyAndComplianceButton";
import TeamButton from "./ScoreCardComponents/ButtonboxComponents/TeamButton";
import NavBar from "../../Global/NavBar";

const ScoreCard = () => {

    return (
        <View>            
            <QualityButton />
            <SafetyAndComplianceButton />
            <TeamButton />
        </View>
    )
}

export default ScoreCard