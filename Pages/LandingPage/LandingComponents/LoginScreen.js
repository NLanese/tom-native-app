import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { Toggle } from '@ui-kitten/components';
import { SignInBoxStyles } from '../../../Styles/LandingPageStyles';
import Email from './SignInBoxComponents/Email';
import Password from './SignInBoxComponents/Password';
import LoginButton from './SignInBoxComponents/LoginButton';
import ForgotPasswordModal from './SignInBoxComponents/ForgotPasswordModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ handleInput, handleLoggedIn, userData }) => {
    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(async () => {
        const rememberUser = await AsyncStorage.getItem('@remember_User')
        if (rememberUser === 'true') {
            setChecked(true)
        }
        else {
            setChecked(false)
        }
        await AsyncStorage.setItem('@remember_User', checked.toString())
    }, [setChecked])

    // const isChecked = async () => {
    //     const rememberUser = await AsyncStorage.getItem('@remember_User')
    //     if (remembmerUser === 'true') {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }



    return(
        <View style={SignInBoxStyles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
            <View>
                <View style={SignInBoxStyles.titleBox}>
                    <Text style={SignInBoxStyles.titleText}>
                        Login
                    </Text>
                </View>
                <View style={SignInBoxStyles.loginContents}><Email handleInput={handleInput} userData={userData}/></View>
                <View style={SignInBoxStyles.loginContents}><Password handleInput={handleInput} userData={userData}/></View>
                <View style={SignInBoxStyles.loginButton}>
                    <LoginButton 
                        userData={userData} 
                        handleLoggedIn={handleLoggedIn}
                        checked={checked}
                    />
                </View>
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
                <View style={SignInBoxStyles.forgotPasswordSpace}>
                    <View style={SignInBoxStyles.divider} />
                    <View style={SignInBoxStyles.forgotBox}>
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