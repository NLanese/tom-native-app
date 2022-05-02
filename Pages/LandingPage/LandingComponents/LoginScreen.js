import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { Toggle } from '@ui-kitten/components';
import { SignInBoxStyles } from '../../../Styles/LandingPageStyles';
import Email from './SignInBoxComponents/Email';
import Password from './SignInBoxComponents/Password';
import LoginButton from './SignInBoxComponents/LoginButton';
import ForgotPasswordModal from './SignInBoxComponents/ForgotPasswordModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ handleInput, handleLoggedIn, userData, rememberMe }) => {
    const [checked, setChecked] = useState(rememberMe)
    const [visible, setVisible] = useState(false)

    return(
        <View style={SignInBoxStyles.container}>
        
        {/* The Main DIV is a touchable in order to more eaasily remove the iPhone keyboard */}
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
            <View>
                <View style={SignInBoxStyles.titleBox}>
                    <Text style={SignInBoxStyles.titleText}>
                        Login
                    </Text>
                </View>

                {/* Login Fields */}
                <View style={SignInBoxStyles.loginContents}><Email handleInput={handleInput} userData={userData} rememberMe={rememberMe}/></View>
                <View style={SignInBoxStyles.loginContents}><Password handleInput={handleInput} userData={userData} rememberMe={rememberMe}/></View>

                {/* Login Button */}
                <View style={SignInBoxStyles.loginButton}>
                    <LoginButton 
                        userData={userData} 
                        handleLoggedIn={handleLoggedIn}
                        checked={checked}
                    />
                </View>

                {/* Remember Me Toggle */}
                <View syle={SignInBoxStyles.rememberMe}>
                    <View style={SignInBoxStyles.rememberMeTextBox}>
                        <Text style={{color: '#f9f9f9', fontSize: 12, fontFamily: 'GilroyRegular', color: "#EEEEEE", letterSpacing: 3}}>REMEMBER ME?</Text>
                    </View>
                    <Toggle 
                        checked={checked} 
                        onChange={() => setChecked(!checked)} 
                        style={SignInBoxStyles.rememberToggle}
                    />
                </View>

                {/* Forgot Password Button Space*/}
                <View style={SignInBoxStyles.forgotPasswordSpace}>
                    <View style={SignInBoxStyles.divider} />
                    <View style={SignInBoxStyles.forgotBox}>

                        {/* Forgot Password Button */}
                        <TouchableWithoutFeedback onPress={() => setVisible(true)}>
                            <View style={{paddingBottom: 2.4, borderBottomWidth: 1, borderColor: 'rgba(255, 255, 255, 0.36)', }}><Text style={SignInBoxStyles.forgotPasswordText}>FORGOT PASSWORD?</Text></View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

            </View>
        </TouchableWithoutFeedback>  

        <ForgotPasswordModal visible={visible} setVisible={setVisible} />
    </View>
    )
}

export default LoginScreen