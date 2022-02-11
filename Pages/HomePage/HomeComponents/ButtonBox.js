import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { ButtonBoxStyles } from '../../../Styles/HomeStyles';
import ScoreCardButton from './ButtonBoxComponents/ScoreCardButton'
import ShiftPlannerButton from './ButtonBoxComponents/ShiftPlannerButton'
import ReportAnAccidentButton from './ButtonBoxComponents/ReportAnAccidentButton'
import ProductivityButton from './ButtonBoxComponents/ProductivityButton';
import CommunicationButton from './ButtonBoxComponents/CommunicationButton';
import SettingsButton from './ButtonBoxComponents/SettingsButton';
import RosterButton from './ButtonBoxComponents/RosterButton';
import EmployeeQuality from '../../ScoreCardPage/ScoreCardComponents/InformationComponents/EmployeeQuality';
import arrowIcon from '../../../assets/arrowTopRight.png'



const ButtonBox = ({user}) => {
    const navigation = useNavigation()

    return (
        <View style={ButtonBoxStyles.container}>
            
            <View style={ButtonBoxStyles.leftContainer}>
                {/* <ScoreCardButton /> */}
                <RosterButton />
                <CommunicationButton />
                {/* <ProductivityButton /> */}
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ReportAnAccidentButton />
                <ShiftPlannerButton />
            </View>
            <View style={ButtonBoxStyles.arrowBox}>
                <Image source={arrowIcon} style={ButtonBoxStyles.arrow}/>
            </View>
        </View>
    )
}

export default ButtonBox