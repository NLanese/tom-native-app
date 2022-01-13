import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
import SignInBox from './LandingComponents/SignInBox'
import Title from './LandingComponents/Title';

const LandingPage = ({ handleLoggedIn, navigation }) => {
    return (
        <View style={LandingStyles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View>
                    <Title />
                    <SignInBox handleLoggedIn={handleLoggedIn}/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default LandingPage;