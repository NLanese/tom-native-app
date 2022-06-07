import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text, ScrollView } from 'react-native';
import { SignInBoxStyles } from '../../../Styles/LandingPageStyles';
import UpdateField from './SignInBoxComponents/UpdateField';
import SignupButton from "./SignInBoxComponents/SignUpButton"
const SignupScreen = ({ handleInput, handleLoggedIn, userData }) => {

    const [checked, setChecked] = useState(false)


    try{
        return(
            <View style={SignInBoxStyles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{borderColor: 'red', borderWidth: 2}}>
                <ScrollView contentContainerStyle={{height: '120%'}}>
                    <View style={SignInBoxStyles.titleBox}>
                        <Text style={SignInBoxStyles.titleText}>
                            Sign Up
                        </Text>
                    </View>
                        <UpdateField field="firstname" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="lastname" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="email" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="phoneNumber" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="signUpToken" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="password" handleInput={handleInput} userData={userData}/>
                        <UpdateField field="confirmPassword" handleInput={handleInput} userData={userData}/>
                        <View style={SignInBoxStyles.signupButton}>
                            <SignupButton userData={userData} handleLoggedIn={handleLoggedIn} />
                        </View>
                </ScrollView>
            </TouchableWithoutFeedback>  
            </View>
        )
    } catch(err){
        throw new Error("102")
    }
    
}

export default SignupScreen