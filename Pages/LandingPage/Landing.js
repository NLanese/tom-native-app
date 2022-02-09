import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

import backgroundImage from '../../assets/loginBackground.png'
import {LinearGradient} from 'expo-linear-gradient';



const LandingPage = ({ handleLoggedIn }) => {
    return (
        <LinearGradient colors={['black' ,'white']} start={{x: 0.5, y: 1 }} end={{x: 0.5, y: 0.7 }} style={{flex: 1}}>
            <View style={LandingStyles.container}>
                <ImageBackground style={LandingStyles.backdrop} source={backgroundImage} resizeMode="cover">
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{backgroundColor: 'rgba(52, 52, 52, 0.4) !important',}}>
                            <View style={LandingStyles.titleIcon}>
                                <Title />
                            </View>
                            <LandingPageContainer handleLoggedIn={handleLoggedIn} />
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
        </LinearGradient>
    );
};

export default LandingPage;