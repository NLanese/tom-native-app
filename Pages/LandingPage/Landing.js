import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
import LandingPageContainer from './LandingComponents/LandingPageContainer';
import Title from './LandingComponents/Title';

const LandingPage = ({ handleLoggedIn }) => {
    return (
        <View style={LandingStyles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    <View style={LandingStyles.titleIcon}>
                        <Title />
                    </View>
                    <LandingPageContainer handleLoggedIn={handleLoggedIn} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default LandingPage;