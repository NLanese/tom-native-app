import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, ImageBackground, Image } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

import backgroundImage from '../../assets/loginBackground.png'
import gradient from '../../assets/black-to-clear-screen-gradient.png'


const LandingPage = ({ handleLoggedIn }) => {
    // console.log(AsyncStorage.getItem('@email'))
    // console.log(AsyncStorage.getItem('@password'))

    return (
               <View style={LandingStyles.container}>
                <ImageBackground style={LandingStyles.backdrop} source={backgroundImage} resizeMode="cover">
                <ImageBackground style={LandingStyles.gradient} source={gradient} resizeMode='cover'>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{backgroundColor: 'rgba(52, 52, 52, 0.4) !important',}}>
                            <View style={LandingStyles.titleIcon}>
                                {/* <Title /> */}
                            </View>
                            <View style={LandingStyles.contents}>
                                <LandingPageContainer handleLoggedIn={handleLoggedIn} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
                </ImageBackground>
            </View>
    );
};

export default LandingPage;