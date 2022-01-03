import react from 'react';
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

            <ScoreCardButton />
            {/* <View style={ButtonBoxStyles.leftContainer}>
                <ShiftPlannerButton />
                <ReportAnAccidentButton />
                <ReportingButton />
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ProductivityButton />
                <CommunicationButton />
                <AnalyticsButton />
                <SettingsButton />
            </View> */}

        </View>
    )
}

export default ButtonBox