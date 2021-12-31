import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { EmailStyles } from '../../../../Styles/LandingPageStyles'

const UserName = ({ handleInput }) => {
    return (
        <View style={EmailStyles.container}>
            <Text style={EmailStyles.text}> Email </Text>
            <TextInput name='Email' placeholder="Please enter your Email Address!" placeholderTextColor={'white'} style={EmailStyles.input} onChangeText={email => {
                handleInput('email', email);
            }}/>
        </View>
    );
};

export default UserName;