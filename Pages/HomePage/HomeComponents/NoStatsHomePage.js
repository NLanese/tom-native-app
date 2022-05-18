import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Modal, Button, CheckBox } from '@ui-kitten/components';

import { useRecoilState } from 'recoil';
import { userState } from '../../../Recoil/atoms';

import ButtonBox from './ButtonBox';
import { HomeStyles, ButtonBoxStyles } from '../../../Styles/HomeStyles';

import Banner from '../../../Global/Banner';
import nameObj from '../../../Hooks/handleNameCaseChange'

const NoStatsHomePage = ({handleLoggedIn}) => {

    const [user, setUser] = useRecoilState(userState)


    return(
        <View>
            <Banner handleLoggedIn={handleLoggedIn}/>
            <ScrollView style={HomeStyles.container}> 
                    <View style={HomeStyles.titleBox}>
                        <Text style={HomeStyles.title}>Welcome</Text>
                    </View>
                    <View style={HomeStyles.subTitleBox}>
                        <Text style={HomeStyles.subTitle}>HI, {user.firstname}</Text>
                    </View>
                    
                    <ButtonBox user={user}/>

                    <View style={{marignTop: 20, height: 1, width: 1, backgroundColor: '#eaeaea'}}></View>

            </ScrollView>
        </View>
    )
}

export default NoStatsHomePage