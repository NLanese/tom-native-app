import React from 'react';
import { View } from 'react-native'
import { ButtonBoxStyles } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton'
import ProductivityButton from './ButtonBoxComponents/ProductivityButton';
import CommunicationButton from './ButtonBoxComponents/CommunicationButton';
import SettingsButton from './ButtonBoxComponents/SettingsButton';
import Communication from '../../CommunicationPage/Communication';
import RosterButton from './ButtonBoxComponents/RosterButton';


const ButtonBox = () => {

    return (
        <View style={ButtonBoxStyles.container}>
            <View style={ButtonBoxStyles.leftContainer}>
                <ScoreCardButton />
                <ProductivityButton />
                <CommunicationButton />
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ReportAnAccidentButton />
                <ShiftPlannerButton />
                <RosterButton />

            </View>
        </View>
    )
}

export default ButtonBox