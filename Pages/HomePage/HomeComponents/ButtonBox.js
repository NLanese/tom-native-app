import React from 'react';
import { View, Text } from 'react-native'
import { ButtonBoxStyles } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton'
import ReportingButton from './ButtonBoxComponents/ReportingButton';
import ProductivityButton from './ButtonBoxComponents/ProductivityButton';
import CommunicationButton from './ButtonBoxComponents/CommunicationButton'
import AnalyticsButton from './ButtonBoxComponents/AnalyticsButton';
import SettingsButton from './ButtonBoxComponents/SettingsButton';

const ButtonBox = () => {

    return (
        <View style={ButtonBoxStyles.container}>
            <View style={ButtonBoxStyles.leftContainer}>
                <ScoreCardButton />
                <ReportAnAccidentButton />
                <ProductivityButton />
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ShiftPlannerButton />
                <CommunicationButton />
                <SettingsButton />
            </View>
        </View>
    )
}

export default ButtonBox