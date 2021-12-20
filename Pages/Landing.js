import React from 'react';
import { View } from 'react-native';
// import Title from './Components/Title'
import SignInBox from './LandingComponents/SignInBox'

const LandingPage = ({ handleLoggedIn }) => {
    return (
        <View>
            {/* <Title /> */}
			<SignInBox handleLoggedIn={handleLoggedIn}/>
        </View>
    );
};

export default LandingPage;