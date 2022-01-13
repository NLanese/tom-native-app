import React from 'react';
import { View } from 'react-native'
import { ButtonBoxStyles } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton'
import ProductivityButton from './ButtonBoxComponents/ProductivityButton';

const ButtonBox = () => {

    return (
        <View style={ButtonBoxStyles.container}>
            <View style={ButtonBoxStyles.leftContainer}>
                <ScoreCardButton />
                <ProductivityButton />
                <Communication />
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ReportAnAccidentButton />
                <ShiftPlannerButton />
            </View>
        </View>
    )
}

export default ButtonBox