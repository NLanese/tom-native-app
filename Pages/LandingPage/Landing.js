import React from 'react';
import { View } from 'react-native';
import { LandingStyles } from '../../Styles/LandingPageStyles';
import SignInBox from './LandingComponents/SignInBox'
import Title from './LandingComponents/Title';

const LandingPage = ({ handleLoggedIn }) => {
    return (
        <View style={LandingStyles.container}>
            <Title />

			<SignInBox handleLoggedIn={handleLoggedIn}/>
        </View>
    );
};

export default LandingPage;