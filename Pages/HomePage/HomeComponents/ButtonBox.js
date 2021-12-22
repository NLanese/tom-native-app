import react from 'react';
import { View, Text } from 'react-native'
import { buttonBox } from '../../../Styles/HomeStyles';
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
        <View style={buttonBox.container}>

            <View style={buttonBox.leftContainer}>
                <ScoreCardButton />
                <ShiftPlannerButton />
                <ReportAnAccidentButton />
                <ReportingButton />
            </View>

            <View style={buttonBox.rightContainer}>
                <ProductivityButton />
                <CommunicationButton />
                <AnalyticsButton />
                <SettingsButton />
            </View>

        </View>
    )
}

export default ButtonBox