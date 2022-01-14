import React, { useEffect } from "react";
import { View, Dimensions } from 'react-native'
import { websiteState } from '../../Recoil/atoms'
import { useRecoilState } from 'recoil'
import QualityButton from "./ScoreCardComponents/ButtonboxComponents/QualityButton";
import SafetyAndComplianceButton from "./ScoreCardComponents/ButtonboxComponents/SafetyAndComplianceButton";
import TeamButton from "./ScoreCardComponents/ButtonboxComponents/TeamButton";
import Banner from "../../Global/Banner";

let maxWidth= Dimensions.get('window').width
let maxHeight= Dimensions.get('window').height

const ScoreCard = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    useEffect(() => {
        setWebsite('Scorecard')
    }, [])

    let maxWidth= Dimensions.get('window').width
    let spaces = (maxWidth - 340) / 2


    return (
        <View style={{alignItems: 'center', backgroundColor: '#f9f9f9', height: '100%'}}> 
        <View style={{ width: maxWidth}}>
            <Banner />
        </View>
            <View style={{marginBottom: spaces, marginTop: spaces}}>
                <QualityButton />
            </View>  
            <View style={{marginBottom: spaces}}>
                <SafetyAndComplianceButton />
            </View>  
            <View style={{marginBottom: spaces}}>
                <TeamButton />
            </View>  
        </View>
    )
}

export default ScoreCard