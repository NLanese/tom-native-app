import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { SignInBoxStyles } from '../../../Styles/LandingPageStyles';
import UpdateField from './SignInBoxComponents/UpdateField';
import SignupButton from './SignInBoxComponents/SingUpButton';

const SignupScreen = ({ handleInput, handleLoggedIn, userData }) => {

    const [checked, setChecked] = useState(false)


    return(
        <View style={SignInBoxStyles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
            <View>
                <View style={SignInBoxStyles.titleBox}>
                    <Text style={SignInBoxStyles.titleText}>
                        Sign Up
                    </Text>
                </View>
                    <UpdateField field="firstname" handleInput={handleInput} />
                    <UpdateField field="lastname" handleInput={handleInput} />
                    <UpdateField field="email" handleInput={handleInput} />
                    <UpdateField field="phoneNumber" handleInput={handleInput} />
                    <UpdateField field="signUpToken" handleInput={handleInput} />
                    <UpdateField field="password" handleInput={handleInput} />
                    <UpdateField field="confirmPassword" handleInput={handleInput} />
                    <View style={SignInBoxStyles.loginButton}>
                        <SignupButton userData={userData} handleLoggedIn={handleLoggedIn}/>
                    </View>
            </View>
        </TouchableWithoutFeedback>  
        </View>
    )
}

export default SignupScreen