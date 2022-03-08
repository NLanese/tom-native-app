import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useRecoilState } from 'recoil';
import { userState } from '../../../Recoil/atoms';

import Template from '../../../Styles/RAA/RAATemplateStyles';
import NoDataButtonBox from './NoDataButtonBox';

import Banner from '../../../Global/Banner';

const NoData = () => {

    const [user, setUser] = useRecoilState(userState)

    const hasShifts = () => {
        if (user.shiftPlanners){
            return (
                <View>
                    <Text style={Template.subTitle2}>
                        While you cannot yet check scorecards, you may report an accident, check your shifts, and send messages
                    </Text>
                    <NoDataButtonBox user={user}/>
                </View>
                
            )
        }
    }

    return(
        <View>
            <Banner />
            <ScrollView>
                <Text style={Template.title}>
                    You do not have data in your DSP System yet!
                </Text>
                {hasShifts()}
            </ScrollView>

        </View>
    )
}

export default NoData