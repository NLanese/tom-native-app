import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

import backgroundImage from '../../assets/loginBackground.png'
import gradient from '../../assets/black-to-clear-screen-gradient.png'
import blueGradient from '../../assets/blue-gradient.png'

import { IS_SERVER_READY } from '../../GraphQL/operations';
import { useQuery } from '@apollo/client';


const LandingPage = ({ handleLoggedIn, rememberMe, setRememberMe }) => {

    const [tab, setTab] = useState(0)

    const renderBackground = () => {
        if (tab === 0) {
            return(
                gradient
            )
        }
        else{
            return (
               blueGradient
            )
        }
    }

    
    return (
        <View style={LandingStyles.container}>
            <ImageBackground style={LandingStyles.backdrop} source={backgroundImage} resizeMode="cover">
            <ImageBackground style={LandingStyles.backdrop} source={renderBackground()} resizeMode='cover'>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={LandingStyles.contents}>
                        <LandingPageContainer handleLoggedIn={handleLoggedIn} rememberMe={rememberMe} setRememberMe={setRememberMe} setTab={setTab} tab={tab}/>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
            </ImageBackground>
        </View>
    );
};

export default LandingPage;