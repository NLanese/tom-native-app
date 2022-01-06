import React from 'react';
import { View } from 'react-native'
import { ButtonBoxStyles } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton'
import ProductivityButton from './ButtonBoxComponents/ProductivityButton';
import CommunicationButton from './ButtonBoxComponents/CommunicationButton'
import SettingsButton from './ButtonBoxComponents/SettingsButton';

const ButtonBox = () => {

    return (
        <View style={ButtonBoxStyles.container}>
            <View style={ButtonBoxStyles.leftContainer}>
                <ScoreCardButton />
                <ReportAnAccidentButton />
                {/* <CommunicationButton /> */}
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ShiftPlannerButton />
                <ProductivityButton />
                {/* <SettingsButton /> */}
            </View>
        </View>
    )
}

export default ButtonBox