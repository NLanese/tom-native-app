import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { Toggle } from '@ui-kitten/components';
import { SignInBoxStyles } from '../../../Styles/LandingPageStyles';
import Email from './SignInBoxComponents/Email';
import Password from './SignInBoxComponents/Password';
import LoginButton from './SignInBoxComponents/LoginButton';

const LoginScreen = ({ handleInput, handleLoggedIn, userData }) => {

    const [checked, setChecked] = useState(false)

    return(
        <View style={SignInBoxStyles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
            <View>
                <View style={SignInBoxStyles.titleBox}>
                    <Text style={SignInBoxStyles.titleText}>
                        Login
                    </Text>
                </View>
                <View style={SignInBoxStyles.loginContents}><Email handleInput={handleInput} /></View>
                <View style={SignInBoxStyles.loginContents}><Password handleInput={handleInput} /></View>
                <View style={SignInBoxStyles.loginButton}><LoginButton userData={userData} handleLoggedIn={handleLoggedIn}/></View>
                <View syle={SignInBoxStyles.rememberMe}>
                    <View style={SignInBoxStyles.rememberMeTextBox}>
                        <Text style={{color: '#f9f9f9', fontSize: 16, fontFamily: 'GilroySemiBold'}}>Remember Me</Text>
                    </View>
                    <Toggle 
                        checked={checked} 
                        onChange={() => setChecked(!checked)} 
                        style={SignInBoxStyles.rememberToggle}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>  
        </View>
    )
}

export default LoginScreen