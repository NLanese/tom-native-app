import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SignInBoxStyles } from '../../Styles/LandingPageStyles'
import UserName from './SignInBoxComponents/UserName'
import Password from './SignInBoxComponents/Password'
import LoginButton from './SignInBoxComponents/LoginButton'
import SignUpButton from './SignInBoxComponents/SignUpButton'

const SignInBox = ({ handleLoggedIn }) => {
    const [userData, setUserData] = useState({})

    const handleInput = (id, information) => {
        const input = { ...userData };
		input[id] = information;
		setUserData(input);
    }

    // console.log(userData)

    return (
        <View style={SignInBoxStyles.container}>
            <UserName handleInput={handleInput} />
            <Password handleInput={handleInput} />
            <LoginButton userData={userData} handleLoggedIn={handleLoggedIn}/>
            <SignUpButton />
        </View>
    );
};

export default SignInBox;