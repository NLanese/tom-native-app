import react from 'react';
import { View, Text } from 'react-native'
import { buttonBox } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton';

const ButtonBox = () => {

    return (
        <View style={buttonBox.container}>
            <ScoreCardButton />
            <ShiftPlannerButton />
            <ReportAnAccidentButton />
        </View>
    )
}

export default ButtonBox