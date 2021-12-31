import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { EmailStyles } from '../../../../Styles/LandingPageStyles';

const Password = ({ handleInput }) => {
    return (
        <View style={EmailStyles.container}>
            <Text> Password </Text>
            <TextInput style={EmailStyles.input} placeholder="Please enter your Password!" placeholderTextColor={'white'} onChangeText={password => {
                handleInput('password', password);
            }}/>
        </View>
    );
};

export default Password;