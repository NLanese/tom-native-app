import React from 'react';
import { View } from 'react-native';
import SignInBox from './LandingComponents/SignInBox'

const LandingPage = ({ handleLoggedIn }) => {
    return (
        <View>
			<SignInBox handleLoggedIn={handleLoggedIn}/>
        </View>
    );
};

export default LandingPage;