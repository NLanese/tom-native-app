import React, { useEffect } from "react";
import { View } from 'react-native'
import { websiteState } from '../../Recoil/atoms'
import { useRecoilState } from 'recoil'
import QualityButton from "./ScoreCardComponents/ButtonboxComponents/QualityButton";
import SafetyAndComplianceButton from "./ScoreCardComponents/ButtonboxComponents/SafetyAndComplianceButton";
import TeamButton from "./ScoreCardComponents/ButtonboxComponents/TeamButton";

const ScoreCard = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    useEffect(() => {
        setWebsite('Scorecard')
    }, [])

    return (
        <View>            
            <QualityButton />
            <SafetyAndComplianceButton />
            <TeamButton />
        </View>
    )
}

export default ScoreCard