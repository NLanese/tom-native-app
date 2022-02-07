import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

import backgroundImage from '../../assets/loginBackground.png'


const LandingPage = ({ handleLoggedIn }) => {
    return (
        <View style={LandingStyles.container}>
            <ImageBackground style={LandingStyles.backdrop} source={backgroundImage} resizeMode="cover">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={{backgroundColor: 'rgba(52, 52, 52, 0.2) !important',}}>
                        <View style={LandingStyles.titleIcon}>
                            <Title />
                        </View>
                        <LandingPageContainer handleLoggedIn={handleLoggedIn} />
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    );
};

export default LandingPage;