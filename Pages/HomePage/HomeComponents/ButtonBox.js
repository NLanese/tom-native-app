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
import Communication from '../../CommunicationPage/Communication';
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
                <ProductivityButton />
                {/* <CommunicationButton /> */}
            </View>

            <View style={ButtonBoxStyles.rightContainer}>
                <ReportAnAccidentButton />
                <ShiftPlannerButton />
            </View>
            <View style={ButtonBoxStyles.arrowBox}>
                <Image source={arrowIcon} style={ButtonBoxStyles.arrow}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("score_card")} style={ButtonBoxStyles.bottomTouch}> 
                <View> 
                    <View style={ButtonBoxStyles.scoreTitleBox}>
                        <Text style={ButtonBoxStyles.scoreTitle}>Leaderboard and Scorecard</Text>
                    </View>
                    <View style={ButtonBoxStyles.scorecard}>
                        <EmployeeQuality driverData={user} sortBy={"FICO"} rank={1} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBox